
export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between">
        <div class="mb-4 md:mb-0">
          <h3 class="text-xl font-bold mb-2">OpenCourses</h3>
          <p class="text-gray-400">© 2024 OpenCourses. All rights reserved.</p>
        </div>
        <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a href="/privacy" class="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="/terms" class="hover:text-gray-300 transition">Terms of Service</a>
          <a href="/contact" class="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
