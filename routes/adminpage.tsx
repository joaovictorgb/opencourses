
import { Head } from "$fresh/runtime.ts";
import Sidebar from "../islands/Sidebar.tsx";

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div class="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <div class="flex-1 flex flex-col">
          {/* Topbar */}
          <div class="bg-white shadow p-4 flex justify-between">
            <h1 class="text-2xl font-bold">Admin Page</h1>
            <div class="flex items-center space-x-4">
              <button class="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A8.038 8.038 0 0116 12.9V10a6 6 0 00-9-5.197"></path>
                </svg>
              </button>
              <button class="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12m-3.656-3.656A5 5 0 1117 12m-5 5v3m0-8V9m0-4h0"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Page content */}
          <div class="flex-1 p-4">
            <p class="mt-4">Bem-vindo à página de administração!</p>
            {/* Adicione aqui o conteúdo adicional da página */}
          </div>
        </div>
      </div>
    </>
  );
}
