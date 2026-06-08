import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

type FormData = {
    username: string;
    password: string;
}

const schema = z.object({
    username: z.string().min(2, "Username harus minimal 2 karakter"),
    password: z.string().min(6, "Password harus minimal 6 karakter"), // Diubah ke 6 menyesuaikan password "123456" saat register
});

export default function Login() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ 
        resolver: zodResolver(schema) 
    });

    // Mengubah fungsi menjadi async agar bisa melakukan hit API backend
    const onSubmit = async (data: FormData) => {
        try {
            // 1. Kirim data username dan password ke API backend kamu
            // Sesuaikan URL http://localhost:3000/login dengan setup backend kamu
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                }),
            });

            const result = await response.json();

            // 2. Jika login berhasil (status 200 OK atau response.success)
            if (response.ok && result.success) {
                alert("Login berhasil!");

                // Simpan data user ke auth store (Zustand) kamu dari hasil database backend
                login({
                    username: result.data.Username,
                    nama: result.data.Username // Sesuaikan kolom nama jika ada field nama/namaUser di backend kamu
                });

                // Pindah ke halaman dashboard
                navigate("/dashboard");
            } else {
                // 3. Tampilkan pesan error langsung dari backend
                alert(result.message || "Login gagal, silakan periksa kembali akun kamu.");
            }

        } catch (error) {
            console.error("Error saat login:", error);
            alert("Tidak dapat terhubung ke server backend.");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                <h1 className="text-3xl font-bold text-center mb-1 text-[#76153C]">
                    Login
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <Input 
                        label="Username" 
                        name="username" 
                        register={register} 
                        error={errors.username?.message}
                        placeholder="Masukkan username Anda"
                    />

                    <InputPassword 
                        label="Password" 
                        name="password" 
                        register={register} 
                        error={errors.password?.message}
                        placeholder="........"
                    />

                    <div>
                        <Button title="Login" variant="primary" />
                    </div>

                    <div className="text-sm text-gray-600">
                        Belum punya akun ? <Link to="/register" className="text-[#76153C] font-semibold hover:underline">Daftar Sekarang</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}