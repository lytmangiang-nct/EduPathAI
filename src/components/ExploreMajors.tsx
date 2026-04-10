import React, { useState, useMemo } from 'react';
import { universities } from '../data/mockData';
import { Major } from '../types';
import { Search, Filter, Flame, BookOpen, GraduationCap, ArrowRight, Star, X, MapPin, Info, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn, calculateAdmissionProbability, calculateSuitabilityScore } from '../lib/utils';
import { University, UserProfile } from '../types';

export default function ExploreMajors({ profile, onNavigate }: { profile: UserProfile, onNavigate: (tab: any) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [showHotOnly, setShowHotOnly] = useState(false);
  const [selectedMajor, setSelectedMajor] = useState<{ uni: University, major: Major, admissionProbability: number, suitabilityScore: number } | null>(null);

  const allMajors = useMemo(() => {
    const majors: { uni: University; major: Major; admissionProbability: number; suitabilityScore: number }[] = [];
    universities.forEach(uni => {
      uni.majors.forEach(major => {
        const admissionProbability = calculateAdmissionProbability(profile, major);
        const suitabilityScore = calculateSuitabilityScore(profile, uni, major);
        majors.push({ uni, major, admissionProbability, suitabilityScore });
      });
    });
    // Sort by suitability score descending
    return majors.sort((a, b) => b.suitabilityScore - a.suitabilityScore);
  }, [profile]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    allMajors.forEach(item => cats.add(item.major.category));
    return ['Tất cả', ...Array.from(cats)];
  }, [allMajors]);

  const filteredMajors = useMemo(() => {
    const filtered = allMajors.filter(item => {
      const matchesSearch = item.major.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.uni.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Tất cả' || item.major.category === selectedCategory;
      const matchesHot = !showHotOnly || item.major.isHot;
      return matchesSearch && matchesCategory && matchesHot;
    });

    // If no search/filter, limit to top 10 as requested
    if (searchTerm === '' && selectedCategory === 'Tất cả' && !showHotOnly) {
      return filtered.slice(0, 10);
    }
    return filtered;
  }, [allMajors, searchTerm, selectedCategory, showHotOnly]);

  return (
    <div className="space-y-8 pb-20">
      <div className="relative overflow-hidden bg-slate-900 p-12 rounded-[3rem] text-white shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Khám phá tương lai của bạn</h1>
          <p className="text-slate-400 text-lg font-medium opacity-90">
            Dựa trên hồ sơ của bạn, chúng tôi đề xuất 10 ngành học phù hợp nhất để bạn bắt đầu hành trình.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full -ml-20 -mb-20 blur-2xl" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8 sticky top-8">
            <div className="space-y-4">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Tìm kiếm</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm ngành, trường..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm font-bold"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Danh mục</label>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-black transition-all text-left",
                      selectedCategory === cat 
                        ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button
                onClick={() => setShowHotOnly(!showHotOnly)}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-2xl transition-all",
                  showHotOnly ? "bg-orange-50 text-orange-700 border border-orange-100" : "bg-slate-50 text-slate-600"
                )}
              >
                <div className="flex items-center gap-2 font-black text-sm">
                  <Flame className={cn("w-5 h-5", showHotOnly ? "text-orange-500" : "text-slate-400")} />
                  Ngành HOT
                </div>
                <div className={cn(
                  "w-10 h-6 rounded-full relative transition-colors",
                  showHotOnly ? "bg-orange-500" : "bg-slate-300"
                )}>
                  <div className={cn(
                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                    showHotOnly ? "left-5" : "left-1"
                  )} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">
              {searchTerm === '' && selectedCategory === 'Tất cả' && !showHotOnly 
                ? "Top 10 Ngành phù hợp nhất cho bạn" 
                : `Tìm thấy ${filteredMajors.length} kết quả`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMajors.map((item, index) => (
                <motion.div
                  layout
                  key={`${item.uni.id}-${item.major.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:bg-blue-100 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        {index < 3 && searchTerm === '' && selectedCategory === 'Tất cả' && (
                          <div className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-black tracking-widest">
                            <Star className="w-3 h-3 fill-current" />
                            TOP {index + 1}
                          </div>
                        )}
                      </div>
                      {item.major.isHot && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-[10px] font-black tracking-widest">
                          <Flame className="w-3 h-3 fill-current" />
                          HOT
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">{item.major.category}</div>
                        <div className="flex items-center gap-1 text-blue-600 font-black text-xs">
                          <Star className="w-3 h-3 fill-current" />
                          {item.suitabilityScore}/100
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors min-h-[3.5rem] line-clamp-2">
                        {item.major.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-bold flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        {item.uni.name}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider shadow-sm",
                          item.admissionProbability >= 70 ? "bg-emerald-100 text-emerald-700" : 
                          item.admissionProbability >= 40 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                        )}>
                          KHẢ NĂNG ĐẬU: {item.admissionProbability}%
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider shadow-sm bg-blue-100 text-blue-700">
                          ĐỘ PHÙ HỢP: {item.suitabilityScore}%
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Điểm chuẩn 2024</div>
                        <div className="text-lg font-black text-slate-900">{item.major.admissionScore['2024']}</div>
                      </div>
                      <button 
                        onClick={() => setSelectedMajor(item)}
                        className="flex items-center gap-2 text-sm font-black text-blue-600 hover:gap-3 transition-all"
                      >
                        Chi tiết <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredMajors.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Không tìm thấy kết quả</h3>
              <p className="text-slate-500">Hãy thử thay đổi từ khóa hoặc bộ lọc của bạn.</p>
            </div>
          )}

          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('ai')}
              className="px-10 py-5 bg-white border border-slate-200 text-slate-500 rounded-[2rem] font-black hover:bg-slate-50 transition-all active:scale-95"
            >
              Quay lại
            </button>
            <button
              onClick={() => onNavigate('overview')}
              className="px-12 py-5 bg-slate-900 text-white rounded-[2rem] font-black shadow-2xl shadow-slate-200 hover:bg-slate-800 hover:scale-105 transition-all active:scale-95 flex items-center gap-3"
            >
              Hoàn thành khảo sát
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
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
