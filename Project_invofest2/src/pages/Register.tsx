import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../components/Input";
import Button from "../components/Button";

const API_URL = "http://localhost:3000"; 
type FormData = {
  foto: string;
  username: string;
  password: string;
  password_confirm: string;
};


const schema = z.object({
  foto: z.string().min(1, "Format foto tidak boleh kosong!"),
  username: z.string().min(2, "Username harus minimal 2 karakter"),
  password: z.string().min(6, "Minimal 6 Karakter"), 
  password_confirm: z.string().min(6, "Minimal 6 Karakter"),
}).refine((data) => data.password === data.password_confirm, {
  message: "Password tidak sama",
  path: ["password_confirm"],
});

export default function Register() {
  const [redirect, setRedirect] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ 
    resolver: zodResolver(schema) 
  });
    
  
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
          foto: data.foto, 
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Registrasi berhasil!");
        setRedirect(true);
      } else {
        alert(result.message || "Registrasi gagal");
      }
    } catch (error) {
      console.error("Error saat register:", error);
      alert("Gagal terhubung ke server");
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-1 text-[#76153C]">
          Register
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          
          <Input 
            label="Username" 
            name="username" 
            register={register} 
            error={errors.username?.message}
            placeholder="Masukkan username"
          />

          <Input 
            label="Format Foto" 
            name="foto" 
            register={register} 
            error={errors.foto?.message}
            placeholder="Contoh: webp atau png"
          />

          <Input
            label="Password" 
            name="password" 
            register={register} 
            error={errors.password?.message}
            placeholder="......"
          />

          <Input
            label="Konfirmasi Password" 
            name="password_confirm" 
            register={register} 
            error={errors.password_confirm?.message}
            placeholder="......"
          />
          
          <Button title="Register" variant="primary" />

        </form>
      </div>
    </div>
  );
}