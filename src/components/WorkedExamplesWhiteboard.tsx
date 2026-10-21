import React from 'react';
import { WorkedExampleItem } from '../types/curriculum';
import { MathText } from './MathText';

interface WhiteboardDiagramProps {
  type?: WorkedExampleItem['diagramType'];
}

const WhiteboardDiagram: React.FC<WhiteboardDiagramProps> = ({ type }) => {
  if (!type) return null;

  switch (type) {
    case 'rect-2-2':
      return (
        <div className="my-3 p-4 bg-slate-50/70 border border-slate-200 rounded-lg inline-block">
          <svg width="240" height="110" viewBox="0 0 240 110" className="text-slate-800">
            <rect x="30" y="20" width="140" height="55" fill="#BFDBFE" fillOpacity="0.45" stroke="#1E293B" strokeWidth="1.75" />
            <text x="100" y="95" textAnchor="middle" className="text-xs font-mono fill-slate-900">3x + 4</text>
            <text x="195" y="52" textAnchor="start" className="text-xs font-mono fill-slate-900">x²</text>
            <line x1="180" y1="20" x2="180" y2="75" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
          </svg>
        </div>
      );
    case 'triangle-4-3':
      return (
        <div className="my-3 p-4 bg-slate-50/70 border border-slate-200 rounded-lg inline-block">
          <svg width="260" height="120" viewBox="0 0 260 120">
            <polygon points="30,90 110,25 230,95" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.75" />
            <text x="55" y="52" className="text-xs font-mono fill-slate-900">x cm</text>
            <text x="175" y="55" className="text-xs font-mono fill-slate-900">x + 2 cm</text>
            <text x="125" y="112" className="text-xs font-mono fill-slate-900">x + 3 cm</text>
          </svg>
        </div>
      );
    case 'parallel-5-1':
      return (
        <div className="my-3 p-4 bg-slate-50/70 border border-slate-200 rounded-lg inline-block">
          <svg width="240" height="190" viewBox="0 0 240 190">
            {/* Parallel vertical lines AD and EF */}
            <line x1="45" y1="20" x2="45" y2="175" stroke="#0F172A" strokeWidth="1.75" />
            <line x1="165" y1="15" x2="165" y2="175" stroke="#0F172A" strokeWidth="1.75" />
            {/* Polygon ABCD */}
            <polyline points="45,35 115,48 165,98 45,140" fill="none" stroke="#0F172A" strokeWidth="1.75" />
            <text x="30" y="38" className="text-xs font-semibold fill-slate-900">A</text>
            <text x="115" y="38" className="text-xs font-semibold fill-slate-900">B</text>
            <text x="173" y="102" className="text-xs font-semibold fill-slate-900">C</text>
            <text x="30" y="144" className="text-xs font-semibold fill-slate-900">D</text>
            <text x="173" y="25" className="text-xs font-semibold fill-slate-900">E</text>
            <text x="173" y="172" className="text-xs font-semibold fill-slate-900">F</text>
            <text x="52" y="55" className="text-[11px] font-mono fill-slate-800">80°</text>
            <text x="95" y="64" className="text-[11px] font-mono fill-slate-800">134°</text>
            <text x="146" y="75" className="text-[11px] font-mono fill-sky-700">y°</text>
            <text x="52" y="128" className="text-[11px] font-mono fill-sky-700">x°</text>
            <text x="50" y="158" className="text-[11px] font-mono fill-slate-800">118°</text>
          </svg>
        </div>
      );
    case 'inscribe-square-5-3':
      return (
        <div className="my-3 p-4 bg-slate-50/70 border border-slate-200 rounded-lg inline-flex items-center gap-6">
          <svg width="110" height="110" viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="42" fill="none" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="13" y1="55" x2="97" y2="55" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="55" y1="13" x2="55" y2="97" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 2" />
            <polygon points="55,13 97,55 55,97 13,55" fill="#E0F2FE" fillOpacity="0.4" stroke="#0F172A" strokeWidth="1.75" />
          </svg>
          <span className="text-xs text-slate-600 max-w-[180px]">
            Perpendicular bisector of diameter creates 4 equidistant vertices on the circle.
          </span>
        </div>
      );
    case 'pythagoras-rect-5-6':
      return (
        <div className="my-3 p-4 bg-slate-50/70 border border-slate-200 rounded-lg inline-block">
          <svg width="240" height="145" viewBox="0 0 240 145">
            <rect x="45" y="20" width="150" height="95" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.75" />
            <line x1="45" y1="20" x2="195" y2="115" stroke="#0284C7" strokeWidth="1.75" />
            <text x="32" y="24" className="text-xs font-semibold fill-slate-900">A</text>
            <text x="200" y="24" className="text-xs font-semibold fill-slate-900">B</text>
            <text x="200" y="122" className="text-xs font-semibold fill-slate-900">C</text>
            <text x="32" y="122" className="text-xs font-semibold fill-slate-900">D</text>
            <text x="6" y="72" className="text-xs font-mono fill-slate-800">7.5 cm</text>
            <text x="120" y="134" textAnchor="middle" className="text-xs font-mono fill-slate-800">11.3 cm</text>
          </svg>
        </div>
      );
    case 'compound-7-2':
      return (
        <div className="my-3 p-4 bg-slate-50/70 border border-slate-200 rounded-lg inline-flex gap-8 items-center">
          <svg width="160" height="110" viewBox="0 0 160 110">
            <path d="M 30 55 A 50 50 0 0 1 130 55 Z" fill="#FED7AA" fillOpacity="0.6" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="30" y="55" width="100" height="30" fill="#FDBA74" fillOpacity="0.6" stroke="#0F172A" strokeWidth="1.5" />
            <text x="80" y="42" textAnchor="middle" className="text-xs font-semibold fill-slate-900">B</text>
            <text x="80" y="75" textAnchor="middle" className="text-xs font-semibold fill-slate-900">A</text>
            <text x="80" y="102" textAnchor="middle" className="text-xs font-mono fill-slate-900">9 cm</text>
            <text x="22" y="74" textAnchor="end" className="text-xs font-mono fill-slate-900">3 cm</text>
          </svg>
        </div>
      );
    case 'prism-14-1':
      return (
        <div className="my-3 p-4 bg-slate-50/70 border border-slate-200 rounded-lg inline-block">
          <svg width="230" height="115" viewBox="0 0 230 115">
            <polygon points="25,85 55,35 105,85" fill="#FDE68A" fillOpacity="0.6" stroke="#0F172A" strokeWidth="1.75" />
            <polyline points="55,35 145,15 195,65 105,85" fill="none" stroke="#0F172A" strokeWidth="1.75" />
            <line x1="25" y1="85" x2="115" y2="65" stroke="#64748B" strokeWidth="1.2" strokeDasharray="4 3" />
            <text x="65" y="103" textAnchor="middle" className="text-xs font-mono fill-slate-900">Area = 12 cm²</text>
            <text x="165" y="88" className="text-xs font-mono fill-slate-900">5 cm</text>
          </svg>
        </div>
      );
    case 'cylinder-net-14-2':
      return (
        <div className="my-3 p-4 bg-slate-50/70 border border-slate-200 rounded-lg inline-block">
          <svg width="240" height="135" viewBox="0 0 240 135">
            <circle cx="65" cy="24" r="16" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="35" y="42" width="110" height="45" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="65" cy="105" r="16" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
            <text x="90" y="26" className="text-xs font-mono fill-slate-800">r = 3 cm</text>
            <text x="152" y="68" className="text-xs font-mono fill-slate-800">h = 8 cm</text>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

interface WorkedExamplesWhiteboardProps {
  examples: WorkedExampleItem[];
  lessonCode: string;
}

/**
 * WORKED EXAMPLES — STATIC TEACHER WHITEBOARD STYLE
 * - Clean white background
 * - Original example question at the top with textbook page verification
 * - Mathematical solution written vertically, one step per line
 * - Proper alignment of equations and equal signs
 * - Entire worked solution shown immediately (NO interactive step buttons or animations)
 * - Subtle highlight on the final answer
 */
export const WorkedExamplesWhiteboard: React.FC<WorkedExamplesWhiteboardProps> = ({
  examples,
  lessonCode,
}) => {
  return (
    <section
      aria-labelledby={`worked-examples-heading-${lessonCode}`}
      className="space-y-6"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h2
            id={`worked-examples-heading-${lessonCode}`}
            className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight"
          >
            2. Worked Examples
          </h2>
          <p className="text-sm text-[#475569] mt-0.5">
            Complete classroom whiteboard solutions from Cambridge Lower Secondary Mathematics Learner’s Book 9.
          </p>
        </div>
        <span className="text-xs font-medium text-[#64748B] tabular-nums">
          Authorised Source Reproduction · Subsection {lessonCode}
        </span>
      </div>

      <div className="space-y-6">
        {examples.map((ex) => (
          <article
            key={ex.id}
            className="bg-white border border-[#CBD5E1] rounded-xl shadow-xs overflow-hidden"
          >
            {/* Whiteboard Top Header Bar */}
            <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#0F172A] tracking-tight">
                  {ex.id}
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="text-xs font-medium text-[#475569]">
                  Teacher Whiteboard Solution
                </span>
              </div>
              <div className="text-xs font-mono text-[#475569] tabular-nums">
                Learner’s Book 9 · Page {ex.page}
              </div>
            </div>

            {/* Whiteboard Body — Pure White Surface */}
            <div className="bg-white p-6 sm:p-8 space-y-6">
              {/* Top Question Prompt */}
              <div className="pb-5 border-b border-slate-200/80">
                <div className="text-xs font-semibold text-slate-500 mb-1.5">
                  Question
                </div>
                <p className="text-base sm:text-lg font-medium text-[#0F172A] leading-relaxed">
                  <MathText text={ex.prompt} />
                </p>

                {ex.diagramType && <WhiteboardDiagram type={ex.diagramType} />}

                {ex.parts.length > 1 && (
                  <div className="mt-3 space-y-2">
                    {ex.parts.map((part, pIdx) => (
                      <div key={pIdx} className="flex items-baseline gap-2.5 text-sm sm:text-base text-[#1E293B]">
                        {part.label && (
                          <span className="font-bold text-[#0F172A] min-w-[1.5rem]">{part.label}</span>
                        )}
                        <MathText text={part.question} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Teacher's Vertical Board Work — Static, Complete, Immediate */}
              <div className="space-y-6">
                <div className="text-xs font-semibold text-slate-500">
                  Whiteboard Solution
                </div>

                {ex.parts.map((part, pIdx) => (
                  <div
                    key={pIdx}
                    className="pl-2 sm:pl-4 py-1 space-y-3"
                  >
                    {part.label && (
                      <div className="flex items-baseline gap-2 text-sm font-bold text-[#0F172A]">
                        <span>Part ({part.label})</span>
                        {ex.parts.length === 1 && part.question && (
                          <span className="font-normal text-slate-600">
                            — <MathText text={part.question} />
                          </span>
                        )}
                      </div>
                    )}

                    {/* Vertically aligned mathematical steps, one step per line */}
                    <div className="space-y-2.5 pl-2 sm:pl-4">
                      {part.steps.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6 items-baseline py-1"
                        >
                          <div className="lg:col-span-7 text-base sm:text-[17px] text-[#0F172A] leading-relaxed font-normal overflow-x-auto">
                            {step.latex ? (
                              <MathText text={`$${step.latex}$`} />
                            ) : (
                              <MathText text={step.text || ''} />
                            )}
                          </div>
                          {step.note && (
                            <div className="lg:col-span-5 text-xs sm:text-sm text-[#475569] italic leading-snug">
                              <MathText text={step.note} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Subtle Highlight on Final Answer */}
                    <div className="mt-3 pl-2 sm:pl-4">
                      <div className="inline-flex items-baseline gap-2.5 px-4 py-2 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] text-[#0C4A6E]">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#0369A1]">
                          Answer{part.label ? ` (${part.label})` : ''}:
                        </span>
                        <span className="text-base font-semibold">
                          <MathText text={part.finalAnswer} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
