import { ChapterData, LessonData } from '../types/curriculum';
import { CHAPTERS_1_TO_5 } from './chapters1to5';
import { CHAPTERS_6_TO_10 } from './chapters6to10';
import { CHAPTERS_11_TO_15 } from './chapters11to15';

export const ALL_CHAPTERS: ChapterData[] = [
  ...CHAPTERS_1_TO_5,
  ...CHAPTERS_6_TO_10,
  ...CHAPTERS_11_TO_15,
];

export const ALL_LESSONS: LessonData[] = ALL_CHAPTERS.flatMap((ch) => ch.lessons);

export function getLessonById(lessonId: string): LessonData {
  return ALL_LESSONS.find((l) => l.id === lessonId) || ALL_LESSONS[0];
}

export function getChapterById(chapterId: number): ChapterData {
  return ALL_CHAPTERS.find((c) => c.id === chapterId) || ALL_CHAPTERS[0];
}
