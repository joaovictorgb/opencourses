
import { Lesson, Module } from "../islands/types.ts";

interface CourseContentProps {
  modules: Module[];
  onLessonClick: (lesson: Lesson) => void;
}

export default function CourseContent({ modules, onLessonClick }: CourseContentProps) {
  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-green-600">Course Content</h2>
      {modules.map((module) => (
        <div key={module.id} class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800">{module.title}</h3>
          <ul class="list-disc list-inside ml-4">
            {module.lessons.map((lesson) => (
              <li
                key={lesson.id}
                class="text-gray-700 cursor-pointer hover:underline"
                onClick={() => onLessonClick(lesson)}
              >
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
