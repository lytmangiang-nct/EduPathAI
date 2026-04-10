import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, ChatMessage } from '../types';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, limit, serverTimestamp } from 'firebase/firestore';
import { GoogleGenAI } from "@google/genai";
import { Send, Loader2, Bot, User as UserIcon, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn, handleFirestoreError, OperationType } from '../lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AIConsultant({ profile, onNavigate }: { profile: UserProfile, onNavigate: (tab: any) => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatPath = `users/${profile.uid}/chatHistory`;
    const q = query(
      collection(db, 'users', profile.uid, 'chatHistory'),
      orderBy('timestamp', 'asc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ChatMessage));
      setMessages(msgs);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, chatPath);
    });

    return () => unsubscribe();
  }, [profile.uid]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsgContent = input.trim();
    const userMsg: any = {
      role: 'user',
      content: userMsgContent,
      timestamp: new Date().toISOString()
    };

    setInput('');
    setIsTyping(true);

    const chatPath = `users/${profile.uid}/chatHistory`;

    try {
      // Save user message
      await addDoc(collection(db, 'users', profile.uid, 'chatHistory'), {
        ...userMsg,
        timestamp: serverTimestamp()
      }).catch(err => {
        handleFirestoreError(err, OperationType.WRITE, chatPath);
      });

      // Call Gemini
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      
      const systemInstruction = `
        Bạn là một chuyên gia tư vấn tuyển sinh đại học tại Việt Nam. 
        Tên bạn là EduPath AI. Bạn đóng vai trò như một người bạn thân thiết, tận tâm và đáng tin cậy.
        
        Thông tin về người dùng hiện tại:
        - Tên: ${profile.displayName}
        - Kết quả trắc nghiệm: ${JSON.stringify(profile.personalityResults || {})}
        - Mục tiêu nghề nghiệp: ${JSON.stringify(profile.careerGoals || {})}
        - Học lực: ${JSON.stringify(profile.academicRecord || {})}
        - Điều kiện gia đình: ${JSON.stringify(profile.familyCondition || {})}
        
        Nhiệm vụ của bạn:
        1. Phân tích sâu sắc thông tin người dùng để đưa ra lời khuyên về ngành học và trường học phù hợp nhất.
        2. KIỂM TRA THÔNG TIN THIẾU: Nếu người dùng chưa hoàn thành các phần sau, hãy nhắc nhở họ một cách khéo léo:
           - Trắc nghiệm Holland/MBTI/Creative Types (nếu profile.personalityResults trống)
           - Mục tiêu nghề nghiệp (nếu profile.careerGoals trống)
           - Học lực & Khối thi (nếu profile.academicRecord trống)
           - Điều kiện gia đình (nếu profile.familyCondition trống)
        3. Đưa ra tư vấn có độ chính xác cao, dựa trên xu hướng thị trường lao động và điểm chuẩn thực tế tại Việt Nam.
        4. Trả lời các câu hỏi cụ thể về ngành nghề, cơ hội việc làm, học phí, và lộ trình học tập.
        5. Luôn giữ thái độ tích cực, khích lệ và chuyên nghiệp.
        6. Sử dụng Markdown để định dạng câu trả lời (danh sách, in đậm, bảng nếu cần) để người dùng dễ nhìn.
        7. Trả lời bằng tiếng Việt, súc tích nhưng đầy đủ ý nghĩa.
      `;

      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMsgContent }] }
        ],
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text;

      const aiMsg: any = {
        role: 'model',
        content: text || 'Xin lỗi, tôi không thể trả lời lúc này.',
        timestamp: serverTimestamp()
      };

      // Save AI message
      await addDoc(collection(db, 'users', profile.uid, 'chatHistory'), aiMsg).catch(err => {
        handleFirestoreError(err, OperationType.WRITE, chatPath);
      });

    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden">
      {/* Chat Header */}
      <div className="p-6 border-b border-slate-100 bg-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Bot className="text-white w-7 h-7" />
          </div>
          <div>
            <h3 className="font-black text-slate-900">EduPath AI Consultant</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trực tuyến</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl text-blue-700 text-xs font-black uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          AI Thông minh
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth bg-slate-50/30"
      >
        {messages.length === 0 && (
          <div className="text-center py-20 max-w-md mx-auto">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-3">
              <Bot className="w-10 h-10 text-blue-600" />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-3">Chào {profile.displayName.split(' ')[0]}!</h4>
            <p className="text-slate-500 font-medium leading-relaxed">
              Tôi là EduPath AI. Tôi đã sẵn sàng để đồng hành cùng bạn trên con đường chọn ngành, chọn trường. Bạn cần tôi giúp gì hôm nay?
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3">
              {[
                "Tôi nên chọn ngành nào phù hợp với tính cách?",
                "Học phí ngành CNTT hiện nay khoảng bao nhiêu?",
                "Tôi cần bổ sung thông tin gì để được tư vấn tốt hơn?"
              ].map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(suggestion);
                  }}
                  className="p-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all text-left shadow-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <motion.div
            key={msg.id || i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex gap-4 max-w-[90%]",
              msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            <div className={cn(
              "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
              msg.role === 'user' ? "bg-blue-600 text-white" : "bg-white text-slate-600 border border-slate-200"
            )}>
              {msg.role === 'user' ? <UserIcon className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div className={cn(
              "p-5 rounded-3xl text-sm leading-relaxed shadow-sm",
              msg.role === 'user' 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-white text-slate-800 rounded-tl-none border border-slate-100"
            )}>
              <div className="prose prose-sm max-w-none prose-slate">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex gap-4 mr-auto max-w-[90%]">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-slate-600" />
            </div>
            <div className="bg-white border border-slate-100 p-5 rounded-3xl rounded-tl-none flex gap-1.5 items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 bg-white border-t border-slate-100 space-y-4">
        <form onSubmit={handleSend} className="relative flex items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="w-full p-5 pr-14 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-900 placeholder:text-slate-400 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:hover:bg-blue-600 shadow-lg shadow-blue-200"
            >
              {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </form>
        
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            EduPath AI có thể đưa ra thông tin chưa chính xác.
          </p>
          <button
            onClick={() => onNavigate('explore')}
            className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all"
          >
            Tiếp theo: Khám phá ngành học
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
