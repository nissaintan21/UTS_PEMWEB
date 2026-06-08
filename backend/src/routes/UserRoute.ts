import express from "express";
import { prisma } from "../lib/db.js"; 
import { createUsers } from "../controllers/UserController.js"; 

const router = express.Router();

// 1. CREATE USER (POST /users) - Menggunakan fungsi controller yang sudah kamu buat
router.post("/", createUsers);

// 2. GET ALL USERS (GET /users) - Supaya data user muncul di halaman utama INVOFEST
router.get("/", async (req, res) => {
  try {
    const dataUsers = await prisma.users.findMany();
    
    return res.status(200).json({
      success: true,
      data: dataUsers
    });
  } catch (error: any) {
    console.error("Error GET Users:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 3. GET USER BY ID (GET /users/:id) - Supaya data lama muncul saat halaman Edit dibuka
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.users.findFirst({
      where: { 
        ID: Number(id) // Menggunakan ID (kapital semua) sesuai database phpMyAdmin
      }
    });

    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error: any) {
    console.error("Error GET User BY ID:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 4. UPDATE USER (PUT /users/:id) - Untuk menyimpan perubahan dari halaman Edit
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { Username, foto } = req.body;

    await prisma.users.update({
      where: { 
        ID: Number(id) 
      },
      data: { 
        Username, 
        foto: foto || null 
      }
    });

    return res.status(200).json({
      success: true,
      message: "User berhasil diupdate"
    });
  } catch (error: any) {
    console.error("Error PUT User:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 5. DELETE USER (DELETE /users/:id) - Untuk tombol Hapus
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.users.delete({
      where: { 
        ID: Number(id) 
      }
    });

    return res.status(200).json({
      success: true,
      message: "User berhasil dihapus"
    });
  } catch (error: any) {
    console.error("Error DELETE User:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;