import React, { useState } from 'react';
import { WorkedExampleItem } from '../types/curriculum';
import { Info } from 'lucide-react';

interface InteractiveDiagramProps {
  type?: WorkedExampleItem['diagramType'];
}

export const InteractiveDiagram: React.FC<InteractiveDiagramProps> = ({ type }) => {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  if (!type) return null;

  const renderContent = () => {
    switch (type) {
      case 'rect-2-2':
        return (
          <div className="flex flex-col items-center">
            <svg
              width="260"
              height="125"
              viewBox="0 0 260 125"
              className="text-slate-800 select-none cursor-pointer"
            >
              <rect
                x="30"
                y="20"
                width="140"
                height="55"
                fill={activeElement === 'area' ? '#93C5FD' : '#BFDBFE'}
                fillOpacity={activeElement === 'area' ? 0.75 : 0.45}
                stroke="#1E293B"
                strokeWidth="2"
                className="transition-all duration-200 hover:fill-blue-300"
                onMouseEnter={() => setActiveElement('area')}
                onMouseLeave={() => setActiveElement(null)}
                onClick={() =>
                  setActiveElement((prev) => (prev === 'area' ? null : 'area'))
                }
              />
              <text
                x="100"
                y="52"
                textAnchor="middle"
                className="text-xs font-mono font-bold fill-slate-700 pointer-events-none"
              >
                Area = x²(3x + 4)
              </text>
              <text
                x="100"
                y="98"
                textAnchor="middle"
                className={`text-xs font-mono font-bold transition-all ${
                  activeElement === 'width' ? 'fill-sky-600 font-extrabold text-sm' : 'fill-slate-900'
                }`}
                onMouseEnter={() => setActiveElement('width')}
                onMouseLeave={() => setActiveElement(null)}
                onClick={() =>
                  setActiveElement((prev) => (prev === 'width' ? null : 'width'))
                }
              >
                3x + 4
              </text>
              <text
                x="195"
                y="52"
                textAnchor="start"
                className={`text-xs font-mono font-bold transition-all ${
                  activeElement === 'height' ? 'fill-sky-600 font-extrabold text-sm' : 'fill-slate-900'
                }`}
                onMouseEnter={() => setActiveElement('height')}
                onMouseLeave={() => setActiveElement(null)}
                onClick={() =>
                  setActiveElement((prev) => (prev === 'height' ? null : 'height'))
                }
              >
                x²
              </text>
              <line
                x1="180"
                y1="20"
                x2="180"
                y2="75"
                stroke={activeElement === 'height' ? '#0284C7' : '#475569'}
                strokeWidth={activeElement === 'height' ? 2.5 : 1}
                strokeDasharray="3 2"
              />
            </svg>
            <div className="mt-2 text-xs text-slate-600 bg-slate-100/90 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>
                {activeElement === 'area'
                  ? 'Area expression: expanding gives 3x³ + 4x²'
                  : activeElement === 'width'
                  ? 'Length of base: (3x + 4) units'
                  : activeElement === 'height'
                  ? 'Height: x² units'
                  : 'Hover or tap parts of the rectangle to inspect terms'}
              </span>
            </div>
          </div>
        );

      case 'triangle-4-3':
        return (
          <div className="flex flex-col items-center">
            <svg
              width="280"
              height="130"
              viewBox="0 0 280 130"
              className="select-none cursor-pointer"
            >
              <polygon
                points="30,90 110,25 240,95"
                fill={activeElement === 'perimeter' ? '#E0F2FE' : '#F1F5F9'}
                stroke="#0F172A"
                strokeWidth="2"
                className="transition-colors hover:fill-sky-50"
                onMouseEnter={() => setActiveElement('perimeter')}
                onMouseLeave={() => setActiveElement(null)}
                onClick={() =>
                  setActiveElement((prev) => (prev === 'perimeter' ? null : 'perimeter'))
                }
              />
              <text
                x="55"
                y="52"
                className={`text-xs font-mono font-bold transition-all ${
                  activeElement === 'side1' ? 'fill-sky-600 text-sm' : 'fill-slate-900'
                }`}
                onMouseEnter={() => setActiveElement('side1')}
                onMouseLeave={() => setActiveElement(null)}
                onClick={() => setActiveElement((p) => (p === 'side1' ? null : 'side1'))}
              >
                x cm
              </text>
              <text
                x="180"
                y="55"
                className={`text-xs font-mono font-bold transition-all ${
                  activeElement === 'side2' ? 'fill-sky-600 text-sm' : 'fill-slate-900'
                }`}
                onMouseEnter={() => setActiveElement('side2')}
                onMouseLeave={() => setActiveElement(null)}
                onClick={() => setActiveElement((p) => (p === 'side2' ? null : 'side2'))}
              >
                x + 2 cm
              </text>
              <text
                x="130"
                y="114"
                className={`text-xs font-mono font-bold transition-all ${
                  activeElement === 'base' ? 'fill-sky-600 text-sm' : 'fill-slate-900'
                }`}
                onMouseEnter={() => setActiveElement('base')}
                onMouseLeave={() => setActiveElement(null)}
                onClick={() => setActiveElement((p) => (p === 'base' ? null : 'base'))}
              >
                x + 3 cm
              </text>
            </svg>
            <div className="mt-2 text-xs text-slate-600 bg-slate-100/90 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>
                {activeElement === 'side1'
                  ? 'Side 1: x cm'
                  : activeElement === 'side2'
                  ? 'Side 2: (x + 2) cm'
                  : activeElement === 'base'
                  ? 'Side 3 (base): (x + 3) cm'
                  : activeElement === 'perimeter'
                  ? 'Perimeter = x + (x + 2) + (x + 3) = 3x + 5'
                  : 'Hover sides to inspect expressions'}
              </span>
            </div>
          </div>
        );

      case 'parallel-5-1':
        return (
          <div className="flex flex-col items-center">
            <svg
              width="260"
              height="200"
              viewBox="0 0 260 200"
              className="select-none cursor-pointer"
            >
              {/* Parallel vertical lines AD and EF */}
              <line
                x1="45"
                y1="20"
                x2="45"
                y2="185"
                stroke={activeElement === 'parallel' ? '#0284C7' : '#0F172A'}
                strokeWidth={activeElement === 'parallel' ? 3 : 2}
              />
              <line
                x1="175"
                y1="15"
                x2="175"
                y2="185"
                stroke={activeElement === 'parallel' ? '#0284C7' : '#0F172A'}
                strokeWidth={activeElement === 'parallel' ? 3 : 2}
              />
              {/* Parallel arrows */}
              <polygon points="45,95 40,105 50,105" fill="#0284C7" />
              <polygon points="175,95 170,105 180,105" fill="#0284C7" />

              {/* Polygon ABCD */}
              <polyline
                points="45,35 125,50 175,105 45,150"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <text x="28" y="38" className="text-xs font-bold fill-slate-900">A</text>
              <text x="125" y="42" className="text-xs font-bold fill-slate-900">B</text>
              <text x="183" y="108" className="text-xs font-bold fill-slate-900">C</text>
              <text x="28" y="154" className="text-xs font-bold fill-slate-900">D</text>
              <text x="183" y="25" className="text-xs font-bold fill-slate-900">E</text>
              <text x="183" y="182" className="text-xs font-bold fill-slate-900">F</text>

              <text
                x="52"
                y="55"
                className="text-[11px] font-mono fill-slate-800 hover:fill-sky-600 font-bold"
                onMouseEnter={() => setActiveElement('80')}
                onMouseLeave={() => setActiveElement(null)}
              >
                80°
              </text>
              <text
                x="105"
                y="68"
                className="text-[11px] font-mono fill-slate-800 hover:fill-sky-600 font-bold"
                onMouseEnter={() => setActiveElement('134')}
                onMouseLeave={() => setActiveElement(null)}
              >
                134°
              </text>
              <text
                x="156"
                y="85"
                className="text-xs font-mono font-extrabold fill-sky-700 bg-sky-100 hover:fill-sky-900"
                onMouseEnter={() => setActiveElement('y')}
                onMouseLeave={() => setActiveElement(null)}
              >
                y°
              </text>
              <text
                x="52"
                y="136"
                className="text-xs font-mono font-extrabold fill-sky-700 hover:fill-sky-900"
                onMouseEnter={() => setActiveElement('x')}
                onMouseLeave={() => setActiveElement(null)}
              >
                x°
              </text>
              <text
                x="50"
                y="168"
                className="text-[11px] font-mono fill-slate-800 hover:fill-sky-600 font-bold"
                onMouseEnter={() => setActiveElement('118')}
                onMouseLeave={() => setActiveElement(null)}
              >
                118°
              </text>
            </svg>
            <div className="mt-2 text-xs text-slate-600 bg-slate-100/90 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>
                {activeElement === 'x'
                  ? 'Angle x°: Co-interior angles between parallel lines add to 180°'
                  : activeElement === 'y'
                  ? 'Angle y°: Alternate angles or interior angle sum calculation'
                  : activeElement === '118'
                  ? 'Angle 118°: Supplementary or co-interior angle'
                  : 'Hover angles or parallel lines AD ∥ EF'}
              </span>
            </div>
          </div>
        );

      case 'inscribe-square-5-3':
        return (
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6">
              <svg width="120" height="120" viewBox="0 0 120 120" className="cursor-pointer">
                <circle
                  cx="60"
                  cy="60"
                  r="45"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="1.75"
                />
                <line
                  x1="15"
                  y1="60"
                  x2="105"
                  y2="60"
                  stroke={activeElement === 'diameter' ? '#0284C7' : '#0F172A'}
                  strokeWidth={activeElement === 'diameter' ? 2.5 : 1.5}
                />
                <line
                  x1="60"
                  y1="15"
                  x2="60"
                  y2="105"
                  stroke="#0284C7"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />
                <polygon
                  points="60,15 105,60 60,105 15,60"
                  fill={activeElement === 'square' ? '#BAE6FD' : '#E0F2FE'}
                  fillOpacity="0.5"
                  stroke="#0F172A"
                  strokeWidth="2"
                  className="transition-colors hover:fill-blue-200"
                  onMouseEnter={() => setActiveElement('square')}
                  onMouseLeave={() => setActiveElement(null)}
                />
              </svg>
              <div className="text-xs text-slate-600 max-w-[200px] space-y-1">
                <div className="font-semibold text-slate-800">Inscribed Square Construction</div>
                <div>Perpendicular bisector of the diameter creates 4 equidistant vertices on the circle circumference.</div>
              </div>
            </div>
          </div>
        );

      case 'pythagoras-rect-5-6':
        return (
          <div className="flex flex-col items-center">
            <svg
              width="260"
              height="155"
              viewBox="0 0 260 155"
              className="select-none cursor-pointer"
            >
              <rect
                x="45"
                y="20"
                width="160"
                height="100"
                fill="#F8FAFC"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <line
                x1="45"
                y1="20"
                x2="205"
                y2="120"
                stroke={activeElement === 'diag' ? '#0369A1' : '#0284C7'}
                strokeWidth={activeElement === 'diag' ? 3.5 : 2.5}
                className="transition-all"
                onMouseEnter={() => setActiveElement('diag')}
                onMouseLeave={() => setActiveElement(null)}
              />
              <text x="32" y="24" className="text-xs font-bold fill-slate-900">A</text>
              <text x="210" y="24" className="text-xs font-bold fill-slate-900">B</text>
              <text x="210" y="125" className="text-xs font-bold fill-slate-900">C</text>
              <text x="32" y="125" className="text-xs font-bold fill-slate-900">D</text>

              <text
                x="6"
                y="75"
                className={`text-xs font-mono font-bold transition-all ${
                  activeElement === 'height' ? 'fill-sky-600 text-sm' : 'fill-slate-800'
                }`}
                onMouseEnter={() => setActiveElement('height')}
                onMouseLeave={() => setActiveElement(null)}
              >
                7.5 cm
              </text>
              <text
                x="125"
                y="140"
                textAnchor="middle"
                className={`text-xs font-mono font-bold transition-all ${
                  activeElement === 'base' ? 'fill-sky-600 text-sm' : 'fill-slate-800'
                }`}
                onMouseEnter={() => setActiveElement('base')}
                onMouseLeave={() => setActiveElement(null)}
              >
                11.3 cm
              </text>
              <text
                x="135"
                y="65"
                className="text-xs font-mono font-extrabold fill-sky-700"
              >
                AC (diag)
              </text>
            </svg>
            <div className="mt-2 text-xs text-slate-600 bg-slate-100/90 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>
                {activeElement === 'diag'
                  ? 'Diagonal AC = √(11.3² + 7.5²) by Pythagoras’ Theorem'
                  : activeElement === 'base'
                  ? 'Base BC = 11.3 cm'
                  : activeElement === 'height'
                  ? 'Height AB = 7.5 cm'
                  : 'Hover sides or diagonal AC to inspect Pythagoras values'}
              </span>
            </div>
          </div>
        );

      case 'compound-7-2':
        return (
          <div className="flex flex-col items-center">
            <svg
              width="200"
              height="125"
              viewBox="0 0 200 125"
              className="select-none cursor-pointer"
            >
              <path
                d="M 45 60 A 55 55 0 0 1 155 60 Z"
                fill={activeElement === 'B' ? '#FDBA74' : '#FED7AA'}
                fillOpacity="0.75"
                stroke="#0F172A"
                strokeWidth="1.75"
                className="transition-colors hover:fill-orange-300"
                onMouseEnter={() => setActiveElement('B')}
                onMouseLeave={() => setActiveElement(null)}
              />
              <rect
                x="45"
                y="60"
                width="110"
                height="35"
                fill={activeElement === 'A' ? '#FB923C' : '#FDBA74'}
                fillOpacity="0.75"
                stroke="#0F172A"
                strokeWidth="1.75"
                className="transition-colors hover:fill-orange-400"
                onMouseEnter={() => setActiveElement('A')}
                onMouseLeave={() => setActiveElement(null)}
              />
              <text x="100" y="45" textAnchor="middle" className="text-xs font-bold fill-slate-900">
                B (Semicircle)
              </text>
              <text x="100" y="82" textAnchor="middle" className="text-xs font-bold fill-slate-900">
                A (Rectangle)
              </text>
              <text x="100" y="115" textAnchor="middle" className="text-xs font-mono font-bold fill-slate-900">
                9 cm (diameter)
              </text>
              <text x="35" y="80" textAnchor="end" className="text-xs font-mono font-bold fill-slate-900">
                3 cm
              </text>
            </svg>
            <div className="mt-2 text-xs text-slate-600 bg-slate-100/90 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>
                {activeElement === 'B'
                  ? 'Semicircle B: Area = 0.5 × π × (4.5)² ≈ 31.8 cm²'
                  : activeElement === 'A'
                  ? 'Rectangle A: Area = 9 × 3 = 27 cm²'
                  : 'Hover Region A or Region B to inspect compound areas'}
              </span>
            </div>
          </div>
        );

      case 'prism-14-1':
        return (
          <div className="flex flex-col items-center">
            <svg
              width="250"
              height="125"
              viewBox="0 0 250 125"
              className="select-none cursor-pointer"
            >
              <polygon
                points="25,90 60,35 115,90"
                fill={activeElement === 'face' ? '#FBBF24' : '#FDE68A'}
                fillOpacity="0.75"
                stroke="#0F172A"
                strokeWidth="2"
                onMouseEnter={() => setActiveElement('face')}
                onMouseLeave={() => setActiveElement(null)}
              />
              <polyline
                points="60,35 160,15 215,70 115,90"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <line
                x1="25"
                y1="90"
                x2="125"
                y2="70"
                stroke="#64748B"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <text x="70" y="110" textAnchor="middle" className="text-xs font-mono font-bold fill-slate-900">
                Cross-section Area = 12 cm²
              </text>
              <text
                x="180"
                y="95"
                className={`text-xs font-mono font-bold transition-all ${
                  activeElement === 'length' ? 'fill-sky-600 text-sm' : 'fill-slate-900'
                }`}
                onMouseEnter={() => setActiveElement('length')}
                onMouseLeave={() => setActiveElement(null)}
              >
                5 cm (length)
              </text>
            </svg>
            <div className="mt-2 text-xs text-slate-600 bg-slate-100/90 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>
                {activeElement === 'face'
                  ? 'Cross-sectional area = 12 cm²'
                  : activeElement === 'length'
                  ? 'Prism length = 5 cm'
                  : 'Volume of prism = Cross-sectional area × length = 12 × 5 = 60 cm³'}
              </span>
            </div>
          </div>
        );

      case 'cylinder-net-14-2':
        return (
          <div className="flex flex-col items-center">
            <svg
              width="260"
              height="145"
              viewBox="0 0 260 145"
              className="select-none cursor-pointer"
            >
              <circle
                cx="75"
                cy="26"
                r="18"
                fill={activeElement === 'circle' ? '#CBD5E1' : '#E2E8F0'}
                stroke="#0F172A"
                strokeWidth="1.75"
                onMouseEnter={() => setActiveElement('circle')}
                onMouseLeave={() => setActiveElement(null)}
              />
              <rect
                x="40"
                y="46"
                width="125"
                height="50"
                fill={activeElement === 'rect' ? '#E2E8F0' : '#F1F5F9'}
                stroke="#0F172A"
                strokeWidth="1.75"
                onMouseEnter={() => setActiveElement('rect')}
                onMouseLeave={() => setActiveElement(null)}
              />
              <circle
                cx="75"
                cy="118"
                r="18"
                fill={activeElement === 'circle' ? '#CBD5E1' : '#E2E8F0'}
                stroke="#0F172A"
                strokeWidth="1.75"
                onMouseEnter={() => setActiveElement('circle')}
                onMouseLeave={() => setActiveElement(null)}
              />
              <text x="105" y="28" className="text-xs font-mono font-bold fill-slate-800">
                r = 3 cm
              </text>
              <text x="175" y="75" className="text-xs font-mono font-bold fill-slate-800">
                h = 8 cm
              </text>
            </svg>
            <div className="mt-2 text-xs text-slate-600 bg-slate-100/90 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>
                {activeElement === 'circle'
                  ? 'Two circular bases: Area each = π × 3² = 9π cm²'
                  : activeElement === 'rect'
                  ? 'Curved surface net: width = 2πr = 6π cm, height = 8 cm'
                  : 'Hover circular bases or curved surface rectangle'}
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const content = renderContent();
  if (!content) return null;

  return (
    <div className="my-4 p-4 sm:p-5 bg-slate-50/80 border border-slate-200/90 rounded-xl inline-block shadow-2xs">
      {content}
    </div>
  );
};
