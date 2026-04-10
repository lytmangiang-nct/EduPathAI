import React, { useState, useMemo } from 'react';
import { UserProfile, University, Major } from '../types';
import { universities } from '../data/mockData';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  MapPin, 
  CreditCard, 
  Info, 
  CheckCircle2, 
  X,
  ArrowLeftRight,
  ExternalLink,
  ChevronRight,
  Star,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn, calculateAdmissionProbability, getRegion, calculateSuitabilityScore } from '../lib/utils';

export default function Results({ profile, onNavigate }: { profile: UserProfile, onNavigate: (tab: any) => void }) {
  const [selectedMajor, setSelectedMajor] = useState<{ uni: University, major: Major, matchScore: number, admissionProbability: number } | null>(null);
  const [compareList, setCompareList] = useState<{ uni: University, major: Major }[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [viewMode, setViewMode] = useState<'majors' | 'universities'>('majors');

  // Advanced matching logic
  const recommendations = useMemo(() => {
    const all = universities.flatMap(uni => 
      uni.majors.map(major => {
        const matchScore = calculateSuitabilityScore(profile, uni, major);
        const admissionProbability = calculateAdmissionProbability(profile, major);

        return { uni, major, matchScore, admissionProbability };
      })
    );

    return all.sort((a, b) => b.matchScore - a.matchScore);
  }, [profile]);

  // Group by Major Name
  const groupedByMajor = useMemo(() => {
    const groups: Record<string, typeof recommendations> = {};
    recommendations.forEach(rec => {
      if (!groups[rec.major.name]) groups[rec.major.name] = [];
      groups[rec.major.name].push(rec);
    });
    return Object.entries(groups).sort((a, b) => {
      const maxA = Math.max(...a[1].map(r => r.matchScore));
      const maxB = Math.max(...b[1].map(r => r.matchScore));
      return maxB - maxA;
    }).slice(0, 10);
  }, [recommendations]);

  const toggleCompare = (uni: University, major: Major) => {
    const exists = compareList.find(item => item.major.id === major.id);
    if (exists) {
      setCompareList(compareList.filter(item => item.major.id !== major.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, { uni, major }]);
    }
  };

  if (showComparison) {
    return <ComparisonView list={compareList} onBack={() => setShowComparison(false)} />;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Top 10 Đề xuất Ngành - Trường</h2>
          <p className="text-slate-500 mt-1">Dựa trên hồ sơ năng lực và tính cách, đây là 10 ngành học phù hợp nhất cho bạn.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 p-1 rounded-xl flex">
            <button 
              onClick={() => setViewMode('majors')}
              className={cn(
                "px-4 py-2 text-sm font-bold rounded-lg transition-all",
                viewMode === 'majors' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Theo Ngành
            </button>
            <button 
              onClick={() => setViewMode('universities')}
              className={cn(
                "px-4 py-2 text-sm font-bold rounded-lg transition-all",
                viewMode === 'universities' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Tất cả
            </button>
          </div>
          {compareList.length > 0 && (
            <button
              onClick={() => setShowComparison(true)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 transition-all hover:bg-blue-700"
            >
              <ArrowLeftRight className="w-5 h-5" />
              So sánh ({compareList.length})
            </button>
          )}
        </div>
      </div>

      <div className="space-y-10">
        {viewMode === 'majors' ? (
          groupedByMajor.map(([majorName, items], i) => (
            <motion.div
              key={majorName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 px-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{majorName}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Có {items.length} trường đào tạo phù hợp</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((rec) => (
                  <MajorCard 
                    key={rec.major.id} 
                    rec={rec} 
                    onSelect={() => setSelectedMajor(rec)}
                    onCompare={() => toggleCompare(rec.uni, rec.major)}
                    isCompared={!!compareList.find(item => item.major.id === rec.major.id)}
                  />
                ))}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, i) => (
              <MajorCard 
                key={rec.major.id} 
                rec={rec} 
                onSelect={() => setSelectedMajor(rec)}
                onCompare={() => toggleCompare(rec.uni, rec.major)}
                isCompared={!!compareList.find(item => item.major.id === rec.major.id)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-16 flex justify-center gap-4 pb-12">
        <button
          onClick={() => onNavigate('family')}
          className="px-10 py-5 bg-white border border-slate-200 text-slate-500 rounded-[2rem] font-black hover:bg-slate-50 transition-all active:scale-95"
        >
          Quay lại
        </button>
        <button
          onClick={() => onNavigate('ai')}
          className="px-12 py-5 bg-blue-600 text-white rounded-[2rem] font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all active:scale-95 flex items-center gap-3"
        >
          <MessageSquare className="w-6 h-6" />
          Chat với AI Tư vấn
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMajor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMajor(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
                <h3 className="text-xl font-bold text-slate-900">Chi tiết Ngành học</h3>
                <button onClick={() => setSelectedMajor(null)} className="p-2 hover:bg-slate-100 rounded-full">
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                <div>
                  <h4 className="text-3xl font-extrabold text-blue-600 mb-2">{selectedMajor.major.name}</h4>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">{selectedMajor.uni.name}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                    <p className="text-xs font-bold text-blue-400 uppercase mb-4 tracking-widest">Điểm chuẩn 5 năm gần nhất</p>
                    <div className="space-y-3">
                      {Object.entries(selectedMajor.major.admissionScore).sort((a,b) => b[0].localeCompare(a[0])).map(([year, score]) => (
                        <div key={year} className="flex justify-between items-center">
                          <span className="text-slate-600 font-medium">Năm {year}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500" style={{ width: `${(score / 30) * 100}%` }} />
                            </div>
                            <span className="text-blue-700 font-bold w-8 text-right">{score}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-green-50/50 rounded-3xl border border-green-100 flex flex-col justify-center">
                      <p className="text-xs font-bold text-green-600 uppercase mb-2 tracking-widest">Học phí dự kiến</p>
                      <p className="text-3xl font-black text-green-700">{selectedMajor.uni.tuition.toLocaleString()}đ</p>
                      <p className="text-sm text-green-600/70 font-medium">/ năm học</p>
                    </div>
                    <div className={cn(
                      "p-6 rounded-3xl border flex flex-col justify-center",
                      selectedMajor.admissionProbability >= 70 ? "bg-emerald-50 border-emerald-100" : 
                      selectedMajor.admissionProbability >= 40 ? "bg-amber-50 border-amber-100" : "bg-red-50 border-red-100"
                    )}>
                      <p className={cn(
                        "text-xs font-bold uppercase mb-2 tracking-widest",
                        selectedMajor.admissionProbability >= 70 ? "text-emerald-600" : 
                        selectedMajor.admissionProbability >= 40 ? "text-amber-600" : "text-red-600"
                      )}>Khả năng trúng tuyển</p>
                      <p className={cn(
                        "text-3xl font-black",
                        selectedMajor.admissionProbability >= 70 ? "text-emerald-700" : 
                        selectedMajor.admissionProbability >= 40 ? "text-amber-700" : "text-red-700"
                      )}>{selectedMajor.admissionProbability}%</p>
                      <p className="text-xs text-slate-500 mt-1">Dựa trên điểm GPA, ĐGNL & Chứng chỉ</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Info className="w-4 h-4 text-blue-600" />
                    </div>
                    Mô tả ngành học
                  </h5>
                  <p className="text-slate-600 leading-relaxed text-sm">{selectedMajor.major.description}</p>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    Cơ hội việc làm
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedMajor.major.careerOpportunities.map((op, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium border border-slate-100">
                        {op}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <a 
                    href={selectedMajor.uni.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
                  >
                    Truy cập Website trường
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MajorCard({ rec, onSelect, onCompare, isCompared }: { 
  rec: { uni: University, major: Major, matchScore: number, admissionProbability: number }, 
  onSelect: () => void,
  onCompare: () => void,
  isCompared: boolean
}) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all overflow-hidden group flex flex-col relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:bg-blue-100 transition-colors" />
      
      <div className="p-8 flex-1 relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className={cn(
              "px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider flex items-center gap-1.5 shadow-sm",
              rec.matchScore >= 80 ? "bg-green-100 text-green-700" : 
              rec.matchScore >= 50 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
            )}>
              <Star className={cn("w-3 h-3 fill-current", rec.matchScore < 50 && "fill-none")} />
              {rec.matchScore}% PHÙ HỢP
            </div>
            <div className={cn(
              "px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider flex items-center gap-1.5 shadow-sm",
              rec.admissionProbability >= 70 ? "bg-emerald-100 text-emerald-700" : 
              rec.admissionProbability >= 40 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
            )}>
              KHẢ NĂNG ĐẬU: {rec.admissionProbability}%
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">{rec.major.category}</div>
          <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight min-h-[3.5rem] line-clamp-2">
            {rec.major.name}
          </h3>
          <p className="text-sm text-slate-500 font-bold flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            {rec.uni.name}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-50">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Địa điểm</p>
            <p className="text-xs text-slate-700 font-black">{rec.uni.location}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Điểm 2024</p>
            <p className="text-lg font-black text-blue-600">{rec.major.admissionScore['2024']}</p>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 bg-slate-50/50 flex items-center gap-3">
        <button
          onClick={onSelect}
          className="flex-1 py-3 bg-white border border-slate-200 text-slate-900 rounded-2xl text-sm font-black hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
        >
          Chi tiết
        </button>
        <button
          onClick={onCompare}
          className={cn(
            "w-14 h-12 rounded-2xl transition-all flex items-center justify-center shadow-sm active:scale-95",
            isCompared
              ? "bg-blue-600 text-white shadow-blue-100"
              : "bg-white border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200"
          )}
          title={isCompared ? "Bỏ so sánh" : "Thêm vào so sánh"}
        >
          <ArrowLeftRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

function ComparisonView({ list, onBack }: { list: { uni: University, major: Major }[], onBack: () => void }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-white rounded-xl text-slate-400 transition-all">
          <ArrowRight className="w-6 h-6 rotate-180" />
        </button>
        <h2 className="text-2xl font-bold text-slate-900">So sánh Ngành - Trường</h2>
      </div>

      <div className="overflow-x-auto pb-4">
        <table className="w-full bg-white rounded-3xl border-separate border-spacing-0 border border-slate-200 shadow-sm overflow-hidden">
          <thead>
            <tr>
              <th className="p-6 text-left text-sm font-bold text-slate-400 uppercase bg-slate-50/50 border-b border-slate-100">Tiêu chí</th>
              {list.map((item, i) => (
                <th key={i} className="p-6 text-left bg-slate-50/50 border-b border-slate-100 min-w-[250px]">
                  <p className="text-blue-600 font-bold">{item.major.name}</p>
                  <p className="text-xs text-slate-500">{item.uni.name}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-6 text-sm font-bold text-slate-700 border-b border-slate-50">Mã ngành</td>
              {list.map((item, i) => <td key={i} className="p-6 text-sm text-slate-600 border-b border-slate-50">{item.major.code}</td>)}
            </tr>
            <tr>
              <td className="p-6 text-sm font-bold text-slate-700 border-b border-slate-50">Địa điểm</td>
              {list.map((item, i) => <td key={i} className="p-6 text-sm text-slate-600 border-b border-slate-50">{item.uni.location}</td>)}
            </tr>
            <tr>
              <td className="p-6 text-sm font-bold text-slate-700 border-b border-slate-50">Học phí / năm</td>
              {list.map((item, i) => <td key={i} className="p-6 text-sm font-bold text-green-600 border-b border-slate-50">{item.uni.tuition.toLocaleString()}đ</td>)}
            </tr>
            <tr>
              <td className="p-6 text-sm font-bold text-slate-700 border-b border-slate-50">Điểm chuẩn 2024</td>
              {list.map((item, i) => <td key={i} className="p-6 text-sm font-bold text-blue-600 border-b border-slate-50">{item.major.admissionScore['2024']}</td>)}
            </tr>
            <tr>
              <td className="p-6 text-sm font-bold text-slate-700">Cơ hội việc làm</td>
              {list.map((item, i) => (
                <td key={i} className="p-6 text-sm text-slate-600 align-top">
                  <ul className="space-y-1">
                    {item.major.careerOpportunities.slice(0, 3).map((op, j) => (
                      <li key={j} className="flex items-center gap-1">
                        <ChevronRight className="w-3 h-3 text-blue-500" />
                        {op}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
