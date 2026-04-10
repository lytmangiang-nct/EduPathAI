import React, { useState } from 'react';
import { User } from 'firebase/auth';
import { UserProfile } from '../types';
import { auth } from '../firebase';
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  Target, 
  GraduationCap, 
  Home, 
  MessageSquare, 
  Search, 
  LogOut,
  User as UserIcon,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

// Import sub-components (to be created)
import PersonalityTests from './PersonalityTests';
import CareerSurvey from './CareerSurvey';
import AcademicRecord from './AcademicRecord';
import FamilySurvey from './FamilySurvey';
import AIConsultant from './AIConsultant';
import Results from './Results';
import ExploreMajors from './ExploreMajors';

interface DashboardProps {
  user: User;
  profile: UserProfile;
}

type Tab = 'overview' | 'personality' | 'career' | 'academic' | 'family' | 'ai' | 'results' | 'explore';

export default function Dashboard({ user, profile }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!profile) return null;

  const menuItems = [
    { id: 'overview', label: 'Tổng quan', icon: LayoutDashboard },
    { id: 'personality', label: 'Kiểm tra tính cách', icon: ClipboardCheck },
    { id: 'career', label: 'Mục tiêu nghề nghiệp', icon: Target },
    { id: 'academic', label: 'Học lực & Khối thi', icon: GraduationCap },
    { id: 'family', label: 'Điều kiện gia đình', icon: Home },
    { id: 'results', label: 'Đề xuất Ngành - Trường', icon: Target },
    { id: 'ai', label: 'AI Tư vấn', icon: MessageSquare },
    { id: 'explore', label: 'Khám phá Ngành học', icon: Search },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'personality': return <PersonalityTests profile={profile} onNavigate={setActiveTab} />;
      case 'career': return <CareerSurvey profile={profile} onNavigate={setActiveTab} />;
      case 'academic': return <AcademicRecord profile={profile} onNavigate={setActiveTab} />;
      case 'family': return <FamilySurvey profile={profile} onNavigate={setActiveTab} />;
      case 'ai': return <AIConsultant profile={profile} onNavigate={setActiveTab} />;
      case 'results': return <Results profile={profile} onNavigate={setActiveTab} />;
      case 'explore': return <ExploreMajors profile={profile} onNavigate={setActiveTab} />;
      default: return <Overview profile={profile} onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 w-72 bg-white border-r border-slate-200 z-50 transition-transform duration-300 lg:relative lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-10 px-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200">
                <GraduationCap className="text-white w-7 h-7" />
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900 tracking-tight">EduPath</span>
                <span className="text-2xl font-black text-blue-600 tracking-tight">AI</span>
              </div>
            </div>

            <nav className="space-y-1.5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as Tab);
                    setIsSidebarOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all",
                    activeTab === item.id 
                      ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", activeTab === item.id ? "text-white" : "text-slate-400")} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-6 border-t border-slate-100">
            <div className="flex items-center gap-3 mb-6 px-2">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-slate-500" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-semibold text-slate-900 truncate">{profile.displayName}</p>
                <p className="text-xs text-slate-500 truncate">{profile.email}</p>
              </div>
            </div>
            <button 
              onClick={() => auth.signOut()}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
            >
              <LogOut className="w-5 h-5" />
              Đăng xuất
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-bottom border-slate-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              <Menu className="w-6 h-6 text-slate-600" />
            </button>
            <h2 className="text-lg font-semibold text-slate-900">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-blue-700">AI Tư vấn sẵn sàng</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

function Overview({ profile, onNavigate }: { profile: UserProfile, onNavigate: (tab: Tab) => void }) {
  const stats = [
    { label: 'Trắc nghiệm', value: profile.personalityResults ? Object.keys(profile.personalityResults).length : 0, total: 3, tab: 'personality', color: 'bg-blue-600' },
    { label: 'Khảo sát', value: (profile.careerGoals ? 1 : 0) + (profile.academicRecord ? 1 : 0) + (profile.familyCondition ? 1 : 0), total: 3, tab: 'career', color: 'bg-indigo-600' },
  ];

  return (
    <div className="space-y-10">
      <div className="relative overflow-hidden bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Chào {profile.displayName.split(' ')[0]}! 👋</h1>
          <p className="text-slate-400 text-lg font-medium opacity-90 leading-relaxed">
            Hành trình chinh phục cánh cửa đại học bắt đầu từ đây. Hãy hoàn thành các khảo sát để nhận được lộ trình tư vấn cá nhân hóa nhất.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('personality')}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all active:scale-95"
            >
              Bắt đầu ngay
            </button>
            <button 
              onClick={() => onNavigate('explore')}
              className="px-8 py-4 bg-white/10 text-white rounded-2xl font-black backdrop-blur-md hover:bg-white/20 transition-all active:scale-95"
            >
              Khám phá ngành học
            </button>
            <button 
              onClick={() => onNavigate('ai')}
              className="px-8 py-4 bg-indigo-600/30 text-white rounded-2xl font-black backdrop-blur-md border border-indigo-400/30 hover:bg-indigo-600/40 transition-all active:scale-95 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Chat với AI
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full -ml-20 -mb-20 blur-2xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                <p className="text-4xl font-black text-slate-900">{stat.value}<span className="text-slate-300 text-2xl"> / {stat.total}</span></p>
              </div>
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110", stat.color.replace('bg-', 'bg-opacity-10 text-'))}>
                <ClipboardCheck className="w-7 h-7" />
              </div>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(stat.value / stat.total) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={cn("h-full rounded-full", stat.color)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { id: 'personality', title: 'Kiểm tra tính cách', desc: 'Holland, MBTI, Creative Types', icon: ClipboardCheck, color: 'bg-purple-50 text-purple-600' },
          { id: 'career', title: 'Mục tiêu nghề nghiệp', desc: 'Định hướng tương lai & kỳ vọng', icon: Target, color: 'bg-orange-50 text-orange-600' },
          { id: 'academic', title: 'Học lực & Khối thi', icon: GraduationCap, desc: 'Đánh giá năng lực học tập', color: 'bg-blue-50 text-blue-600' },
          { id: 'family', title: 'Điều kiện gia đình', icon: Home, desc: 'Học phí & Khu vực học tập', color: 'bg-green-50 text-green-600' },
          { id: 'results', title: 'Kết quả đề xuất', icon: Target, desc: 'Ngành & Trường phù hợp', color: 'bg-pink-50 text-pink-600' },
          { id: 'ai', title: 'AI Tư vấn', icon: MessageSquare, desc: 'Chat trực tiếp với chuyên gia AI', color: 'bg-blue-50 text-blue-600' },
          { id: 'explore', title: 'Khám phá Ngành học', icon: Search, desc: 'Tìm kiếm & Phân loại ngành', color: 'bg-amber-50 text-amber-600' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as Tab)}
            className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", item.color)}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
              {item.title}
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
