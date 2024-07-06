
import { Head } from "$fresh/runtime.ts";
import Navbar from "../islands/Navbar.tsx";
import FeaturedCourse from "../islands/FeaturedCourse.tsx";
import PopularCourses from "../islands/PopularCourses.tsx";

export default function InitialPageCourse() {
  return (
    <>
      <Head>
        <title>Curso Online</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div class="bg-gray-50 min-h-screen text-gray-800 font-sans">
        <Navbar />
        <div class="pt-20 p-4 mx-auto max-w-screen-lg">
          <FeaturedCourse />
          <PopularCourses />
        </div>
      </div>
    </>
  );
}
