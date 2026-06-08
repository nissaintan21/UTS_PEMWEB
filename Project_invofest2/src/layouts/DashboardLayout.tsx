import { Link, useNavigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useLocation } from "react-router-dom";

export default function DashboardLayout(){
    const location = useLocation();
    const isActive = (path: string) =>
    location.pathname.includes(path);
    const logout=useAuthStore((state)=>state.logout);
    const navigate=useNavigate();

    const handleLogout=()=>{
        logout();
        navigate("/login");
    };
    return(
        <div className="flex w-full min-h-screen">
            <aside className="w-64 bg-blue-500 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-center border-b border-gray-100 h-16">
                    <h2 className="text-2xl font-bold mb-4">INVOFEST</h2>
                </div>
                    
                <div>
                    <nav className="flex flex-col gap-2">

                <Link
                    to="/dashboard"
                    className={`p-4 rounded-2xl ${
                    location.pathname === "/dashboard"
                        ? "bg-black text-white"
                        : "hover:bg-black"
                    }`}
                >
                    DASHBOARD
                </Link>

                <Link
                    to="/dashboard/category"
                    className={`p-4 rounded-2xl ${
                    isActive("/dashboard/category")
                        ? "bg-black text-white"
                        : "hover:bg-black"
                    }`}
                >
                    CATEGORY EVENT
                </Link>

                <Link
                    to="/dashboard/event"
                    className={`p-4 rounded-2xl ${
                    isActive("/dashboard/event")
                        ? "bg-black text-white"
                        : "hover:bg-black"
                    }`}
                >
                    EVENT
                </Link>

                <Link
                    to="/dashboard/pembicara"
                    className={`p-4 rounded-2xl ${
                    isActive("/dashboard/pembicara")
                        ? "bg-black text-white"
                        : "hover:bg-black"
                    }`}
                >
                    PEMBICARA
                </Link>

                <Link
                    to="/dashboard/users"
                    className={`p-4 rounded-2xl ${
                    isActive("/dashboard/users")
                        ? "bg-black text-white"
                        : "hover:bg-black"
                    }`}
                >
                    USERS
                </Link>

</nav>
                </div>

                <div>
                    <button onClick={handleLogout} type="button" className="p-3 bg-red-700 w-full">Logout</button>
                </div>
            </aside>
            
      {/* CONTENT */}
      <main className="flex-1 flex justify-center items-start p-6 bg-gray-100">
        <div className="w-full max-w-xl">
          <Outlet />
        </div>
      </main>

    </div>
  );
}