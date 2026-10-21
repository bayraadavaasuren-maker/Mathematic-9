import React, { useState, useMemo, useEffect } from 'react';
import { getQuestionsForLessonLevel } from '../data/questionGenerator';
import { PracticeQuestion } from '../types/curriculum';
import { MathText } from './MathText';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface DifferentiatedPracticeProps {
  lessonCode: string;
  onScoreUpdate?: (level: 1 | 2 | 3, score: number) => void;
}

const MATH_SYMBOLS = [
  { label: '√', insert: '\\sqrt{}' },
  { label: '∛', insert: '\\sqrt[3]{}' },
  { label: 'x²', insert: '^2' },
  { label: 'xⁿ', insert: '^' },
  { label: 'a/b', insert: '/' },
  { label: 'π', insert: '\\pi' },
  { label: '×', insert: '\\times ' },
  { label: '≤', insert: '\\le ' },
  { label: '≥', insert: '\\ge ' },
  { label: '°', insert: '^\\circ' },
];

function stripLatex(s: string): string {
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

function isCustomAnswerCorrect(userInput: string, correctOption: string): boolean {
  if (!userInput.trim()) return false;
  const normUser = stripLatex(userInput);
  const normCorrect = stripLatex(correctOption);
  if (normUser === normCorrect) return true;
  if (normUser.length >= 1 && normCorrect.includes(normUser)) {
    // Check if numbers match
    const userNums = userInput.match(/-?\d+(\.\d+)?/g);
    const corrNums = correctOption.match(/-?\d+(\.\d+)?/g);
    if (userNums && corrNums && userNums.join(',') === corrNums.join(',')) {
      return true;
    }
  }
  return false;
}

export const DifferentiatedPracticeSection: React.FC<DifferentiatedPracticeProps> = ({
  lessonCode,
  onScoreUpdate,
}) => {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3>(1);
  // Store selected option or typed math response per question ID
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [typedInputs, setTypedInputs] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [focusedQuestionId, setFocusedQuestionId] = useState<string | null>(null);

  useEffect(() => {
    setActiveLevel(1);
  }, [lessonCode]);

  const level1Questions = useMemo(() => getQuestionsForLessonLevel(lessonCode, 1), [lessonCode]);
  const level2Questions = useMemo(() => getQuestionsForLessonLevel(lessonCode, 2), [lessonCode]);
  const level3Questions = useMemo(() => getQuestionsForLessonLevel(lessonCode, 3), [lessonCode]);

  const levelsData: { level: 1 | 2 | 3; title: string; subtitle: string; questions: PracticeQuestion[] }[] = [
    {
      level: 1,
      title: 'Level 1 — 20 Questions (Focus: Foundational Mastery)',
      subtitle: 'Master the core mathematical concepts and fundamental skills from the subsection.',
      questions: level1Questions,
    },
    {
      level: 2,
      title: 'Level 2 — 20 Questions (Practice: Developing Fluency)',
      subtitle: 'Build confidence with multi-step calculations and standard textbook applications.',
      questions: level2Questions,
    },
    {
      level: 3,
      title: 'Level 3 — 20 Questions (Challenge: Mathematical Reasoning & Extension)',
      subtitle: 'Apply algebraic generalisation, inverse problem solving, and deeper reasoning.',
      questions: level3Questions,
    },
  ];

  const isQuestionCorrect = (q: PracticeQuestion): boolean => {
    const chosen = selectedOptions[q.id];
    if (chosen && chosen === q.correctAnswer) return true;
    const typed = typedInputs[q.id];
    if (typed && isCustomAnswerCorrect(typed, q.correctAnswer)) return true;
    return false;
  };

  const getLevelStats = (questions: PracticeQuestion[]) => {
    let answered = 0;
    let correct = 0;
    questions.forEach((q) => {
      if (submittedQuestions[q.id]) {
        answered++;
        if (isQuestionCorrect(q)) {
          correct++;
        }
      }
    });
    return { answered, correct, total: questions.length };
  };

  const handleCheckQuestion = (q: PracticeQuestion, level: 1 | 2 | 3, questions: PracticeQuestion[]) => {
    if (!selectedOptions[q.id] && !typedInputs[q.id]?.trim()) return;
    const nextSubmitted = { ...submittedQuestions, [q.id]: true };
    setSubmittedQuestions(nextSubmitted);

    if (onScoreUpdate) {
      let correctCount = 0;
      questions.forEach((item) => {
        if (nextSubmitted[item.id]) {
          const ok =
            selectedOptions[item.id] === item.correctAnswer ||
            (typedInputs[item.id] && isCustomAnswerCorrect(typedInputs[item.id], item.correctAnswer));
          if (ok) correctCount++;
        }
      });
      onScoreUpdate(level, correctCount);
    }
  };

  const handleCheckAllInLevel = (level: 1 | 2 | 3, questions: PracticeQuestion[]) => {
    const nextSubmitted = { ...submittedQuestions };
    questions.forEach((q) => {
      if (selectedOptions[q.id] || typedInputs[q.id]?.trim()) {
        nextSubmitted[q.id] = true;
      }
    });
    setSubmittedQuestions(nextSubmitted);

    if (onScoreUpdate) {
      let correctCount = 0;
      questions.forEach((item) => {
        if (nextSubmitted[item.id]) {
          const ok =
            selectedOptions[item.id] === item.correctAnswer ||
            (typedInputs[item.id] && isCustomAnswerCorrect(typedInputs[item.id], item.correctAnswer));
          if (ok) correctCount++;
        }
      });
      onScoreUpdate(level, correctCount);
    }
  };

  const handleResetLevel = (level: 1 | 2 | 3, questions: PracticeQuestion[]) => {
    const nextSelected = { ...selectedOptions };
    const nextTyped = { ...typedInputs };
    const nextSubmitted = { ...submittedQuestions };
    questions.forEach((q) => {
      delete nextSelected[q.id];
      delete nextTyped[q.id];
      delete nextSubmitted[q.id];
    });
    setSelectedOptions(nextSelected);
    setTypedInputs(nextTyped);
    setSubmittedQuestions(nextSubmitted);
    if (onScoreUpdate) onScoreUpdate(level, 0);
  };

  const insertSymbolToQuestion = (qId: string, sym: string) => {
    setTypedInputs((prev) => ({
      ...prev,
      [qId]: (prev[qId] || '') + sym,
    }));
  };

  const currentLevelObj = levelsData.find((l) => l.level === activeLevel) || levelsData[0];
  const currentStats = getLevelStats(currentLevelObj.questions);

  return (
    <section
      aria-labelledby={`practice-heading-${lessonCode}`}
      className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 shadow-xs space-y-6"
    >
      {/* Section 3 Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        <div>
          <h2
            id={`practice-heading-${lessonCode}`}
            className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight"
          >
            3. Differentiated Practice
          </h2>
          <p className="text-sm text-[#475569] mt-0.5">
            Complete all three subsections (Level 1, Level 2, and Level 3 — 20 questions each, 60 questions in total).
          </p>
        </div>

        {/* Summary of all 3 subsections */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#475569] tabular-nums">
          <span>L1: {getLevelStats(level1Questions).correct}/20</span>
          <span aria-hidden="true">·</span>
          <span>L2: {getLevelStats(level2Questions).correct}/20</span>
          <span aria-hidden="true">·</span>
          <span>L3: {getLevelStats(level3Questions).correct}/20</span>
        </div>
      </div>

      {/* Subsection Selector Tabs (Level 1, Level 2, Level 3 inside Section 3) */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Differentiated Practice Subsections"
          className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F1F5F9] rounded-lg"
        >
          {levelsData.map((lvl) => {
            const st = getLevelStats(lvl.questions);
            const isActive = activeLevel === lvl.level;
            return (
              <button
                key={lvl.level}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveLevel(lvl.level)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#0F172A] shadow-xs'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                Level {lvl.level} — 20 Questions ({st.correct}/20)
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleCheckAllInLevel(currentLevelObj.level, currentLevelObj.questions)}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Check Answered in Level {currentLevelObj.level}
          </button>
          <button
            type="button"
            onClick={() => handleResetLevel(currentLevelObj.level, currentLevelObj.questions)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#475569] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Level {currentLevelObj.level}</span>
          </button>
        </div>
      </div>

      {/* Active Subsection Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
            {currentLevelObj.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569]">
            {currentLevelObj.subtitle}
          </p>
        </div>
        <div className="text-right tabular-nums">
          <div className="text-sm font-bold text-[#0F172A]">
            Score: {currentStats.correct} / {currentStats.total}
          </div>
          <div className="text-xs text-[#64748B]">
            {currentStats.answered} of 20 checked
          </div>
        </div>
      </div>

      {/* Quick Math Symbol Input Bar for Typed Mathematical Responses */}
      <div className="flex flex-wrap items-center gap-2 py-2 px-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
        <span className="text-xs font-medium text-[#475569] mr-1">
          Insert math symbol into active input:
        </span>
        {MATH_SYMBOLS.map((sym) => (
          <button
            key={sym.label}
            type="button"
            onClick={() => {
              const targetId = focusedQuestionId || currentLevelObj.questions[0].id;
              insertSymbolToQuestion(targetId, sym.insert);
            }}
            className="px-2.5 py-1 text-xs font-mono font-medium bg-white border border-[#CBD5E1] rounded hover:bg-[#F1F5F9] text-[#0F172A] transition-colors cursor-pointer"
          >
            {sym.label}
          </button>
        ))}
      </div>

      {/* 20 Questions List for Active Level */}
      <div className="space-y-4">
        {currentLevelObj.questions.map((q) => {
          const isSubmitted = !!submittedQuestions[q.id];
          const isCorrect = isSubmitted && isQuestionCorrect(q);
          const chosenOption = selectedOptions[q.id] || '';
          const typedVal = typedInputs[q.id] || '';

          return (
            <div
              key={q.id}
              className={`p-5 rounded-xl border transition-colors ${
                isSubmitted
                  ? isCorrect
                    ? 'bg-[#F0FDF4]/60 border-[#86EFAC]'
                    : 'bg-[#FEF2F2]/60 border-[#FCA5A5]'
                  : 'bg-white border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-sm font-bold font-mono text-[#0284C7] tabular-nums">
                    Q{q.number}.
                  </span>
                  <div className="text-sm sm:text-base font-medium text-[#0F172A] leading-relaxed">
                    <MathText text={q.prompt} />
                  </div>
                </div>
                <span className="text-[11px] text-[#64748B] whitespace-nowrap shrink-0">
                  {q.sourceRef}
                </span>
              </div>

              {/* Multiple Choice Mathematical Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-0 sm:pl-7 mb-3">
                {q.options.map((opt, oIdx) => {
                  const isSelected = chosenOption === opt;
                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() =>
                        setSelectedOptions((prev) => ({
                          ...prev,
                          [q.id]: opt,
                        }))
                      }
                      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border text-left text-sm transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#E0F2FE] border-[#0284C7] text-[#0C4A6E] font-medium'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#1E293B] hover:bg-[#F1F5F9]'
                      } ${isSubmitted ? 'opacity-90 cursor-default' : ''}`}
                    >
                      <span className="text-xs font-mono font-bold text-[#64748B]">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>
                      <span className="overflow-x-auto">
                        <MathText text={opt} />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Direct Mathematical Answer Input + Check Button */}
              <div className="pl-0 sm:pl-7 flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[220px]">
                  <label htmlFor={`input-${q.id}`} className="text-xs text-[#64748B] whitespace-nowrap">
                    Or type mathematical answer:
                  </label>
                  <input
                    id={`input-${q.id}`}
                    type="text"
                    disabled={isSubmitted}
                    value={typedVal}
                    onFocus={() => setFocusedQuestionId(q.id)}
                    onChange={(e) =>
                      setTypedInputs((prev) => ({
                        ...prev,
                        [q.id]: e.target.value,
                      }))
                    }
                    placeholder="e.g. 2.56 * 10^8 or x = 4"
                    className="px-3 py-1.5 text-xs sm:text-sm font-mono bg-white border border-[#CBD5E1] rounded-md text-[#0F172A] focus:outline-2 focus:outline-[#0284C7] flex-1 max-w-xs"
                  />
                  {typedVal && (
                    <span className="text-xs text-[#475569] bg-slate-100 px-2 py-1 rounded">
                      Preview: <MathText text={`$${typedVal}$`} />
                    </span>
                  )}
                </div>

                {!isSubmitted ? (
                  <button
                    type="button"
                    onClick={() =>
                      handleCheckQuestion(q, currentLevelObj.level, currentLevelObj.questions)
                    }
                    disabled={!chosenOption && !typedVal.trim()}
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] disabled:bg-slate-300 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-[#059669]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>● CORRECT</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[#DC2626]">
                        <XCircle className="w-4 h-4" />
                        <span>▲ INCORRECT</span>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Post-Submission Worked Feedback */}
              {isSubmitted && (
                <div className="mt-3 pl-0 sm:pl-7 pt-3 border-t border-slate-200/80 text-xs sm:text-sm space-y-1">
                  <div className="font-semibold text-[#0F172A]">
                    Correct Answer: <MathText text={q.correctAnswer} />
                  </div>
                  <div className="text-[#334155]">
                    <span className="font-medium">Explanation: </span>
                    <MathText text={q.explanation} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
