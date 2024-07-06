
import { Head } from "$fresh/runtime.ts";
import Navbar from "../islands/Navbar.tsx";
import HeroSection from "../islands/HeroSection.tsx";
import FeaturedCourse from "../islands/FeaturedCourse.tsx";
import PopularCourses from "../islands/PopularCourses.tsx";
import StudentReviews from "../islands/StudentReviews.tsx";
import Instructors from "../islands/Instructors.tsx";
import UniversityInfoproducerSection from "../islands/UniversityInfoproducerSection.tsx";
import Testimonials from "../islands/Testimonials.tsx";
import Footer from "../islands/Footer.tsx";

export default function InitialPageCourse() {
  return (
    <>
      <Head>
        <title>OpenCourses - Transforming Education</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div class="bg-gray-50 min-h-screen text-gray-800 font-sans">
        <Navbar />
        <div class="pt-20 p-4 mx-auto max-w-screen-lg">
          <HeroSection />
          <FeaturedCourse />
          <PopularCourses />
          <StudentReviews />
          <Instructors />
          <UniversityInfoproducerSection />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
}
