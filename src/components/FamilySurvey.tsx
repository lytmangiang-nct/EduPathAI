import React, { useState } from 'react';
import { UserProfile } from '../types';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Save, Loader2, Home, MapPin, Wallet, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function FamilySurvey({ profile, onNavigate }: { profile: UserProfile, onNavigate: (tab: any) => void }) {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    locationPreference: profile.familyCondition?.locationPreference || '',
    tuitionBudget: profile.familyCondition?.tuitionBudget || 0,
  });

  const handleSave = async () => {
    setLoading(true);
    setSaved(false);
    try {
      await updateDoc(doc(db, 'users', profile.uid), {
        familyCondition: formData
      });
      setSaved(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const locationOptions = [
    "miền Bắc",
    "miền Trung",
    "miền Nam"
  ];

  const budgetOptions = [
    { label: "Dưới 20 triệu/năm", value: 20000000 },
    { label: "20 - 40 triệu/năm", value: 40000000 },
    { label: "40 - 60 triệu/năm", value: 60000000 },
    { label: "Trên 60 triệu/năm", value: 100000000 },
    { label: "Khác (Tự nhập)", value: -1 }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Điều kiện gia đình</h2>
        <p className="text-slate-500 mt-1">Thông tin này giúp chúng tôi gợi ý các trường có học phí và vị trí phù hợp.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <MapPin className="w-4 h-4 text-blue-500" />
            Khu vực có thể đi học
          </label>
          <div className="space-y-3">
            <select
              value={locationOptions.includes(formData.locationPreference) ? formData.locationPreference : (formData.locationPreference ? 'Khác' : '')}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'Khác') {
                  setFormData({ ...formData, locationPreference: 'Khác: ' });
                } else {
                  setFormData({ ...formData, locationPreference: val });
                }
              }}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Chọn khu vực</option>
              {locationOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            
            {(formData.locationPreference.startsWith('Khác') || !locationOptions.includes(formData.locationPreference) && formData.locationPreference !== '') && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                <input
                  type="text"
                  value={formData.locationPreference.replace('Khác: ', '')}
                  onChange={(e) => setFormData({ ...formData, locationPreference: `Khác: ${e.target.value}` })}
                  placeholder="Nhập khu vực cụ thể..."
                  className="w-full p-4 bg-white border border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                />
              </motion.div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Wallet className="w-4 h-4 text-green-500" />
            Mức học phí có thể chi trả (VNĐ/năm)
          </label>
          <div className="space-y-3">
            <select
              value={budgetOptions.find(opt => opt.value === formData.tuitionBudget) ? formData.tuitionBudget : (formData.tuitionBudget > 0 ? -1 : 0)}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val === -1) {
                  setFormData({ ...formData, tuitionBudget: 1 }); // Trigger "Other" input
                } else {
                  setFormData({ ...formData, tuitionBudget: val });
                }
              }}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="0">Chọn mức học phí</option>
              {budgetOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>

            {(formData.tuitionBudget === 1 || !budgetOptions.find(opt => opt.value === formData.tuitionBudget && opt.value !== -1)) && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="relative">
                <input
                  type="number"
                  value={formData.tuitionBudget === 1 ? '' : formData.tuitionBudget}
                  onChange={(e) => setFormData({ ...formData, tuitionBudget: Number(e.target.value) })}
                  className="w-full p-4 bg-white border border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm pr-16"
                  placeholder="Nhập số tiền cụ thể..."
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">VNĐ</span>
              </motion.div>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-1 italic">
            * Thông tin này giúp chúng tôi lọc các trường phù hợp với khả năng tài chính của bạn.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('academic')}
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
                onClick={() => onNavigate('results')}
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
