
import { useComputed } from "@preact/signals";
import { Lesson } from "../islands/types.ts";

interface VideoPlayerProps {
  lesson: Lesson;
  onNextLesson: () => void;
  onPreviousLesson: () => void;
}

export default function VideoPlayer({ lesson, onNextLesson, onPreviousLesson }: VideoPlayerProps) {
  const computedVideoId = useComputed(() => lesson.videoId);
  const computedLessonTitle = useComputed(() => lesson.title);

  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-green-600">Lesson: {computedLessonTitle}</h2>
      <div class="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          class="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${computedVideoId}`}
          title="Video Player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex justify-between">
        <button 
          class="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition" 
          onClick={onPreviousLesson}
        >
          Previous Lesson
        </button>
        <button 
          class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition" 
          onClick={onNextLesson}
        >
          Next Lesson
        </button>
      </div>
    </div>
  );
}
