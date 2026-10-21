import React, { useState } from 'react';
import { MathText } from './MathText';
import { PenLine, Trash2, X, Eye } from 'lucide-react';

interface WorkedExampleScratchpadProps {
  onClose?: () => void;
  exampleId: string;
}

const QUICK_MATH = [
  { label: '√', insert: '\\sqrt{}' },
  { label: '∛', insert: '\\sqrt[3]{}' },
  { label: 'x²', insert: '^2' },
  { label: 'x³', insert: '^3' },
  { label: 'a/b', insert: '\\frac{a}{b}' },
  { label: '×', insert: '\\times ' },
  { label: '÷', insert: '\\div ' },
  { label: 'π', insert: '\\pi' },
  { label: '°', insert: '^\\circ' },
  { label: '≤', insert: '\\le ' },
  { label: '≥', insert: '\\ge ' },
  { label: 'x', insert: 'x' },
  { label: 'y', insert: 'y' },
];

export const WorkedExampleScratchpad: React.FC<WorkedExampleScratchpadProps> = ({
  onClose,
  exampleId,
}) => {
  const [scratchText, setScratchText] = useState<string>('');

  const insertSymbol = (sym: string) => {
    setScratchText((prev) => prev + sym);
  };

  return (
    <div className="bg-[#FFFDF5] border border-[#FDE68A] rounded-xl p-4 sm:p-5 shadow-xs space-y-3.5 transition-all">
      <div className="flex items-center justify-between pb-2.5 border-b border-[#FEF08A]">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <PenLine className="w-4 h-4 text-amber-600" />
          <span>Interactive Student Whiteboard Scratchpad (Ноорог самбар)</span>
        </div>
        <div className="flex items-center gap-2">
          {scratchText && (
            <button
              type="button"
              onClick={() => setScratchText('')}
              className="inline-flex items-center gap-1 text-xs text-amber-800 hover:text-red-600 px-2 py-1 rounded bg-amber-100/60 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          )}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-amber-800 hover:text-amber-950 p-1 rounded-md hover:bg-amber-100 transition-colors cursor-pointer"
              aria-label="Close scratchpad"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <p className="text-xs text-amber-800">
        Jot down rough steps, test arithmetic, or solve alongside the teacher before revealing the next step.
      </p>

      {/* Quick Math Symbols */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-semibold text-amber-800 mr-1">Insert:</span>
        {QUICK_MATH.map((m) => (
          <button
            key={m.label}
            type="button"
            onClick={() => insertSymbol(m.insert)}
            className="px-2 py-0.5 text-xs font-mono font-bold bg-white border border-amber-200 hover:bg-amber-100 rounded text-amber-950 transition-colors shadow-2xs cursor-pointer"
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Notepad Textarea */}
      <textarea
        rows={3}
        value={scratchText}
        onChange={(e) => setScratchText(e.target.value)}
        placeholder="Type your notes or intermediate math here (e.g. 9^2 = 81, so sqrt(90) > 9)..."
        className="w-full p-3 text-xs sm:text-sm font-mono bg-white border border-amber-300 rounded-lg text-slate-900 focus:outline-2 focus:outline-amber-500 placeholder:text-slate-400"
      />

      {/* Live math preview */}
      {scratchText.trim() && (
        <div className="p-2.5 rounded-lg bg-white border border-amber-200 text-xs sm:text-sm space-y-1">
          <div className="text-[11px] font-semibold text-amber-700 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>Mathematical Rendering:</span>
          </div>
          <div className="overflow-x-auto text-slate-800">
            <MathText text={scratchText.includes('$') ? scratchText : `$${scratchText}$`} />
          </div>
        </div>
      )}
    </div>
  );
};
