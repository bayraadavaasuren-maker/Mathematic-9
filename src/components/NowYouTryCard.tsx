import React, { useState, useEffect } from 'react';
import { getQuestionsForLessonLevel } from '../data/questionGenerator';
import { MathText } from './MathText';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Target,
  Sparkles,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  Check,
} from 'lucide-react';

interface NowYouTryCardProps {
  lessonCode: string;
  exampleId: string;
}

const MATH_HELPERS = [
  { label: '√', insert: '\\sqrt{}' },
  { label: '∛', insert: '\\sqrt[3]{}' },
  { label: 'x²', insert: '^2' },
  { label: 'x³', insert: '^3' },
  { label: 'a/b', insert: '/' },
  { label: '×', insert: '\\times ' },
  { label: '÷', insert: '\\div ' },
  { label: 'π', insert: '\\pi' },
  { label: '°', insert: '^\\circ' },
  { label: '≤', insert: '\\le ' },
  { label: '≥', insert: '\\ge ' },
];

function stripMath(s: string): string {
  return s
    .replace(/\$/g, '')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2')
    .replace(/\\sqrt\[3\]\{([^}]*)\}/g, 'cbrt($1)')
    .replace(/\\sqrt\{([^}]*)\}/g, 'sqrt($1)')
    .replace(/\\times/g, '*')
    .replace(/\\div/g, '/')
    .replace(/\\le/g, '<=')
    .replace(/\\ge/g, '>=')
    .replace(/\\pi/g, 'pi')
    .replace(/\^\\circ/g, '')
    .replace(/\\,/g, '')
    .replace(/\\;/g, ' ')
    .replace(/\s+/g, '')
    .toLowerCase();
}

export const NowYouTryCard: React.FC<NowYouTryCardProps> = ({ lessonCode, exampleId }) => {
  // Load parallel consolidation questions for this lesson
  const questions = getQuestionsForLessonLevel(lessonCode, 1);
  const [questionIndex, setQuestionIndex] = useState<number>(1); // Default to question 2 (index 1)
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [typedInput, setTypedInput] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [completedCount, setCompletedCount] = useState<number>(0);

  // Reset when lesson or example changes
  useEffect(() => {
    setQuestionIndex(1);
    setSelectedOption(null);
    setTypedInput('');
    setIsSubmitted(false);
    setShowHint(false);
  }, [lessonCode, exampleId]);

  const question = questions[questionIndex] || questions[0];
  if (!question) return null;

  const isCorrect = (() => {
    if (selectedOption && selectedOption === question.correctAnswer) return true;
    if (typedInput.trim()) {
      const u = stripMath(typedInput);
      const c = stripMath(question.correctAnswer);
      if (u === c || (u.length >= 1 && c.includes(u))) return true;
      // Match numbers sequence
      const uNums = typedInput.match(/-?\d+(\.\d+)?/g);
      const cNums = question.correctAnswer.match(/-?\d+(\.\d+)?/g);
      if (uNums && cNums && uNums.join(',') === cNums.join(',')) return true;
    }
    return false;
  })();

  const handleCheck = () => {
    if (!selectedOption && !typedInput.trim()) return;
    setIsSubmitted(true);
    if (isCorrect) {
      setCompletedCount((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setTypedInput('');
    setIsSubmitted(false);
    setShowHint(false);
  };

  const handleNextProblem = () => {
    const nextIdx = (questionIndex + 1) % Math.min(questions.length, 6);
    setQuestionIndex(nextIdx === 0 ? 1 : nextIdx);
    handleReset();
  };

  const insertSymbol = (sym: string) => {
    setTypedInput((prev) => prev + sym);
  };

  return (
    <div className="bg-[#F0FDF4] border-2 border-[#86EFAC] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5 transition-all">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#86EFAC]/70">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#16A34A] text-white flex items-center justify-center shadow-xs">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base sm:text-lg font-bold text-[#14532D]">
                Бататгах интерактив жишээ бодлого (Now You Try!)
              </h4>
              <span className="text-[11px] font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full border border-[#86EFAC]">
                Жишээ #{questionIndex + 1}
              </span>
            </div>
            <p className="text-xs text-[#15803D]">
              Дээрх жишээ бодлогын самбарын аргыг ашиглан энэхүү төстэй жишээг бие даан бодоорой.
            </p>
          </div>
        </div>

        {/* Problem Navigator Buttons */}
        <div className="flex items-center gap-1.5 bg-white/80 p-1 rounded-xl border border-[#BBF7D0]">
          <span className="text-xs font-semibold text-[#166534] px-2">Жишээ сонгох:</span>
          {[1, 2, 3, 4].map((num) => {
            const isCurrent = questionIndex === num;
            return (
              <button
                key={num}
                type="button"
                onClick={() => {
                  setQuestionIndex(num);
                  handleReset();
                }}
                className={`w-7 h-7 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center ${
                  isCurrent
                    ? 'bg-[#16A34A] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-[#DCFCE7] border border-[#CBD5E1]'
                }`}
              >
                {num}
              </button>
            );
          })}
          <button
            type="button"
            onClick={handleNextProblem}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#15803D] hover:text-[#14532D] px-2 py-1 rounded-md hover:bg-[#DCFCE7] transition-colors cursor-pointer ml-1"
            title="Дараагийн төстэй жишээ бодлого"
          >
            <span>Дараагийнх</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Problem Prompt */}
      <div className="p-4 bg-white rounded-xl border border-[#BBF7D0] shadow-2xs space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-[#166534]">
          Бодлогын өгөгдөл:
        </div>
        <div className="text-base sm:text-lg font-medium text-[#0F172A] leading-relaxed">
          <MathText text={question.prompt} />
        </div>
      </div>

      {/* Multiple-Choice Options */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-[#166534] flex items-center gap-1.5">
          <span>Хариултын хувилбарууд:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            return (
              <button
                key={idx}
                type="button"
                disabled={isSubmitted}
                onClick={() => setSelectedOption(opt)}
                className={`p-3.5 rounded-xl border-2 text-left text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#DCFCE7] border-[#16A34A] text-[#14532D] font-bold shadow-2xs scale-[1.01]'
                    : 'bg-white border-[#CBD5E1] text-[#1E293B] hover:bg-[#F8FAFC] hover:border-slate-300'
                } ${isSubmitted ? 'cursor-default' : ''}`}
              >
                <span className={`w-6 h-6 rounded-md font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-[#16A34A] text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="overflow-x-auto flex-1 font-medium">
                  <MathText text={opt} />
                </span>
                {isSelected && <Check className="w-4 h-4 text-[#16A34A] shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Or Direct Typed Math Input */}
      <div className="p-3.5 bg-white/90 rounded-xl border border-[#BBF7D0] space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-[#166534]">
            Эсвэл хариугаа шууд гараас бичих:
          </span>
          {/* Quick math symbol insert buttons */}
          <div className="flex flex-wrap items-center gap-1">
            {MATH_HELPERS.map((h) => (
              <button
                key={h.label}
                type="button"
                disabled={isSubmitted}
                onClick={() => insertSymbol(h.insert)}
                className="px-2 py-0.5 text-xs font-mono font-bold bg-[#F8FAFC] hover:bg-[#DCFCE7] border border-slate-200 rounded text-slate-800 transition-colors cursor-pointer"
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <input
            type="text"
            disabled={isSubmitted}
            value={typedInput}
            onChange={(e) => setTypedInput(e.target.value)}
            placeholder="Жишээ: 12 эсвэл 3x + 4 эсвэл sqrt(15)..."
            className="px-3.5 py-2 text-xs sm:text-sm font-mono bg-white border border-[#CBD5E1] rounded-lg text-slate-900 focus:outline-2 focus:outline-[#16A34A] flex-1 min-w-[200px]"
          />

          {!isSubmitted ? (
            <button
              type="button"
              onClick={handleCheck}
              disabled={!selectedOption && !typedInput.trim()}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Бодолтыг шалгах (Check)
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#15803D] bg-white border border-[#86EFAC] hover:bg-[#DCFCE7] rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Дахин бодох</span>
              </button>
              <button
                type="button"
                onClick={handleNextProblem}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <span>Дараагийн жишээ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Hint disclosure toggle */}
          <button
            type="button"
            onClick={() => setShowHint((p) => !p)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors cursor-pointer ml-auto"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>{showHint ? 'Зөвлөмжийг нуух' : 'Зөвлөмж харах'}</span>
          </button>
        </div>
      </div>

      {/* Guiding Hint box if student requested */}
      {showHint && (
        <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 space-y-1.5 transition-all">
          <div className="font-bold flex items-center gap-1.5 text-amber-800">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Бодох аргачлалын зөвлөмж (Hint):</span>
          </div>
          <p className="italic pl-5">
            Дээрх самбарын алхмуудыг эргэн санаарай. Тухайн бодлогын дүрэм эсвэл томьёог энэ жишээн дээр шууд орлуулан хэрэглэнэ.
          </p>
        </div>
      )}

      {/* Feedback & Detailed Solution */}
      {isSubmitted && (
        <div
          className={`p-5 rounded-xl border-2 space-y-3.5 ${
            isCorrect
              ? 'bg-[#DCFCE7] border-[#86EFAC] text-[#14532D]'
              : 'bg-[#FEF2F2] border-[#FCA5A5] text-[#991B1B]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
              {isCorrect ? (
                <span className="inline-flex items-center gap-2 text-[#15803D]">
                  <CheckCircle2 className="w-5 h-5" />
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>Маш сайн! Жишээ бодлогыг зөв бодож чадлаа!</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 text-[#DC2626]">
                  <XCircle className="w-5 h-5" />
                  <span>Хариу буруу байна. Зөв бодолттой харьцуулан шалгаарай:</span>
                </span>
              )}
            </div>
            {completedCount > 0 && (
              <span className="text-xs font-bold text-[#166534] bg-white px-2.5 py-1 rounded-md border border-[#86EFAC]">
                Амжилттай бодсон: {completedCount}
              </span>
            )}
          </div>

          <div className="text-xs sm:text-sm bg-white p-4 rounded-xl border border-slate-200 text-slate-800 space-y-2 shadow-2xs">
            <div className="flex items-baseline gap-2 pb-1.5 border-b border-slate-100">
              <span className="font-bold text-slate-900">Зөв хариу (Model Answer):</span>
              <span className="text-base font-bold text-emerald-700">
                <MathText text={question.correctAnswer} />
              </span>
            </div>
            <div className="text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900 block mb-0.5">Бодох аргачлал ба тайлбар:</span>
              <MathText text={question.explanation} />
            </div>
            <div className="text-[11px] text-slate-400 pt-1">
              Эх сурвалж: {question.sourceRef}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
