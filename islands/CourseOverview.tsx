
export default function CourseOverview() {
  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-4 text-green-600">Course Title</h1>
      <p class="text-gray-700 mb-4">Course subtitle or tagline goes here.</p>
      <div class="flex flex-col md:flex-row items-center mb-4">
        <div class="flex items-center mr-4 mb-4 md:mb-0">
          <span class="text-yellow-400 mr-1">★★★★★</span>
          <span class="text-gray-600">(4.9/5)</span>
        </div>
        <span class="text-gray-600">12345 students enrolled</span>
      </div>
      <button class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Enroll Now</button>
    </div>
  );
}
