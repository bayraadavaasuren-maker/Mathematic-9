export interface KeyWordItem {
  term: string;
  definition: string;
}

export interface WhiteboardStep {
  latex?: string;
  text?: string;
  note?: string;
}

export interface WorkedExamplePart {
  label?: string; // e.g. 'a', 'b', 'i', 'ii'
  question: string;
  steps: WhiteboardStep[];
  finalAnswer: string;
}

export interface WorkedExampleItem {
  id: string; // e.g., "Worked example 1.1"
  page: number; // Original textbook page number
  prompt: string; // Top prompt e.g. "Do not use a calculator for this question."
  diagramType?:
    | 'rect-2-2'
    | 'Compound-2-6'
    | 'triangle-4-3'
    | 'parallel-5-1'
    | 'polygon-5-2'
    | 'inscribe-square-5-3'
    | 'angle-45-5-4'
    | 'angle-60-5-5'
    | 'pythagoras-rect-5-6'
    | 'pythagoras-tri-5-7'
    | 'hand-span-6-1'
    | 'circle-area-7-1'
    | 'compound-7-2'
    | 'func-machine-9-3'
    | 'graph-line-10-2'
    | 'graph-quad-10-3'
    | 'graph-cooling-10-5'
    | 'spinners-12-3'
    | 'relative-freq-12-4'
    | 'bearing-13-1'
    | 'line-seg-13-2'
    | 'transform-13-3'
    | 'enlarge-13-4'
    | 'prism-14-1'
    | 'cylinder-net-14-2'
    | 'cuboid-planes-14-3'
    | 'freq-poly-15-1'
    | 'scatter-15-2'
    | 'stem-leaf-15-3';
  parts: WorkedExamplePart[];
}

export interface PracticeQuestion {
  id: string;
  number: number;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  sourceRef: string; // e.g. "Learner's Book Ex 1.1 / Workbook Focus"
}

export interface ErrorAnalysisItem {
  id: string;
  studentName: string;
  workbookSource: string; // e.g. "Workbook 9 Ex 2.1 Q6 — Malik's Homework"
  questionPrompt: string;
  studentWorkLatex: string[];
  options: string[];
  correctOptionIndex: number;
  correctedSolutionLatex: string[];
  explanation: string;
}

export interface CheckpointQuestion {
  id: string;
  paperRef: string; // e.g. "0862/01 Non-Calculator Style" or "0862/02 Calculator Style"
  marks: number;
  prompt: string;
  correctAnswer: string;
  acceptableAnswers: string[];
  markSchemeSteps: string[];
}

export interface LessonData {
  id: string; // e.g., "1.1"
  chapterId: number;
  code: string; // e.g., "1.1"
  title: string; // e.g., "Irrational numbers"
  strand: 'Number' | 'Algebra' | 'Geometry and measure' | 'Statistics and probability';
  textbookPages: string; // e.g. "pp. 10–13"
  workbookPages: string; // e.g. "pp. 7–8"
  learningObjectives: string[];
  keyWords: KeyWordItem[];
  workedExamples: WorkedExampleItem[];
  errorAnalysis: ErrorAnalysisItem;
  reflectionPrompts: string[];
  checkpointQuestions: CheckpointQuestion[];
}

export interface ChapterData {
  id: number;
  title: string;
  strand: 'Number' | 'Algebra' | 'Geometry and measure' | 'Statistics and probability';
  pages: string;
  lessons: LessonData[];
}
