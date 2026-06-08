import { Home, Trophy, BookOpen, Laptop, Mic, HelpCircle} from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Competition", href: "/competition", icon: <Trophy size={18} /> },
    { label: "Seminar", href: "/seminar", icon: <BookOpen size={18} /> },
    { label: "Workshop", href: "/workshop", icon: <Laptop size={18} /> },
    { label: "Talkshow", href: "/talkshow", icon: <Mic size={18} /> },
    { label: "Login", href: "/login", icon: <HelpCircle size={18} /> },
  ];

  return (
    <header className="bg-white shadow-sm px-6 py-2 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        
        <div>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
          />
        </div>

        <div className="flex gap-4 font-medium">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-1 transition-all duration-200 ${
                  isActive ? "text-red-600 font-semibold" : "text-gray-600"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Header;