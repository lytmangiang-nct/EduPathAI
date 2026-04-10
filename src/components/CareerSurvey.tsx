import React, { useState } from 'react';
import { UserProfile } from '../types';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Save, Loader2, Target, Briefcase, TrendingUp, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function CareerSurvey({ profile, onNavigate }: { profile: UserProfile, onNavigate: (tab: any) => void }) {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    environment: profile.careerGoals?.environment || '',
    lifeGoals: profile.careerGoals?.lifeGoals || '',
    expectedSalary: profile.careerGoals?.expectedSalary || 0,
    futureDirection: profile.careerGoals?.futureDirection || '',
  });

  const handleSave = async () => {
    setLoading(true);
    setSaved(false);
    try {
      await updateDoc(doc(db, 'users', profile.uid), {
        careerGoals: formData
      });
      setSaved(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const environmentOptions = [
    "Năng động, sáng tạo",
    "Ổn định, văn phòng",
    "Làm việc nhóm",
    "Làm việc độc lập",
    "Môi trường học thuật",
    "Khác"
  ];

  const lifeGoalOptions = [
    "Cống hiến cho xã hội",
    "Tự do tài chính",
    "Phát triển bản thân",
    "Cân bằng cuộc sống - công việc",
    "Khác"
  ];

  const directionOptions = [
    "Trở thành quản lý",
    "Khởi nghiệp",
    "Chuyên gia kỹ thuật",
    "Nghiên cứu khoa học",
    "Khác"
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Mục tiêu nghề nghiệp</h2>
        <p className="text-slate-500 mt-1">Chia sẻ mong muốn của bạn để chúng tôi tư vấn chính xác hơn.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Briefcase className="w-4 h-4 text-blue-500" />
            Môi trường làm việc mong muốn
          </label>
          <div className="space-y-3">
            <select
              value={environmentOptions.includes(formData.environment) ? formData.environment : (formData.environment ? 'Khác' : '')}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'Khác') {
                  setFormData({ ...formData, environment: 'Khác: ' });
                } else {
                  setFormData({ ...formData, environment: val });
                }
              }}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Chọn môi trường</option>
              {environmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            
            {(formData.environment.startsWith('Khác') || !environmentOptions.includes(formData.environment) && formData.environment !== '') && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <textarea
                  value={formData.environment.replace('Khác: ', '')}
                  onChange={(e) => setFormData({ ...formData, environment: `Khác: ${e.target.value}` })}
                  placeholder="Nhập chi tiết môi trường bạn mong muốn..."
                  className="w-full p-4 bg-white border border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm min-h-[100px]"
                />
              </motion.div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Heart className="w-4 h-4 text-red-500" />
            Mục tiêu sống của bạn
          </label>
          <div className="space-y-3">
            <select
              value={lifeGoalOptions.includes(formData.lifeGoals) ? formData.lifeGoals : (formData.lifeGoals ? 'Khác' : '')}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'Khác') {
                  setFormData({ ...formData, lifeGoals: 'Khác: ' });
                } else {
                  setFormData({ ...formData, lifeGoals: val });
                }
              }}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Chọn mục tiêu</option>
              {lifeGoalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            
            {(formData.lifeGoals.startsWith('Khác') || !lifeGoalOptions.includes(formData.lifeGoals) && formData.lifeGoals !== '') && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <textarea
                  value={formData.lifeGoals.replace('Khác: ', '')}
                  onChange={(e) => setFormData({ ...formData, lifeGoals: `Khác: ${e.target.value}` })}
                  placeholder="Nhập chi tiết mục tiêu sống của bạn..."
                  className="w-full p-4 bg-white border border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm min-h-[100px]"
                />
              </motion.div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Mức lương kỳ vọng (VNĐ/tháng)
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.expectedSalary}
                onChange={(e) => setFormData({ ...formData, expectedSalary: Number(e.target.value) })}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none pr-16"
                placeholder="VD: 15000000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">VNĐ</span>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Target className="w-4 h-4 text-orange-500" />
              Định hướng tương lai (5-10 năm tới)
            </label>
            <div className="space-y-3">
              <select
                value={directionOptions.includes(formData.futureDirection) ? formData.futureDirection : (formData.futureDirection ? 'Khác' : '')}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === 'Khác') {
                    setFormData({ ...formData, futureDirection: 'Khác: ' });
                  } else {
                    setFormData({ ...formData, futureDirection: val });
                  }
                }}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Chọn định hướng</option>
                {directionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              
              {(formData.futureDirection.startsWith('Khác') || !directionOptions.includes(formData.futureDirection) && formData.futureDirection !== '') && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <input
                    type="text"
                    value={formData.futureDirection.replace('Khác: ', '')}
                    onChange={(e) => setFormData({ ...formData, futureDirection: `Khác: ${e.target.value}` })}
                    placeholder="Nhập định hướng cụ thể của bạn..."
                    className="w-full p-4 bg-white border border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('personality')}
              className="px-6 py-4 text-slate-500 font-bold hover:text-slate-900 transition-all flex items-center gap-2"
            >
              Quay lại
            </button>
            <AnimatePresence>
              {saved && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-green-600 font-bold"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Đã lưu!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex-1 sm:flex-none px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-100 flex items-center justify-center gap-2 transition-all hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> Lưu thông tin</>}
            </button>

            {saved && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => onNavigate('academic')}
                className="flex-1 sm:flex-none px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 flex items-center justify-center gap-2 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]"
              >
                Tiếp theo <ArrowRight className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
