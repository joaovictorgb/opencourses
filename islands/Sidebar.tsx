
import { useState } from "preact/hooks";

export default function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div class="flex">
      <div class={`bg-gray-800 text-white ${isSidebarOpen ? 'w-64' : 'w-16'} flex-shrink-0 transition-all duration-300`}>
        <div class="p-4 flex items-center justify-between">
          <h2 class={`text-xl font-bold transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Admin</h2>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} class="focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <nav class="mt-4">
          <a href="/admin/dashboard" class="flex items-center py-2.5 px-4 hover:bg-gray-700">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-10 0a1 1 0 001 1h3m-4 0h10"></path>
            </svg>
            <span class={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Dashboard</span>
          </a>
          <a href="/admin/users" class="flex items-center py-2.5 px-4 hover:bg-gray-700">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 18.485A9 9 0 1116.97 6.636m-2.828 2.829A9 9 0 015.12 18.485z"></path>
            </svg>
            <span class={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Users</span>
          </a>
          <a href="/admin/settings" class="flex items-center py-2.5 px-4 hover:bg-gray-700">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317a9.08 9.08 0 013.35 0m1.065 1.194a7.473 7.473 0 012.292.931m1.517 1.343a6.41 6.41 0 011.658 1.826m.493 2.052a7.23 7.23 0 010 2.616m-.493 2.052a6.41 6.41 0 01-1.658 1.826m-1.517 1.343a7.473 7.473 0 01-2.292.931m-1.065 1.194a9.08 9.08 0 01-3.35 0m-1.065-1.194a7.473 7.473 0 01-2.292-.931m-1.517-1.343a6.41 6.41 0 01-1.658-1.826m-.493-2.052a7.23 7.23 0 010-2.616m.493-2.052a6.41 6.41 0 011.658-1.826m1.517-1.343a7.473 7.473 0 012.292-.931m1.065-1.194"></path>
            </svg>
            <span class={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Settings</span>
          </a>
          <a href="/logout" class="flex items-center py-2.5 px-4 hover:bg-gray-700">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H3m6 8l-6-8 6-8m9 0h3m-3 8h3m-3 8h3"></path>
            </svg>
            <span class={`transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Logout</span>
          </a>
        </nav>
      </div>
      {!isSidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          class="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      )}
    </div>
  );
}
