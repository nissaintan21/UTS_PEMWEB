import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const API_URL = "http://localhost:3000"; 

type FormData = {
  username: string;
  password: string;
  foto?: string;
};


const schema = z.object({
  username: z.string().min(2, "Username harus minimal 2 karakter"),
  password: z.string().min(6, "Password harus minimal 6 karakter"), // Disamakan dengan validasi login kamu
  foto: z.string().optional(),
});

export default function UsersCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // SUBMIT DATA
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

          username: data.username,
          password: data.password,
          foto: data.foto || null,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok && result.success) {
        alert("User berhasil ditambahkan");
        navigate("/dashboard/users"); 
      } else {
        alert(result.message || "Gagal menambahkan user");
      }
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan user, server tidak merespon");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2 text-[#76153C]">Tambah User</h1>
      <p className="mb-4 text-gray-600">Form untuk menambahkan User baru ke dalam sistem</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
        <Input
          label="Username"
          name="username"
          placeholder="Masukkan username baru"
          register={register}
          error={errors.username?.message}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan password"
          register={register}
          error={errors.password?.message}
        />

        <Input
          label="Format Foto (Opsional)"
          name="foto"
          placeholder="Contoh: webp atau png"
          register={register}
          error={errors.foto?.message}
        />

        {/* Tombol */}
        <button 
          type="submit" 
          className="bg-[#76153C] hover:bg-red-950 text-white p-2 px-4 rounded-xl font-medium transition-colors"
        >
          Simpan User
        </button>
      </form>
    </div>
  );
}