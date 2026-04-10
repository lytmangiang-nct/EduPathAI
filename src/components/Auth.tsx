import React, { useState } from 'react';
import { auth } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { motion, AnimatePresence } from 'motion/react';
import { LogIn, UserPlus, Mail, Lock, User as UserIcon, ArrowRight, Loader2, Eye, EyeOff } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      // Ensure the popup is triggered as directly as possible
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      console.error("Google Auth error:", err);
      if (err.code === 'auth/popup-blocked') {
        setError('Trình duyệt đã chặn cửa sổ bật lên. Vui lòng cho phép popup cho trang web này hoặc thử lại.');
      } else if (err.code === 'auth/cancelled-popup-request') {
        setError('Yêu cầu đăng nhập đã bị hủy.');
      } else if (err.code === 'auth/popup-closed-by-user') {
        setError('Cửa sổ đăng nhập đã bị đóng trước khi hoàn tất. Vui lòng không đóng cửa sổ cho đến khi đăng nhập xong.');
      } else {
        setError('Không thể đăng nhập bằng Google. Vui lòng thử lại hoặc sử dụng Email.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!email.includes('@')) {
      setError('Vui lòng nhập email hợp lệ (ví dụ: name@example.com)');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Mật khẩu phải có ít nhất 6 ký tự');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        console.log("Attempting login with:", email);
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        if (!displayName.trim()) {
          setError('Vui lòng nhập tên hiển thị');
          setLoading(false);
          return;
        }
        console.log("Attempting signup with:", email);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
      }
    } catch (err: any) {
      console.error("FULL Auth error object:", JSON.stringify(err, Object.getOwnPropertyNames(err)));
      let message = 'Đã có lỗi xảy ra';
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        message = 'Email hoặc mật khẩu không chính xác';
      } else if (err.code === 'auth/email-already-in-use') {
        message = 'Email này đã được sử dụng';
      } else if (err.code === 'auth/weak-password') {
        message = 'Mật khẩu quá yếu';
      } else if (err.code === 'auth/invalid-email') {
        message = 'Định dạng email không hợp lệ';
      } else if (err.code === 'auth/operation-not-allowed') {
        message = 'Tính năng đăng nhập bằng Email/Mật khẩu chưa được bật trong Firebase Console. Vui lòng liên hệ quản trị viên hoặc bật nó trong phần Authentication > Sign-in method.';
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-blue-100/50 overflow-hidden border border-white/20"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <motion.div 
              key={isLogin ? 'login-icon' : 'signup-icon'}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200"
            >
              {isLogin ? <LogIn className="text-white w-8 h-8" /> : <UserPlus className="text-white w-8 h-8" />}
            </motion.div>
            <h1 className="text-2xl font-bold text-slate-900">EduPath AI</h1>
            <p className="text-slate-500 mt-2">
              {isLogin ? 'Chào mừng bạn quay trở lại' : 'Tạo tài khoản mới để bắt đầu'}
            </p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={cn(
                "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
                isLogin ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={cn(
                "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
                !isLogin ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Đăng ký
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1"
                >
                  <label className="text-sm font-bold text-slate-700 ml-1">Tên hiển thị</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">Mật khẩu</label>
                {isLogin && (
                  <button type="button" className="text-xs text-blue-600 hover:underline font-medium">
                    Quên mật khẩu?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 text-slate-400" /> : <Eye className="w-4 h-4 text-slate-400" />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-100 font-medium space-y-2"
              >
                <p>{error}</p>
                {(error.includes('cửa sổ') || error.includes('Google')) && (
                  <p className="text-xs text-slate-500 pt-2 border-t border-red-100">
                    <b>Mẹo:</b> Nếu bạn đang xem ứng dụng trong khung xem trước (iframe), hãy nhấn vào biểu tượng <b>"Mở trong tab mới"</b> ở góc trên bên phải màn hình để đăng nhập Google thành công.
                  </p>
                )}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 mt-4"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400 font-bold">Hoặc</span>
              </div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-slate-50 transition-all disabled:opacity-70"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Tiếp tục với Google
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
                className="ml-2 text-blue-600 hover:text-blue-700 font-bold transition-colors"
              >
                {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

