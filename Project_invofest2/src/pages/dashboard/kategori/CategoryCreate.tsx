import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const API_URL = "https://uts-pemweb-be-final.vercel.app";

type FormData = {
  name: string;
};

const schema = z.object({
  name: z.string().min(1, "Category tidak boleh kosong"),
});

export default function CategoryCreate() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // SUBMIT
  const onSubmit = async (data: FormData) => {

    try {

      const response = await fetch(
        `${API_URL}/categories`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      console.log(result);

      alert("Category berhasil ditambahkan");

      navigate("/dashboard/category");

      reset();

    } catch (error) {

      console.error(error);

      alert("Gagal menambahkan category");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-2">
        Tambah Kategori
      </h1>

      <p className="mb-4">
        Form untuk menambahkan Kategori baru
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >

        <Input
          label="Nama Category"
          name="name"
          placeholder="Masukkan nama category"
          register={register}
          error={errors.name?.message}
        />

        <Button
          title="Simpan"
          variant="primary"
        />

      </form>
    </div>
  );
}