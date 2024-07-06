
import { Head } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";
import Navbar from "../islands/Navbar.tsx";
import CourseOverview from "../islands/CourseOverview.tsx";
import VideoPlayer from "../islands/VideoPlayer.tsx";
import CourseContent from "../islands/CourseContent.tsx";
import InstructorInfo from "../islands/InstructorInfo.tsx";
import StudentReviews from "../islands/StudentReviews.tsx";
import DiscussionForum from "../islands/DiscussionForum.tsx";
import Resources from "../islands/Resources.tsx";
import Footer from "../islands/Footer.tsx";
import { Lesson, Module } from "../islands/types.ts";

const courseModules: Module[] = [
  {
    id: 1, title: "Module 1: Introduction", lessons: [
      { id: 1, title: "Lesson 1.1: Welcome", videoId: "dQw4w9WgXcQ" },
      { id: 2, title: "Lesson 1.2: Course Overview", videoId: "tgbNymZ7vqY" }
    ]
  },
  {
    id: 2, title: "Module 2: Basics", lessons: [
      { id: 3, title: "Lesson 2.1: Basic Concepts", videoId: "3JZ_D3ELwOQ" },
      { id: 4, title: "Lesson 2.2: Practical Examples", videoId: "lY2yjAdbvdQ" }
    ]
  },
  {
    id: 3, title: "Module 3: Advanced Topics", lessons: [
      { id: 5, title: "Lesson 3.1: Deep Dive", videoId: "2Vv-BfVoq4g" },
      { id: 6, title: "Lesson 3.2: Case Studies", videoId: "OpQFFLBMEPI" }
    ]
  }
];

const currentLesson = signal<Lesson>(courseModules[0].lessons[0]);

export default function CoursePage() {
  const handleLessonClick = (lesson: Lesson) => {
    currentLesson.value = lesson;
  };

  const handleNextLesson = () => {
    const allLessons = courseModules.flatMap(module => module.lessons);
    const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLesson.value.id);
    if (currentIndex < allLessons.length - 1) {
      currentLesson.value = allLessons[currentIndex + 1];
    }
  };

  const handlePreviousLesson = () => {
    const allLessons = courseModules.flatMap(module => module.lessons);
    const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLesson.value.id);
    if (currentIndex > 0) {
      currentLesson.value = allLessons[currentIndex - 1];
    }
  };

  return (
    <>
      <Head>
        <title>Course Title - OpenCourses</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div class="bg-gray-50 min-h-screen text-gray-800 font-sans">
        <Navbar />
        <div class="pt-20 p-4 mx-auto max-w-screen-lg">
          <CourseOverview />
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
              <VideoPlayer 
                lesson={currentLesson.value} 
                onNextLesson={handleNextLesson}
                onPreviousLesson={handlePreviousLesson}
              />
              <CourseContent modules={courseModules} onLessonClick={handleLessonClick} />
              <DiscussionForum />
            </div>
            <div>
              <InstructorInfo />
              <StudentReviews />
              <Resources />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
