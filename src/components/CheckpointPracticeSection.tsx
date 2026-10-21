import React, { useState, useEffect } from 'react';
import { CheckpointQuestion } from '../types/curriculum';
import { MathText } from './MathText';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

interface CheckpointPracticeSectionProps {
  questions: CheckpointQuestion[];
  lessonCode: string;
}

function normalizeCheckpointInput(s: string): string {
  return s
    .replace(/\$/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

export const CheckpointPracticeSection: React.FC<CheckpointPracticeSectionProps> = ({
  questions,
  lessonCode,
}) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setInputs({});
    setSubmitted({});
  }, [lessonCode]);

  const checkIsCorrect = (q: CheckpointQuestion): boolean => {
    const raw = inputs[q.id] || '';
    if (!raw.trim()) return false;
    const norm = normalizeCheckpointInput(raw);
    return q.acceptableAnswers.some(
      (acc) => normalizeCheckpointInput(acc) === norm
    );
  };

  const totalMarks = questions.reduce((acc, q) => acc + q.marks, 0);
  const earnedMarks = questions.reduce(
    (acc, q) => acc + (submitted[q.id] && checkIsCorrect(q) ? q.marks : 0),
    0
  );

  return (
    <section
      aria-labelledby={`checkpoint-heading-${lessonCode}`}
      className="bg-white border-2 border-[#0F172A] rounded-xl p-6 sm:p-8 shadow-xs space-y-6"
    >
      {/* Unnumbered Heading — Displayed after Section 5 */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-white flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2
              id={`checkpoint-heading-${lessonCode}`}
              className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight"
            >
              Checkpoint 0862 Practice
            </h2>
            <p className="text-sm text-[#475569]">
              Cambridge Lower Secondary Mathematics 0862 examination-style assessment questions for Subsection {lessonCode}.
            </p>
          </div>
        </div>

        <div className="text-right tabular-nums">
          <div className="text-sm font-bold text-[#0F172A]">
            Marks: {earnedMarks} / {totalMarks}
          </div>
          <div className="text-xs text-[#64748B]">
            Syllabus 0862 Aligned
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {questions.map((q, idx) => {
          const isSub = !!submitted[q.id];
          const isOk = isSub && checkIsCorrect(q);

          return (
            <div
              key={q.id}
              className="p-5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#475569]">
                <span className="font-semibold text-[#0F172A]">
                  Question {idx + 1} · {q.paperRef}
                </span>
                <span className="font-mono font-semibold text-[#0F172A] tabular-nums">
                  [{q.marks} {q.marks === 1 ? 'mark' : 'marks'}]
                </span>
              </div>

              <div className="text-base font-medium text-[#0F172A] leading-relaxed">
                <MathText text={q.prompt} />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  disabled={isSub}
                  value={inputs[q.id] || ''}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      [q.id]: e.target.value,
                    }))
                  }
                  placeholder="Enter your final answer..."
                  className="px-3.5 py-2 text-sm font-mono bg-white border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:outline-2 focus:outline-[#0284C7] min-w-[240px]"
                />

                {!isSub ? (
                  <button
                    type="button"
                    disabled={!inputs[q.id]?.trim()}
                    onClick={() =>
                      setSubmitted((prev) => ({
                        ...prev,
                        [q.id]: true,
                      }))
                    }
                    className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] disabled:bg-slate-300 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit & View Mark Scheme
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setSubmitted((prev) => ({
                        ...prev,
                        [q.id]: false,
                      }))
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#475569] bg-white border border-[#CBD5E1] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                )}

                {isSub && (
                  <span className="text-xs font-bold">
                    {isOk ? (
                      <span className="inline-flex items-center gap-1 text-[#059669]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>● {q.marks}/{q.marks} MARKS AWARDED</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[#DC2626]">
                        <XCircle className="w-4 h-4" />
                        <span>▲ 0/{q.marks} MARKS — CHECK MARK SCHEME</span>
                      </span>
                    )}
                  </span>
                )}
              </div>

              {isSub && (
                <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-[#0F172A]">
                    Official 0862 Mark Scheme Breakdown:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#334155]">
                    {q.markSchemeSteps.map((step, sIdx) => (
                      <li key={sIdx}>
                        <MathText text={step} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
