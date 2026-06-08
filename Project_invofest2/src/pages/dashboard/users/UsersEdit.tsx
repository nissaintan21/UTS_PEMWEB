import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../../components/Input";

const API_URL = "http://localhost:3000";

type FormData = {
  username: string;
  foto: string;
};

export default function UsersEdit() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<FormData>();

  // GET USER BY ID
  useEffect(() => {
    fetch(`${API_URL}/users/${id}`)
      .then((res) => res.json())
      .then((result) => {

        const userData = result.data || result;

        if (userData) {
          
          setValue("username", userData.Username);
          setValue("foto", userData.foto || "");
        }
      })
      .catch((err) => console.error("Gagal mengambil data user:", err));
  }, [id, setValue]);

  // UPDATE DATA
  const onSubmit = async (data: FormData) => {
    try {
      await fetch(`${API_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

          Username: data.username,
          foto: data.foto || null,
        }),
      });

      alert("User berhasil diupdate");
      navigate("/dashboard/users"); // Redirect kembali ke index users
    } catch (error) {
      console.error(error);
      alert("Gagal update user");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2 text-[#76153C]">
        Edit User
      </h1>

      <p className="mb-4 text-gray-600">
        Form untuk mengedit data pengguna (username dan foto)
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <Input
          label="Username"
          name="username"
          placeholder="Masukkan username baru"
          register={register}
        />

        <Input
          label="Format Foto"
          name="foto"
          placeholder="Contoh: png, jpg, atau webp"
          register={register}
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 px-4 rounded-xl font-medium transition-colors"
        >
          Update User
        </button>
      </form>
    </div>
  );
}