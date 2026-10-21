import React, { useState } from 'react';
import { KeyWordItem } from '../types/curriculum';
import { MathText } from './MathText';

interface KeyWordsPanelProps {
  keyWords: KeyWordItem[];
  lessonCode: string;
}

export const KeyWordsPanel: React.FC<KeyWordsPanelProps> = ({ keyWords, lessonCode }) => {
  // Independent expand/collapse state per term index; all collapsed on initial load
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  // Reset or key by lessonCode + index so definitions are never automatically displayed on load
  const toggleTerm = (termKey: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [termKey]: !prev[termKey],
    }));
  };

  return (
    <div
      aria-labelledby={`keywords-heading-${lessonCode}`}
      className="rounded-xl bg-[#FFF3E6] border border-[#FED7AA] p-5 sm:p-6 shadow-xs"
    >
      <div className="flex items-baseline justify-between gap-4 mb-4 pb-3 border-b border-[#FDBA74]/50">
        <div>
          <h3
            id={`keywords-heading-${lessonCode}`}
            className="text-base sm:text-lg font-bold text-[#431407] tracking-tight"
          >
            Key Words
          </h3>
          <p className="text-xs sm:text-sm text-[#9A3412] mt-0.5">
            Click any mathematical key word below to reveal or hide its definition.
          </p>
        </div>
        <span className="text-xs font-medium text-[#9A3412] tabular-nums whitespace-nowrap shrink-0">
          {keyWords.length} {keyWords.length === 1 ? 'term' : 'terms'} · Learner’s Book 9
        </span>
      </div>

      <ul className="space-y-3" role="list">
        {keyWords.map((item, idx) => {
          const termKey = `${lessonCode}-${idx}-${item.term}`;
          const isOpen = !!expandedMap[termKey];
          const contentId = `keyword-def-${lessonCode}-${idx}`;

          return (
            <li
              key={termKey}
              className="rounded-lg bg-[#FFF9F2] border border-[#FED7AA]/80 transition-colors hover:border-[#FB923C]"
            >
              <button
                type="button"
                onClick={() => toggleTerm(termKey)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C] rounded-lg cursor-pointer"
              >
                <span className="flex items-center gap-3 text-base font-semibold text-[#1C1917]">
                  <span
                    aria-hidden="true"
                    className={`inline-flex items-center justify-center w-5 h-5 text-xs text-[#C2410C] transition-transform duration-200 ${
                      isOpen ? 'rotate-90' : 'rotate-0'
                    }`}
                  >
                    ▶
                  </span>
                  <span>{item.term}</span>
                </span>
                <span className="text-xs font-medium text-[#9A3412] whitespace-nowrap shrink-0">
                  {isOpen ? 'Hide definition' : 'Show definition'}
                </span>
              </button>

              <div
                id={contentId}
                role="region"
                aria-label={`Definition of ${item.term}`}
                className={`grid transition-all duration-200 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 pt-1 pl-12 text-sm sm:text-base leading-relaxed text-[#292524] border-t border-[#FED7AA]/50">
                    <MathText text={item.definition} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
