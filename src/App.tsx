import React, { useState, useMemo } from 'react';
import {
  ALL_CHAPTERS,
  ALL_LESSONS,
  getLessonById,
} from './data/curriculumIndex';
import { KeyWordsPanel } from './components/KeyWordsPanel';
import { WorkedExamplesWhiteboard } from './components/WorkedExamplesWhiteboard';
import { DifferentiatedPracticeSection } from './components/DifferentiatedPracticeSection';
import { ErrorAnalysisSection } from './components/ErrorAnalysisSection';
import { LessonReflectionSection } from './components/LessonReflectionSection';
import { CheckpointPracticeSection } from './components/CheckpointPracticeSection';
import { MathText } from './components/MathText';
import {
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Search,
  Menu,
  X,
} from 'lucide-react';

export default function App() {
  const [selectedLessonId, setSelectedLessonId] = useState<string>('1.1');
  const [expandedChapters, setExpandedChapters] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
  });
  const [strandFilter, setStrandFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [showOverviewModal, setShowOverviewModal] = useState<boolean>(false);

  const currentLesson = useMemo(
    () => getLessonById(selectedLessonId),
    [selectedLessonId]
  );

  const currentLessonIndex = useMemo(
    () => ALL_LESSONS.findIndex((l) => l.id === selectedLessonId),
    [selectedLessonId]
  );

  const prevLesson =
    currentLessonIndex > 0 ? ALL_LESSONS[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex < ALL_LESSONS.length - 1
      ? ALL_LESSONS[currentLessonIndex + 1]
      : null;

  const selectLesson = (lessonId: string, chapterId: number) => {
    setSelectedLessonId(lessonId);
    setExpandedChapters((prev) => ({ ...prev, [chapterId]: true }));
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const filteredChapters = useMemo(() => {
    return ALL_CHAPTERS.filter((ch) => {
      if (strandFilter !== 'All' && ch.strand !== strandFilter) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      if (ch.title.toLowerCase().includes(q)) return true;
      return ch.lessons.some(
        (l) =>
          l.code.toLowerCase().includes(q) ||
          l.title.toLowerCase().includes(q) ||
          l.keyWords.some((kw) => kw.term.toLowerCase().includes(q))
      );
    });
  }, [strandFilter, searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-[#E2E8F0] px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base sm:text-lg font-extrabold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 font-display"
        >
          Cambridge Mathematics Stage 9
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Lesson Section Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#475569]"
        >
          <a
            href="#section-1-objectives"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('section-1-objectives');
            }}
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            1. Objectives
          </a>
          <a
            href="#section-2-examples"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('section-2-examples');
            }}
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            2. Examples
          </a>
          <a
            href="#section-3-practice"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('section-3-practice');
            }}
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            3. Practice
          </a>
          <a
            href="#section-4-error-analysis"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('section-4-error-analysis');
            }}
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            4. Error Analysis
          </a>
          <a
            href="#section-checkpoint"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('section-checkpoint');
            }}
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Checkpoint 0862
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setShowOverviewModal((prev) => !prev)}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            All 15 Chapters
          </button>
        </div>
      </header>

      {/* Mobile Chapter Drawer Trigger Bar */}
      <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMobileSidebarOpen(true)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F172A] py-1 px-2.5 rounded-md bg-[#F1F5F9] cursor-pointer"
        >
          <Menu className="w-4 h-4" />
          <span>
            Browse Chapters ({currentLesson.code} {currentLesson.title})
          </span>
        </button>
        <span className="text-xs text-[#64748B] tabular-nums">
          Lesson {currentLessonIndex + 1} of {ALL_LESSONS.length}
        </span>
      </div>

      {/* All 15 Chapters Quick Directory Modal */}
      {showOverviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#CBD5E1] rounded-2xl max-w-5xl w-full max-h-[85vh] flex flex-col shadow-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#0F172A]">
                  Complete Curriculum Index — All 15 Units & 50 Lessons
                </h2>
                <p className="text-xs text-[#475569]">
                  Cambridge Lower Secondary Mathematics Learner’s Book 9 & Workbook 9 (2nd Edition)
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowOverviewModal(false)}
                className="p-2 rounded-lg text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ALL_CHAPTERS.map((ch) => (
                <div
                  key={ch.id}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-sm font-bold text-[#0F172A]">
                      Unit {ch.id}: {ch.title}
                    </h3>
                    <span className="text-[11px] text-[#64748B] whitespace-nowrap">
                      {ch.pages}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#0284C7] font-medium">
                    Strand: {ch.strand}
                  </div>
                  <ul className="space-y-1 pt-1 border-t border-slate-200/70">
                    {ch.lessons.map((l) => (
                      <li key={l.id}>
                        <button
                          type="button"
                          onClick={() => {
                            selectLesson(l.id, ch.id);
                            setShowOverviewModal(false);
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between cursor-pointer ${
                            l.id === selectedLessonId
                              ? 'bg-[#0284C7] text-white font-semibold'
                              : 'text-[#334155] hover:bg-[#E2E8F0]/60'
                          }`}
                        >
                          <span className="truncate">
                            {l.code} {l.title}
                          </span>
                          <span className="text-[10px] opacity-75 ml-2 shrink-0">
                            {l.textbookPages}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Two-Column Desktop Workspace */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto flex items-start">
        {/* Left Sidebar Navigation — All 15 Chapters & 50 Lessons */}
        <aside
          aria-label="Chapters and Lessons Navigation"
          className={`${
            mobileSidebarOpen
              ? 'fixed inset-0 z-40 bg-white w-80 p-4 overflow-y-auto shadow-2xl'
              : 'hidden lg:block w-80 shrink-0 sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto border-r border-[#E2E8F0] bg-white p-4'
          }`}
        >
          {mobileSidebarOpen && (
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2E8F0]">
              <span className="text-sm font-bold text-[#0F172A]">
                All 15 Units
              </span>
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1.5 rounded-lg text-[#475569] hover:bg-[#F1F5F9]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Search & Strand Filter */}
          <div className="space-y-3 mb-4">
            <div className="relative">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 50 lessons or key words..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:outline-2 focus:outline-[#0284C7]"
              />
            </div>

            {/* Interactive Strand Filter Controls */}
            <div className="grid grid-cols-2 gap-1 p-1 bg-[#F1F5F9] rounded-lg">
              {['All', 'Number', 'Algebra', 'Geometry and measure', 'Statistics and probability'].map(
                (st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStrandFilter(st)}
                    className={`px-2 py-1 text-[11px] font-medium rounded transition-colors truncate cursor-pointer ${
                      strandFilter === st
                        ? 'bg-white text-[#0F172A] shadow-2xs font-semibold'
                        : 'text-[#475569] hover:text-[#0F172A]'
                    } ${st === 'Statistics and probability' ? 'col-span-2' : ''}`}
                  >
                    {st}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Chapter Tree */}
          <div className="space-y-2">
            {filteredChapters.map((chapter) => {
              const isExpanded =
                !!expandedChapters[chapter.id] || searchQuery.trim().length > 0;
              const hasActiveLesson = chapter.lessons.some(
                (l) => l.id === selectedLessonId
              );

              return (
                <div
                  key={chapter.id}
                  className={`rounded-lg border transition-colors ${
                    hasActiveLesson
                      ? 'border-[#BAE6FD] bg-[#F0F9FF]/40'
                      : 'border-[#E2E8F0] bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full px-3 py-2.5 flex items-center justify-between gap-2 text-left cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0F172A] truncate">
                        {chapter.id}. {chapter.title}
                      </div>
                      <div className="text-[11px] text-[#64748B]">
                        {chapter.strand} · {chapter.pages}
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform duration-150 ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <ul className="px-2 pb-2 space-y-1 border-t border-[#E2E8F0]/60 pt-1.5">
                      {chapter.lessons.map((lesson) => {
                        const isSelected = lesson.id === selectedLessonId;
                        return (
                          <li key={lesson.id}>
                            <button
                              type="button"
                              onClick={() => selectLesson(lesson.id, chapter.id)}
                              className={`w-full px-2.5 py-2 rounded-md text-left text-xs transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#0284C7] text-white font-semibold shadow-2xs'
                                  : 'text-[#334155] hover:bg-[#F1F5F9]'
                              }`}
                            >
                              <span className="truncate">
                                <span className="font-mono mr-1.5">{lesson.code}</span>
                                {lesson.title}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right Main Lesson Content Area */}
        <main id="top" className="flex-1 min-w-0 p-4 sm:p-8 lg:p-10 space-y-8">
          {/* Lesson Header Banner — Zero-Pill Metadata Discipline */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] font-medium">
              <span>Unit {currentLesson.chapterId}</span>
              <span aria-hidden="true">·</span>
              <span>{currentLesson.strand}</span>
              <span aria-hidden="true">·</span>
              <span>Learner’s Book 9 ({currentLesson.textbookPages})</span>
              <span aria-hidden="true">·</span>
              <span>Workbook 9 ({currentLesson.workbookPages})</span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight text-balance">
                {currentLesson.code} {currentLesson.title}
              </h1>

              {/* Prev / Next Lesson Quick Switcher */}
              <div className="flex items-center gap-2 shrink-0">
                {prevLesson && (
                  <button
                    type="button"
                    onClick={() =>
                      selectLesson(prevLesson.id, prevLesson.chapterId)
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#334155] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Prev ({prevLesson.code})</span>
                  </button>
                )}
                {nextLesson && (
                  <button
                    type="button"
                    onClick={() =>
                      selectLesson(nextLesson.id, nextLesson.chapterId)
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#334155] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Next ({nextLesson.code})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* =================================================================
              SECTION 1: 1. Learning Objectives (with Key Words inside Section 1)
             ================================================================= */}
          <section
            id="section-1-objectives"
            aria-labelledby={`objectives-heading-${currentLesson.code}`}
            className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 shadow-xs space-y-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#0284C7] shrink-0" />
                <h2
                  id={`objectives-heading-${currentLesson.code}`}
                  className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight"
                >
                  1. Learning Objectives
                </h2>
              </div>
              <span className="text-xs text-[#64748B]">
                In this section you will …
              </span>
            </div>

            <ul className="space-y-2.5 pl-1">
              {currentLesson.learningObjectives.map((obj, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#1E293B] leading-relaxed"
                >
                  <span className="font-mono text-xs font-bold text-[#0284C7] mt-1">
                    {idx + 1}.
                  </span>
                  <span>
                    <MathText text={obj} />
                  </span>
                </li>
              ))}
            </ul>

            {/* Key Words included within Section 1 (not as a separate numbered section) */}
            <KeyWordsPanel
              keyWords={currentLesson.keyWords}
              lessonCode={currentLesson.code}
            />
          </section>

          {/* =================================================================
              SECTION 2: 2. Worked Examples (Static Teacher Whiteboard Style)
             ================================================================= */}
          <div id="section-2-examples">
            <WorkedExamplesWhiteboard
              examples={currentLesson.workedExamples}
              lessonCode={currentLesson.code}
            />
          </div>

          {/* =================================================================
              SECTION 3: 3. Differentiated Practice (Level 1, 2, 3 Subsections)
             ================================================================= */}
          <div id="section-3-practice">
            <DifferentiatedPracticeSection lessonCode={currentLesson.code} />
          </div>

          {/* =================================================================
              SECTION 4: 4. Error Analysis (Workbook-Based)
             ================================================================= */}
          <div id="section-4-error-analysis">
            <ErrorAnalysisSection
              item={currentLesson.errorAnalysis}
              lessonCode={currentLesson.code}
            />
          </div>

          {/* =================================================================
              SECTION 5: 5. Lesson Reflection (Mathematical Formula Editor)
             ================================================================= */}
          <div id="section-5-reflection">
            <LessonReflectionSection
              lessonCode={currentLesson.code}
              lessonTitle={currentLesson.title}
              prompts={currentLesson.reflectionPrompts}
            />
          </div>

          {/* =================================================================
              UNNUMBERED: Checkpoint 0862 Practice (Displayed after Section 5)
             ================================================================= */}
          <div id="section-checkpoint">
            <CheckpointPracticeSection
              questions={currentLesson.checkpointQuestions}
              lessonCode={currentLesson.code}
            />
          </div>

          {/* Bottom Lesson Navigation Footer */}
          <footer className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#64748B]">
            <div>
              Cambridge Lower Secondary Mathematics Stage 9 · Learner’s Book 9 & Workbook 9 (Byrd, Byrd & Pearce)
            </div>
            <div className="flex items-center gap-3">
              {prevLesson && (
                <button
                  type="button"
                  onClick={() =>
                    selectLesson(prevLesson.id, prevLesson.chapterId)
                  }
                  className="font-semibold text-[#0284C7] hover:underline cursor-pointer"
                >
                  ← {prevLesson.code} {prevLesson.title}
                </button>
              )}
              {nextLesson && (
                <button
                  type="button"
                  onClick={() =>
                    selectLesson(nextLesson.id, nextLesson.chapterId)
                  }
                  className="font-semibold text-[#0284C7] hover:underline cursor-pointer"
                >
                  {nextLesson.code} {nextLesson.title} →
                </button>
              )}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
