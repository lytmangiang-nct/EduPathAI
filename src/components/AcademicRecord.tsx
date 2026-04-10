import React, { useState } from 'react';
import { UserProfile } from '../types';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Save, Loader2, GraduationCap, BookOpen, CheckCircle2, AlertCircle, Plus, X, ArrowRight, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function AcademicRecord({ profile, onNavigate }: { profile: UserProfile, onNavigate: (tab: any) => void }) {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    selfAssessment: profile.academicRecord?.selfAssessment || '',
    studyGroup: profile.academicRecord?.studyGroup || '',
    favoriteSubjects: profile.academicRecord?.favoriteSubjects || [],
    goodSubjects: profile.academicRecord?.goodSubjects || [],
    weakSubjects: profile.academicRecord?.weakSubjects || [],
    examScores: profile.academicRecord?.examScores || {},
    competencyScore: profile.academicRecord?.competencyScore || '',
    gpa: profile.academicRecord?.gpa || '',
    certificates: profile.academicRecord?.certificates || [],
  });

  const [newSubject, setNewSubject] = useState('');
  const [newCertificate, setNewCertificate] = useState('');
  const [subjectType, setSubjectType] = useState<'favorite' | 'good' | 'weak'>('favorite');

  const handleSave = async () => {
    setLoading(true);
    setSaved(false);
    try {
      const dataToSave = {
        ...formData,
        competencyScore: formData.competencyScore ? Number(formData.competencyScore) : null,
        gpa: formData.gpa ? Number(formData.gpa) : null,
      };
      await updateDoc(doc(db, 'users', profile.uid), {
        academicRecord: dataToSave
      });
      setSaved(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addSubject = () => {
    if (!newSubject.trim()) return;
    const key = `${subjectType}Subjects` as keyof typeof formData;
    const current = formData[key] as string[];
    if (!current.includes(newSubject.trim())) {
      setFormData({ ...formData, [key]: [...current, newSubject.trim()] });
    }
    setNewSubject('');
  };

  const removeSubject = (type: 'favorite' | 'good' | 'weak', sub: string) => {
    const key = `${type}Subjects` as keyof typeof formData;
    const current = formData[key] as string[];
    setFormData({ ...formData, [key]: current.filter(s => s !== sub) });
  };

  const addCertificate = () => {
    if (!newCertificate.trim()) return;
    if (!formData.certificates.includes(newCertificate.trim())) {
      setFormData({ ...formData, certificates: [...formData.certificates, newCertificate.trim()] });
    }
    setNewCertificate('');
  };

  const removeCertificate = (cert: string) => {
    setFormData({ ...formData, certificates: formData.certificates.filter(c => c !== cert) });
  };

  const subjectGroups = [
    { id: 'favorite', label: 'Môn yêu thích', icon: Heart, color: 'text-pink-500 bg-pink-50' },
    { id: 'good', label: 'Môn học tốt', icon: CheckCircle2, color: 'text-green-500 bg-green-50' },
    { id: 'weak', label: 'Môn chưa tốt', icon: AlertCircle, color: 'text-orange-500 bg-orange-50' },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Học lực & Khối thi</h2>
        <p className="text-slate-500">Cung cấp thông tin học tập để đánh giá khả năng trúng tuyển.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Tự đánh giá khả năng học tập</label>
            <select
              value={formData.selfAssessment}
              onChange={(e) => setFormData({ ...formData, selfAssessment: e.target.value })}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Chọn mức độ</option>
              <option value="Xuất sắc">Xuất sắc</option>
              <option value="Giỏi">Giỏi</option>
              <option value="Khá">Khá</option>
              <option value="Trung bình">Trung bình</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Đang học khối nào?</label>
            <div className="space-y-3">
              <select
                value={formData.studyGroup.startsWith('Khác') ? 'Khác' : formData.studyGroup}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === 'Khác') {
                    setFormData({ ...formData, studyGroup: 'Khác: ' });
                  } else {
                    setFormData({ ...formData, studyGroup: val });
                  }
                }}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Chọn khối thi</option>
                <option value="A00 (Toán, Lý, Hóa)">A00 (Toán, Lý, Hóa)</option>
                <option value="A01 (Toán, Lý, Anh)">A01 (Toán, Lý, Anh)</option>
                <option value="B00 (Toán, Hóa, Sinh)">B00 (Toán, Hóa, Sinh)</option>
                <option value="C00 (Văn, Sử, Địa)">C00 (Văn, Sử, Địa)</option>
                <option value="D01 (Toán, Văn, Anh)">D01 (Toán, Văn, Anh)</option>
                <option value="Khác">Khác</option>
              </select>
              
              {formData.studyGroup.startsWith('Khác') && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <input
                    type="text"
                    value={formData.studyGroup.replace('Khác: ', '')}
                    onChange={(e) => setFormData({ ...formData, studyGroup: `Khác: ${e.target.value}` })}
                    placeholder="Nhập khối học của bạn (ví dụ: D07, A02...)"
                    className="w-full p-4 bg-white border border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold text-slate-700">Môn học (Yêu thích, Tốt, Chưa tốt)</label>
          <div className="flex gap-2">
            <select
              value={subjectType}
              onChange={(e) => setSubjectType(e.target.value as any)}
              className="p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium"
            >
              <option value="favorite">Yêu thích</option>
              <option value="good">Học tốt</option>
              <option value="weak">Chưa tốt</option>
            </select>
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addSubject()}
              placeholder="Nhập tên môn học..."
              className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
            />
            <button
              onClick={addSubject}
              className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {subjectGroups.map((group) => (
              <div key={group.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <group.icon className={cn("w-4 h-4", group.color.split(' ')[0])} />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{group.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(formData[`${group.id}Subjects` as keyof typeof formData] as string[]).map((sub) => (
                    <span key={sub} className="inline-flex items-center gap-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                      {sub}
                      <button onClick={() => removeSubject(group.id as any, sub)} className="hover:text-red-500">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {(formData[`${group.id}Subjects` as keyof typeof formData] as string[]).length === 0 && (
                    <span className="text-xs text-slate-400 italic">Chưa có môn nào</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            Thông tin bổ sung (Dùng để dự đoán khả năng đậu)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Điểm Đánh giá năng lực (nếu có)</label>
              <input
                type="number"
                value={formData.competencyScore}
                onChange={(e) => setFormData({ ...formData, competencyScore: e.target.value })}
                placeholder="Ví dụ: 850"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
              />
              <p className="text-[10px] text-slate-400">Thường tính trên thang điểm 1200 (ĐHQG TP.HCM) hoặc 150 (ĐHQG HN)</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Điểm GPA trung bình (nếu có)</label>
              <input
                type="number"
                step="0.1"
                value={formData.gpa}
                onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                placeholder="Ví dụ: 8.5"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold"
              />
              <p className="text-[10px] text-slate-400">Điểm trung bình học tập cả năm lớp 12 hoặc 3 năm THPT</p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-slate-700">Chứng chỉ khác (IELTS, HSK, JLPT...)</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newCertificate}
                onChange={(e) => setNewCertificate(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCertificate()}
                placeholder="Ví dụ: IELTS 7.5, HSK 5..."
                className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold"
              />
              <button
                onClick={addCertificate}
                className="px-6 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-colors font-bold"
              >
                Thêm
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.certificates.map((cert) => (
                <span key={cert} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-bold border border-blue-100">
                  {cert}
                  <button onClick={() => removeCertificate(cert)} className="hover:text-red-500">
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
              {formData.certificates.length === 0 && (
                <span className="text-sm text-slate-400 italic">Chưa có chứng chỉ nào</span>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('career')}
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
              className="flex-1 sm:flex-none px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all hover:bg-blue-700 disabled:opacity-70"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> Lưu thông tin</>}
            </button>

            {saved && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => onNavigate('family')}
                className="flex-1 sm:flex-none px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 flex items-center justify-center gap-2 transition-all hover:bg-slate-800"
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

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
