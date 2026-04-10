import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, onSnapshot, setDoc, getDocFromServer } from 'firebase/firestore';
import { UserProfile } from './types';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import { Loader2 } from 'lucide-react';
import { handleFirestoreError, OperationType } from './lib/utils';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthReady(true);
      if (!user) {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || !isAuthReady) return;

    setLoading(true);
    // Test connection as required by instructions
    const testConn = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
        }
        // Skip logging for other errors, as this is simply a connection test.
      }
    };
    testConn();

    // Listen to profile
    const profilePath = `users/${user.uid}`;
    const profileRef = doc(db, 'users', user.uid);
    const unsubProfile = onSnapshot(profileRef, (docSnap) => {
      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      } else {
        // Initialize profile if not exists
        const newProfile: UserProfile = {
          uid: user.uid,
          displayName: user.displayName || 'Người dùng',
          email: user.email || '',
        };
        setDoc(profileRef, newProfile).catch(err => {
          handleFirestoreError(err, OperationType.WRITE, profilePath);
        });
        setProfile(newProfile);
      }
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, profilePath);
      setLoading(false);
    });

    return () => unsubProfile();
  }, [user, isAuthReady]);

  if (!isAuthReady || (user && loading)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600 font-medium">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50">
        {!user ? (
          <Auth />
        ) : (
          profile ? <Dashboard user={user} profile={profile} /> : null
        )}
      </div>
    </ErrorBoundary>
  );
}
