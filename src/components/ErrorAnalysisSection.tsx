import React, { useState, useEffect } from 'react';
import { ErrorAnalysisItem } from '../types/curriculum';
import { MathText } from './MathText';
import { CheckCircle2, AlertTriangle, RotateCcw } from 'lucide-react';

interface ErrorAnalysisSectionProps {
  item: ErrorAnalysisItem;
  lessonCode: string;
}

export const ErrorAnalysisSection: React.FC<ErrorAnalysisSectionProps> = ({
  item,
  lessonCode,
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [studentCorrection, setStudentCorrection] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setSelectedIdx(null);
    setStudentCorrection('');
    setIsSubmitted(false);
  }, [item.id, lessonCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIdx === null && !studentCorrection.trim()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setStudentCorrection('');
    setIsSubmitted(false);
  };

  const isCorrectChoice = selectedIdx === item.correctOptionIndex;

  return (
    <section
      aria-labelledby={`error-analysis-heading-${lessonCode}`}
      className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 shadow-xs space-y-6"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        <div>
          <h2
            id={`error-analysis-heading-${lessonCode}`}
            className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight"
          >
            4. Error Analysis
          </h2>
          <p className="text-sm text-[#475569] mt-0.5">
            Critique the mathematical working below, identify the mistake, and write the corrected solution.
          </p>
        </div>
        <span className="text-xs font-medium text-[#64748B]">
          Source: {item.workbookSource}
        </span>
      </div>

      {/* Problem & Student's Flawed Working */}
      <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-4">
        <div className="text-sm sm:text-base font-medium text-[#0F172A] leading-relaxed">
          <MathText text={item.questionPrompt} />
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2">
          <div className="text-xs font-semibold text-[#64748B]">
            {item.studentName}’s Written Working (Contains an Error):
          </div>
          <div className="space-y-1.5 pl-2">
            {item.studentWorkLatex.map((line, idx) => (
              <div key={idx} className="text-base text-[#1E293B] overflow-x-auto">
                <MathText text={`$${line}$`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Analysis Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2.5">
          <label className="block text-sm font-bold text-[#0F172A]">
            Step 1: Identify the mathematical error in {item.studentName}’s working:
          </label>
          <div className="space-y-2">
            {item.options.map((opt, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full flex items-start gap-3 p-3.5 rounded-lg border text-left text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#E0F2FE] border-[#0284C7] text-[#0C4A6E] font-medium'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#1E293B] hover:bg-[#F1F5F9]'
                  } ${isSubmitted ? 'cursor-default' : ''}`}
                >
                  <span className="font-mono font-bold text-xs mt-0.5 text-[#475569]">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <span className="leading-relaxed">
                    <MathText text={opt} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor={`ea-correction-${lessonCode}`}
            className="block text-sm font-bold text-[#0F172A]"
          >
            Step 2: Write your corrected mathematical solution (supports LaTeX e.g. \frac&#123;a&#125;&#123;b&#125;, ^2, \sqrt&#123;&#125;):
          </label>
          <textarea
            id={`ea-correction-${lessonCode}`}
            rows={3}
            disabled={isSubmitted}
            value={studentCorrection}
            onChange={(e) => setStudentCorrection(e.target.value)}
            placeholder="Write the corrected mathematical steps and final answer here..."
            className="w-full p-3.5 text-sm font-mono bg-white border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:outline-2 focus:outline-[#0284C7]"
          />
          {studentCorrection.trim() && (
            <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-sm">
              <span className="text-xs font-semibold text-[#64748B] block mb-1">
                Live Mathematical Preview:
              </span>
              <MathText text={studentCorrection} />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {!isSubmitted ? (
            <button
              type="submit"
              disabled={selectedIdx === null && !studentCorrection.trim()}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] disabled:bg-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              Submit Error Analysis
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#475569] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
          )}
        </div>
      </form>

      {/* Revealed ONLY after submission */}
      {isSubmitted && (
        <div
          className={`p-5 rounded-xl border space-y-4 ${
            isCorrectChoice
              ? 'bg-[#F0FDF4] border-[#86EFAC]'
              : 'bg-[#FFFBEB] border-[#FDE68A]'
          }`}
        >
          <div className="flex items-center gap-2 text-sm font-bold">
            {isCorrectChoice ? (
              <span className="inline-flex items-center gap-1.5 text-[#059669]">
                <CheckCircle2 className="w-5 h-5" />
                <span>● NOMINAL — You accurately diagnosed the mathematical error!</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[#D97706]">
                <AlertTriangle className="w-5 h-5" />
                <span>▲ REVIEW — Compare your analysis with the model critique below:</span>
              </span>
            )}
          </div>

          <div className="text-sm text-[#1E293B] leading-relaxed">
            <span className="font-semibold">Critique: </span>
            <MathText text={item.options[item.correctOptionIndex]} />
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-2">
            <div className="text-xs font-semibold text-[#0369A1] uppercase tracking-wider">
              Corrected Whiteboard Solution:
            </div>
            {item.correctedSolutionLatex.map((line, idx) => (
              <div key={idx} className="text-base text-[#0F172A] overflow-x-auto">
                <MathText text={`$${line}$`} />
              </div>
            ))}
          </div>

          <div className="text-xs sm:text-sm text-[#475569]">
            <MathText text={item.explanation} />
          </div>
        </div>
      )}
    </section>
  );
};
