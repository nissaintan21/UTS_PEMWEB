import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3000"; 

type UserData = {
  ID: number;        
  Username: string;  
  foto: string | null;
};

export default function UsersIndex() {
  const [users, setUsers] = useState<UserData[]>([]);

  // GET DATA
  const getUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      const result = await response.json();

     
      if (result.success && result.data) {
        setUsers(result.data);
      } else if (Array.isArray(result)) {
        setUsers(result);
      }
    } catch (error) {
      console.error("Gagal memuat data users:", error);
    }
  };

  // DELETE
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus user ini?");
    if (!confirmDelete) return;

    try {
      await fetch(`${API_URL}/users/${id}`, {
        method: "DELETE",
      });

    
      getUsers();
    } catch (error) {
      console.error("Error saat menghapus user:", error);
      alert("Gagal menghapus user");
    }
  };

  // LOAD DATA
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-4">

      <h1 className="text-2xl font-bold mb-4">
        USERS
      </h1>
      <p className="mb-4 text-gray-600">
        Berikut daftar pengguna (users) yang terdaftar.
      </p>

      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.length === 0 ? (
          <p className="text-gray-400 italic">Belum ada user terdaftar.</p>
        ) : (
          users.map((user) => (
            <div
              key={user.ID}
              className="bg-white shadow rounded-xl p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="font-bold text-lg text-gray-800">
                  {user.Username}
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Format Foto: <span className="font-mono">{user.foto || "Tidak ada foto"}</span>
                </p>
              </div>

              <div className="flex gap-2 mt-4">
                {/* EDIT */}
                <Link
                  to={`/dashboard/users/edit/${user.ID}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded text-sm font-medium hover:bg-yellow-600 transition-colors"
                >
                  Edit
                </Link>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(user.ID)}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition-colors"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* BUTTON TAMBAH */}
      <Link
        to="/dashboard/users/create"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
      >
        Tambah User Baru
      </Link>
    </div>
  );
}