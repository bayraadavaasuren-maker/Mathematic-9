import React, { useState, useEffect, useRef } from 'react';
import { MathText } from './MathText';
import { Save, Check, Trash2 } from 'lucide-react';

interface LessonReflectionSectionProps {
  lessonCode: string;
  lessonTitle: string;
  prompts: string[];
}

interface SavedReflection {
  id: string;
  lessonCode: string;
  content: string;
  updatedAt: string;
}

const FORMULA_PALETTE = [
  { label: 'Fraction a/b', snippet: '$\\frac{a}{b}$' },
  { label: 'Square root √x', snippet: '$\\sqrt{x}$' },
  { label: 'Cube root ∛x', snippet: '$\\sqrt[3]{x}$' },
  { label: 'Power xⁿ', snippet: '$x^{n}$' },
  { label: 'Standard form', snippet: '$a \\times 10^{n}$' },
  { label: 'Equation =', snippet: '$y = mx + c$' },
  { label: 'Inequality ≤', snippet: '$a \\le x < b$' },
  { label: 'Pi π', snippet: '$\\pi$' },
  { label: 'Angle °', snippet: '$180^\\circ$' },
  { label: 'Vector (x,y)', snippet: '$\\binom{x}{y}$' },
  { label: 'Subscript x₁', snippet: '$x_{1}$' },
  { label: 'Plus/Minus ±', snippet: '$\\pm$' },
];

export const LessonReflectionSection: React.FC<LessonReflectionSectionProps> = ({
  lessonCode,
  lessonTitle,
  prompts,
}) => {
  const storageKey = `cambridge_stage9_reflection_${lessonCode}`;
  const [content, setContent] = useState<string>('');
  const [savedHistory, setSavedHistory] = useState<SavedReflection[]>([]);
  const [justSaved, setJustSaved] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setSavedHistory(parsed);
          if (parsed.length > 0) {
            setContent(parsed[0].content);
          } else {
            setContent('');
          }
        }
      } else {
        setSavedHistory([]);
        setContent('');
      }
    } catch {
      setSavedHistory([]);
      setContent('');
    }
  }, [lessonCode, storageKey]);

  const insertSnippet = (snippet: string) => {
    const el = textareaRef.current;
    if (!el) {
      setContent((prev) => prev + ' ' + snippet);
      return;
    }
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const next = content.slice(0, start) + snippet + content.slice(end);
    setContent(next);
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + snippet.length, start + snippet.length);
    }, 10);
  };

  const handleSave = () => {
    if (!content.trim()) return;
    const entry: SavedReflection = {
      id: `${lessonCode}-${Date.now()}`,
      lessonCode,
      content: content.trim(),
      updatedAt: new Date().toLocaleString(),
    };
    const nextList = [entry, ...savedHistory.slice(0, 4)];
    setSavedHistory(nextList);
    try {
      localStorage.setItem(storageKey, JSON.stringify(nextList));
    } catch {
      // ignore storage errors
    }
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const handleClear = () => {
    setContent('');
    setSavedHistory([]);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
  };

  return (
    <section
      aria-labelledby={`reflection-heading-${lessonCode}`}
      className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 shadow-xs space-y-6"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        <div>
          <h2
            id={`reflection-heading-${lessonCode}`}
            className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight"
          >
            5. Lesson Reflection
          </h2>
          <p className="text-sm text-[#475569] mt-0.5">
            Summarise your mathematical understanding of {lessonCode} {lessonTitle} using the Mathematical Formula Editor.
          </p>
        </div>
        <span className="text-xs font-medium text-[#64748B]">
          Saved locally per lesson
        </span>
      </div>

      {/* Guiding Reflection Prompts */}
      <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
        <div className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
          Thinking & Working Mathematically Prompts:
        </div>
        <ul className="list-disc list-inside space-y-1 text-sm text-[#1E293B]">
          {prompts.map((p, idx) => (
            <li key={idx}>
              <MathText text={p} />
            </li>
          ))}
        </ul>
      </div>

      {/* Mathematical Formula Editor Toolbar */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-[#F1F5F9] border border-[#CBD5E1] rounded-t-xl">
          <span className="text-xs font-semibold text-[#334155] mr-2">
            Formula Editor:
          </span>
          {FORMULA_PALETTE.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => insertSnippet(item.snippet)}
              className="px-2.5 py-1 text-xs font-medium bg-white hover:bg-[#E0F2FE] text-[#0F172A] border border-[#CBD5E1] rounded transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        <textarea
          ref={textareaRef}
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your reflection and mathematical formulas here. Wrap math in $...$, for example: When dividing powers with the same base, $a^m \div a^n = a^{m-n}$ and $\frac{1}{a^n} = a^{-n}$..."
          className="w-full p-4 text-sm sm:text-base font-mono bg-white border border-[#CBD5E1] rounded-b-xl text-[#0F172A] focus:outline-2 focus:outline-[#0284C7] -mt-3"
        />
      </div>

      {/* Live KaTeX Preview */}
      <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
        <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
          Live Typeset Mathematical Preview
        </div>
        {content.trim() ? (
          <div className="text-base text-[#0F172A] leading-relaxed whitespace-pre-wrap">
            <MathText text={content} />
          </div>
        ) : (
          <p className="text-sm text-[#94A3B8] italic">
            Your typeset fractions, indices, roots, and equations will render here as you type...
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={!content.trim()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] disabled:bg-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            {justSaved ? (
              <>
                <Check className="w-4 h-4" />
                <span>Reflection Saved</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Reflection</span>
              </>
            )}
          </button>

          {savedHistory.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#64748B] hover:text-[#DC2626] bg-[#F8FAFC] hover:bg-red-50 border border-[#CBD5E1] rounded-lg transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Saved</span>
            </button>
          )}
        </div>

        {savedHistory.length > 0 && (
          <span className="text-xs text-[#059669] font-medium">
            ● Last saved: {savedHistory[0].updatedAt}
          </span>
        )}
      </div>
    </section>
  );
};
