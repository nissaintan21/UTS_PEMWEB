import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}
      <Header />

      {/* CONTENT (SISA LAYAR) */}
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1">

        {/* KIRI (GAMBAR) */}
        <div className="flex items-center justify-center bg-pink-50 p-12">
          <Link to="/">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Maskot"
              className="w-full max-w-[350px] hover:scale-105 transition"
            />
          </Link>
        </div>

        {/* KANAN (FORM) */}
        <div className="flex items-center justify-center bg-white p-8">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}