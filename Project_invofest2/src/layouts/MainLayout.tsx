import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-24 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="py-6 text-center border-t border-gray-200 text-gray-500">
        &copy; 2026 Universitas Harkat Negeri
      </footer>
    </div>
  );
}