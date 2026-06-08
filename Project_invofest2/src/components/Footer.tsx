import { Home, Trophy, BookOpen, Laptop, Mic} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#ffeef1] w-full mt-20">

      {/* ISI FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* LOGO */}
        <div>
          <img 
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png" 
            className="w-40 mb-2"
          />
          <p className="text-sm text-gray-700">
            Informatics Vocational Festival
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="font-bold mb-4">MENU NAVIGASI</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link to="/" className="flex items-center gap-2"><Home size={16} /> Beranda</Link></li>
            <li><Link to="/seminar" className="flex items-center gap-2"><BookOpen size={16} /> Seminar</Link></li>
            <li><Link to="/competition" className="flex items-center gap-2"><Trophy size={16} /> Competition</Link></li>
            <li><Link to="/workshop" className="flex items-center gap-2"><Laptop size={16} /> Workshop</Link></li>
            <li><Link to="/talkshow" className="flex items-center gap-2"><Mic size={16} /> Talkshow</Link></li>
          </ul>
        </div>

        {/* SOSIAL */}
        <div>
          <h3 className="font-bold mb-4">IKUTI KAMI</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>

        {/* MAP */}
        <div>
          <h3 className="font-bold mb-4">ALAMAT</h3>
          <iframe
            src="https://www.google.com/maps?q=Politeknik+Harapan+Bersama+Tegal&output=embed"
            className="w-full h-40 rounded-lg"
          ></iframe>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t py-4 text-center text-sm text-gray-700">
        © 2025 INVOFEST. All Rights Reserved.
      </div>

      {/* SCROLL */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-red-900 text-white p-3 rounded-full"
      >
        ↑
      </button>

    </footer>
  );
} 