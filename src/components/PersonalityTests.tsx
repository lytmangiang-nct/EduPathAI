import React, { useState } from 'react';
import { UserProfile } from '../types';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Brain, 
  Palette, 
  Users, 
  Save,
  Loader2,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface PersonalityTestsProps {
  profile: UserProfile;
  onNavigate: (tab: any) => void;
}

type TestType = 'holland' | 'creativeTypes' | 'mbti';

export default function PersonalityTests({ profile, onNavigate }: PersonalityTestsProps) {
  const [activeTest, setActiveTest] = useState<TestType | null>(null);

  const tests = [
    { id: 'holland', title: 'Holland Code (RIASEC)', icon: Brain, desc: 'Khám phá sở thích nghề nghiệp qua 6 nhóm tính cách.', color: 'text-blue-600 bg-blue-50' },
    { id: 'creativeTypes', title: 'Creative Types', icon: Palette, desc: 'Tìm hiểu phong cách sáng tạo cá nhân của bạn.', color: 'text-purple-600 bg-purple-50' },
    { id: 'mbti', title: 'MBTI', icon: Users, desc: 'Phân loại tính cách qua 4 chiều hướng tâm lý.', color: 'text-orange-600 bg-orange-50' },
  ];

  if (activeTest === 'holland') return <HollandTest profile={profile} onBack={() => setActiveTest(null)} onNext={() => setActiveTest('creativeTypes')} onNavigate={onNavigate} />;
  if (activeTest === 'creativeTypes') return <CreativeTest profile={profile} onBack={() => setActiveTest(null)} onNext={() => setActiveTest('mbti')} onNavigate={onNavigate} />;
  if (activeTest === 'mbti') return <MBTITest profile={profile} onBack={() => setActiveTest(null)} onNext={() => setActiveTest(null)} onNavigate={onNavigate} />;

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Kiểm tra tính cách</h2>
        <p className="text-slate-500">Chọn một bài kiểm tra để bắt đầu khám phá bản thân.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tests.map((test) => (
          <button
            key={test.id}
            onClick={() => setActiveTest(test.id as TestType)}
            className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left flex flex-col h-full"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", test.color)}>
              <test.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{test.title}</h3>
            <p className="text-sm text-slate-500 mb-6 flex-1">{test.desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className={cn(
                "text-xs font-bold px-2 py-1 rounded-md",
                profile.personalityResults?.[test.id as keyof typeof profile.personalityResults] 
                  ? "bg-green-100 text-green-700" 
                  : "bg-slate-100 text-slate-600"
              )}>
                {profile.personalityResults?.[test.id as keyof typeof profile.personalityResults] ? 'Đã hoàn thành' : 'Chưa làm'}
              </span>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => onNavigate('career')}
          className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-slate-800 hover:scale-105 transition-all active:scale-95 flex items-center gap-3"
        >
          Tiếp theo: Mục tiêu nghề nghiệp
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// --- Holland Test ---
function HollandTest({ profile, onBack, onNext, onNavigate }: { profile: UserProfile, onBack: () => void, onNext: () => void, onNavigate: (tab: any) => void }) {
  const questions = [
    { id: 1, text: "Tôi thích lắp ráp hoặc sửa chữa các đồ vật cơ khí.", type: "R" },
    { id: 2, text: "Tôi thích làm các thí nghiệm khoa học.", type: "I" },
    { id: 3, text: "Tôi thích vẽ, phác thảo hoặc điêu khắc.", type: "A" },
    { id: 4, text: "Tôi thích giúp đỡ mọi người giải quyết vấn đề của họ.", type: "S" },
    { id: 5, text: "Tôi thích thuyết phục mọi người làm theo ý mình.", type: "E" },
    { id: 6, text: "Tôi thích sắp xếp hồ sơ, dữ liệu một cách ngăn nắp.", type: "C" },
    { id: 7, text: "Tôi thích làm việc ngoài trời.", type: "R" },
    { id: 8, text: "Tôi thích giải các bài toán hóc búa.", type: "I" },
    { id: 9, text: "Tôi thích viết lách hoặc sáng tác nhạc.", type: "A" },
    { id: 10, text: "Tôi thích giảng dạy hoặc hướng dẫn người khác.", type: "S" },
    { id: 11, text: "Tôi thích quản lý một nhóm người.", type: "E" },
    { id: 12, text: "Tôi thích làm việc với các con số và bảng biểu.", type: "C" },
    { id: 13, text: "Tôi thích vận hành máy móc hoặc thiết bị.", type: "R" },
    { id: 14, text: "Tôi thích tìm hiểu về cách thức hoạt động của vạn vật.", type: "I" },
    { id: 15, text: "Tôi thích thiết kế trang phục hoặc trang trí nội thất.", type: "A" },
    { id: 16, text: "Tôi thích tham gia các hoạt động tình nguyện.", type: "S" },
    { id: 17, text: "Tôi thích bắt đầu các dự án kinh doanh mới.", type: "E" },
    { id: 18, text: "Tôi thích tuân thủ các quy trình và quy định rõ ràng.", type: "C" },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (val: number) => {
    setAnswers({ ...answers, [questions[currentIdx].id]: val });
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const calculateResult = async () => {
    setLoading(true);
    const scores: Record<string, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    questions.forEach(q => {
      scores[q.type] += answers[q.id] || 0;
    });

    const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const typeNames: Record<string, string> = {
      R: "Kỹ thuật (Realistic)",
      I: "Nghiên cứu (Investigative)",
      A: "Nghệ thuật (Artistic)",
      S: "Xã hội (Social)",
      E: "Quản lý (Enterprising)",
      C: "Nghiệp vụ (Conventional)"
    };

    const finalResult = typeNames[topType];
    
    try {
      await updateDoc(doc(db, 'users', profile.uid), {
        'personalityResults.holland': finalResult
      });
      setResult(finalResult);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-6">
        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Kết quả của bạn</h3>
          <p className="text-blue-600 text-xl font-bold mt-2">{result}</p>
        </div>
        <p className="text-slate-500 max-w-md mx-auto">
          Bạn thuộc nhóm {result}. Đây là một khởi đầu tuyệt vời để tìm kiếm những ngành nghề phù hợp với bản thân.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={onBack} className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl font-medium">Quay lại</button>
          <button onClick={() => { setResult(null); setCurrentIdx(0); setAnswers({}); }} className="px-6 py-2 bg-blue-100 text-blue-600 rounded-xl font-medium flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Làm lại
          </button>
          <button onClick={onNext} className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium flex items-center gap-2">
            Bài tiếp theo <ChevronRight className="w-4 h-4" />
          </button>
          <button onClick={() => onNavigate('career')} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-medium flex items-center gap-2">
            Mục tiếp theo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentIdx + 1) / questions.length) * 100;

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 mx-8">
          <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
            <span>Câu hỏi {currentIdx + 1} / {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-blue-600 h-full" 
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <h3 className="text-xl font-medium text-slate-900 text-center min-h-[4rem] flex items-center justify-center">
            {questions[currentIdx].text}
          </h3>

          <div className="flex justify-between px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            <span>Rất không thích</span>
            <span>Rất thích</span>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((val) => (
              <button
                key={val}
                onClick={() => handleAnswer(val)}
                className={cn(
                  "py-4 rounded-2xl border-2 transition-all font-bold text-lg",
                  answers[questions[currentIdx].id] === val
                    ? "border-blue-600 bg-blue-50 text-blue-600 shadow-sm"
                    : "border-slate-100 hover:border-blue-200 text-slate-400 hover:text-slate-600"
                )}
              >
                {val}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex justify-between">
        <button
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(currentIdx - 1)}
          className="px-6 py-2 text-slate-400 font-medium disabled:opacity-30"
        >
          Quay lại câu trước
        </button>
        {Object.keys(answers).length === questions.length && currentIdx === questions.length - 1 ? (
          <button
            onClick={calculateResult}
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> Xem kết quả</>}
          </button>
        ) : null}
      </div>
    </div>
  );
}

// Simplified Creative Test
function CreativeTest({ profile, onBack, onNext, onNavigate }: { profile: UserProfile, onBack: () => void, onNext: () => void, onNavigate: (tab: any) => void }) {
  const questions = [
    { id: 1, text: "Tôi thường hành động theo bản năng hơn là kế hoạch.", type: "Adventurer" },
    { id: 2, text: "Tôi thích tìm kiếm ý nghĩa sâu xa trong mọi việc.", type: "Thinker" },
    { id: 3, text: "Tôi thích tạo ra những thứ có giá trị sử dụng thực tế.", type: "Maker" },
    { id: 4, text: "Tôi thường là người đưa ra những ý tưởng táo bạo nhất.", type: "Visionary" },
    { id: 5, text: "Tôi cảm thấy thoải mái nhất khi được tự do sáng tạo không giới hạn.", type: "Dreamer" },
    { id: 6, text: "Tôi thích kết nối các ý tưởng từ nhiều lĩnh vực khác nhau.", type: "Innovator" },
    { id: 7, text: "Tôi chú trọng đến từng chi tiết nhỏ trong tác phẩm của mình.", type: "Artist" },
    { id: 8, text: "Tôi thích dẫn dắt và hiện thực hóa các ý tưởng của nhóm.", type: "Producer" },
    { id: 9, text: "Tôi thường xuyên đặt câu hỏi 'Tại sao?' về mọi thứ xung quanh.", type: "Thinker" },
    { id: 10, text: "Tôi thích thử nghiệm các công nghệ và công cụ mới.", type: "Maker" },
    { id: 11, text: "Tôi thường nhìn thấy những cơ hội mà người khác bỏ qua.", type: "Visionary" },
    { id: 12, text: "Tôi thích làm việc trong môi trường đầy cảm hứng và nghệ thuật.", type: "Artist" },
    { id: 13, text: "Tôi thích giải quyết các vấn đề phức tạp bằng cách tiếp cận mới.", type: "Innovator" },
    { id: 14, text: "Tôi thích khám phá những vùng đất mới và trải nghiệm mới.", type: "Adventurer" },
    { id: 15, text: "Tôi thích lập kế hoạch chi tiết để biến ý tưởng thành hiện thực.", type: "Producer" },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (val: number) => {
    setAnswers({ ...answers, [questions[currentIdx].id]: val });
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const calculateResult = async () => {
    setLoading(true);
    const scores: Record<string, number> = {};
    questions.forEach(q => {
      if (answers[q.id] === 1) {
        scores[q.type] = (scores[q.type] || 0) + 1;
      }
    });

    const sortedTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topType = sortedTypes.length > 0 ? sortedTypes[0][0] : "Người sáng tạo tự do";
    
    const typeNames: Record<string, string> = {
      Adventurer: "Nhà thám hiểm (Adventurer)",
      Thinker: "Nhà tư tưởng (Thinker)",
      Maker: "Người thực thi (Maker)",
      Visionary: "Người có tầm nhìn (Visionary)",
      Dreamer: "Người mộng mơ (Dreamer)",
      Innovator: "Nhà đổi mới (Innovator)",
      Artist: "Nghệ sĩ (Artist)",
      Producer: "Nhà sản xuất (Producer)"
    };

    const finalResult = typeNames[topType] || topType;

    try {
      await updateDoc(doc(db, 'users', profile.uid), { 'personalityResults.creativeTypes': finalResult });
      setResult(finalResult);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  if (result) {
    return (
      <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-6">
        <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto">
          <Palette className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Kết quả của bạn</h3>
          <p className="text-purple-600 text-xl font-bold mt-2">{result}</p>
        </div>
        <p className="text-slate-500 max-w-md mx-auto">
          Phong cách sáng tạo của bạn là {result}. Hãy tận dụng thế mạnh này trong học tập và công việc tương lai.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={onBack} className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl font-medium">Quay lại</button>
          <button onClick={() => { setResult(null); setCurrentIdx(0); setAnswers({}); }} className="px-6 py-2 bg-purple-100 text-purple-600 rounded-xl font-medium flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Làm lại
          </button>
          <button onClick={onNext} className="px-6 py-2 bg-purple-600 text-white rounded-xl font-medium flex items-center gap-2">
            Bài tiếp theo <ChevronRight className="w-4 h-4" />
          </button>
          <button onClick={() => onNavigate('career')} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-medium flex items-center gap-2">
            Mục tiếp theo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 hover:bg-slate-50 rounded-lg text-slate-400"><ChevronLeft className="w-6 h-6" /></button>
        <span className="text-sm font-bold text-slate-400">Câu {currentIdx + 1} / {questions.length}</span>
      </div>
      <h3 className="text-xl font-medium text-center mb-8">{questions[currentIdx].text}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button onClick={() => handleAnswer(1)} className="p-4 border-2 border-slate-100 rounded-2xl hover:border-purple-500 transition-all">Hoàn toàn đồng ý</button>
        <button onClick={() => handleAnswer(0)} className="p-4 border-2 border-slate-100 rounded-2xl hover:border-purple-500 transition-all">Không đồng ý</button>
      </div>
      {currentIdx === questions.length - 1 && Object.keys(answers).length === questions.length && (
        <button onClick={calculateResult} className="mt-8 w-full py-3 bg-purple-600 text-white rounded-xl font-bold">Xem kết quả</button>
      )}
    </div>
  );
}

// --- MBTI Test ---
const MBTI_DESCRIPTIONS: Record<string, { title: string, desc: string }> = {
  'ISTJ': { title: 'Người trách nhiệm', desc: 'Thực tế, có trách nhiệm, coi trọng truyền thống và sự ổn định.' },
  'ISFJ': { title: 'Người bảo vệ', desc: 'Tận tụy, ấm áp, luôn sẵn sàng bảo vệ những người thân yêu.' },
  'INFJ': { title: 'Người cố vấn', desc: 'Lý tưởng hóa, sâu sắc, có khả năng thấu hiểu người khác mạnh mẽ.' },
  'INTJ': { title: 'Người chiến lược', desc: 'Tư duy độc lập, chiến lược, luôn tìm kiếm sự hoàn hảo.' },
  'ISTP': { title: 'Người thợ thủ công', desc: 'Thích khám phá, thực tế, giỏi giải quyết các vấn đề kỹ thuật.' },
  'ISFP': { title: 'Người nghệ sĩ', desc: 'Nhạy cảm, nghệ thuật, thích tận hưởng khoảnh khắc hiện tại.' },
  'INFP': { title: 'Người hòa giải', desc: 'Lý tưởng, nhân hậu, luôn tìm kiếm ý nghĩa trong cuộc sống.' },
  'INTP': { title: 'Người tư duy', desc: 'Sáng tạo, logic, luôn tò mò về cách thế giới vận hành.' },
  'ESTP': { title: 'Người thực thi', desc: 'Năng động, thích mạo hiểm, giỏi xử lý các tình huống khẩn cấp.' },
  'ESFP': { title: 'Người trình diễn', desc: 'Vui vẻ, nhiệt tình, thích làm trung tâm của sự chú ý.' },
  'ENFP': { title: 'Người truyền cảm hứng', desc: 'Nhiệt huyết, sáng tạo, luôn nhìn thấy tiềm năng ở mọi người.' },
  'ENTP': { title: 'Người tranh luận', desc: 'Thông minh, nhanh nhạy, thích thử thách các ý tưởng mới.' },
  'ESTJ': { title: 'Người điều hành', desc: 'Thực tế, quyết đoán, giỏi tổ chức và quản lý công việc.' },
  'ESFJ': { title: 'Người quan tâm', desc: 'Thân thiện, có trách nhiệm, luôn quan tâm đến nhu cầu của người khác.' },
  'ENFJ': { title: 'Người chỉ dạy', desc: 'Lôi cuốn, đầy cảm hứng, giỏi dẫn dắt và phát triển tiềm năng con người.' },
  'ENTJ': { title: 'Người chỉ huy', desc: 'Quyết đoán, có tầm nhìn, giỏi lãnh đạo và xây dựng hệ thống.' },
};

function MBTITest({ profile, onBack, onNext, onNavigate }: { profile: UserProfile, onBack: () => void, onNext: () => void, onNavigate: (tab: any) => void }) {
  const questions = [
    { id: 1, text: "Trong một bữa tiệc, bạn thường:", options: [{ text: "Chủ động bắt chuyện với nhiều người (E)", val: "E" }, { text: "Chỉ nói chuyện với vài người quen (I)", val: "I" }] },
    { id: 2, text: "Bạn thường tập trung vào:", options: [{ text: "Thực tế và chi tiết hiện tại (S)", val: "S" }, { text: "Ý tưởng và khả năng tương lai (N)", val: "N" }] },
    { id: 3, text: "Khi ra quyết định, bạn ưu tiên:", options: [{ text: "Logic và sự khách quan (T)", val: "T" }, { text: "Cảm xúc và giá trị cá nhân (F)", val: "F" }] },
    { id: 4, text: "Bạn thích làm việc theo kiểu:", options: [{ text: "Lập kế hoạch và tổ chức rõ ràng (J)", val: "J" }, { text: "Linh hoạt và tùy biến theo tình hình (P)", val: "P" }] },
    { id: 5, text: "Sau một ngày làm việc căng thẳng, bạn muốn:", options: [{ text: "Đi chơi với bạn bè để lấy lại năng lượng (E)", val: "E" }, { text: "Ở nhà một mình để nghỉ ngơi (I)", val: "I" }] },
    { id: 6, text: "Bạn tin tưởng vào:", options: [{ text: "Kinh nghiệm thực tế (S)", val: "S" }, { text: "Linh cảm và trực giác (N)", val: "N" }] },
    { id: 7, text: "Bạn thường được nhận xét là:", options: [{ text: "Người lý trí và thẳng thắn (T)", val: "T" }, { text: "Người ấm áp và nhạy cảm (F)", val: "F" }] },
    { id: 8, text: "Bạn cảm thấy thoải mái hơn khi:", options: [{ text: "Mọi thứ đã được quyết định và chốt lịch (J)", val: "J" }, { text: "Mọi thứ vẫn còn để ngỏ để thay đổi (P)", val: "P" }] },
    { id: 9, text: "Bạn thích thảo luận về:", options: [{ text: "Các vấn đề thực tiễn và cụ thể (S)", val: "S" }, { text: "Các lý thuyết và ý tưởng trừu tượng (N)", val: "N" }] },
    { id: 10, text: "Khi giải quyết xung đột, bạn chú trọng:", options: [{ text: "Sự công bằng và đúng sai (T)", val: "T" }, { text: "Sự hòa hợp và cảm xúc của mọi người (F)", val: "F" }] },
    { id: 11, text: "Bàn làm việc của bạn thường:", options: [{ text: "Gọn gàng và ngăn nắp (J)", val: "J" }, { text: "Hơi bừa bộn nhưng bạn biết mọi thứ ở đâu (P)", val: "P" }] },
    { id: 12, text: "Bạn thích:", options: [{ text: "Làm việc theo quy trình có sẵn (S)", val: "S" }, { text: "Tìm tòi cách làm mới sáng tạo (N)", val: "N" }] },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (val: string) => {
    setAnswers({ ...answers, [questions[currentIdx].id]: val });
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const calculateResult = async () => {
    setLoading(true);
    const counts: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    Object.values(answers).forEach(val => {
      counts[val]++;
    });

    const mbti = [
      counts.E >= counts.I ? 'E' : 'I',
      counts.S >= counts.N ? 'S' : 'N',
      counts.T >= counts.F ? 'T' : 'F',
      counts.J >= counts.P ? 'J' : 'P'
    ].join('');

    try {
      await updateDoc(doc(db, 'users', profile.uid), { 'personalityResults.mbti': mbti });
      setResult(mbti);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  if (result) {
    const info = MBTI_DESCRIPTIONS[result] || { title: 'Chưa xác định', desc: 'Không tìm thấy mô tả cho nhóm này.' };
    return (
      <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center space-y-6">
        <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto">
          <Users className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Nhóm tính cách: {result}</h3>
          <p className="text-orange-600 text-xl font-bold mt-1">{info.title}</p>
        </div>
        <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
          {info.desc}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={onBack} className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl font-medium">Quay lại</button>
          <button onClick={() => { setResult(null); setCurrentIdx(0); setAnswers({}); }} className="px-6 py-2 bg-orange-100 text-orange-600 rounded-xl font-medium flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Làm lại
          </button>
          <button onClick={() => onNavigate('career')} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-medium flex items-center gap-2">
            Mục tiếp theo <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={onBack} className="px-6 py-2 bg-orange-600 text-white rounded-xl font-medium flex items-center gap-2">
            Hoàn tất <CheckCircle2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentIdx + 1) / questions.length) * 100;

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 hover:bg-slate-50 rounded-lg text-slate-400">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 mx-8">
          <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
            <span>Câu hỏi {currentIdx + 1} / {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-orange-600 h-full" 
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <h3 className="text-xl font-medium text-slate-900 text-center min-h-[4rem] flex items-center justify-center">
            {questions[currentIdx].text}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {questions[currentIdx].options.map((opt) => (
              <button
                key={opt.val}
                onClick={() => handleAnswer(opt.val)}
                className={cn(
                  "p-6 rounded-2xl border-2 transition-all text-left font-bold",
                  answers[questions[currentIdx].id] === opt.val
                    ? "border-orange-600 bg-orange-50 text-orange-600 shadow-sm"
                    : "border-slate-100 hover:border-orange-200 text-slate-600"
                )}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex justify-between">
        <button
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(currentIdx - 1)}
          className="px-6 py-2 text-slate-400 font-medium disabled:opacity-30"
        >
          Quay lại câu trước
        </button>
        {Object.keys(answers).length === questions.length && currentIdx === questions.length - 1 ? (
          <button
            onClick={calculateResult}
            disabled={loading}
            className="px-8 py-3 bg-orange-600 text-white rounded-2xl font-bold shadow-lg shadow-orange-100 flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> Xem kết quả</>}
          </button>
        ) : null}
      </div>
    </div>
  );
}
