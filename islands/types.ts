
export interface Lesson {
  id: number;
  title: string;
  videoId: string;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
}
