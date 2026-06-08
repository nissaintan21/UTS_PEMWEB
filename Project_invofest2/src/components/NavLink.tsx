import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href, isActive = false }) => {
  return (
    <a
      href={href}
      className={`relative pb-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
        isActive ? "text-red-900" : "text-gray-600 hover:text-red-900"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-900"></span>
      )}
    </a>
  );
};

export const NavBar = () => {
  return (
  
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
     
        <div className="flex-shrink-0">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-red-900 tracking-tighter">
              INVOFEST
            </span>
            <span className="text-[7px] font-bold text-gray-400 tracking-[0.1em] uppercase">
              Informatics Vocational Festival
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-10 mx-4">
          <NavLink label="Beranda" href="/"isActive={true} />
          <NavLink label="Competition" href="/competition" />
          <NavLink label="Seminar" href="/seminar" />
          <NavLink label="Workshop" href="/workshop" />
          <NavLink label="Talkshow" href="/talkshow" />
        </div>

        <div className="flex-shrink-0">
          <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

      </div>
    </nav>
  );
};