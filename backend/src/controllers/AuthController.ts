import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/db.js";

// ==========================================
// 1. CONTROLLER REGISTER
// ==========================================
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, foto } = req.body;

    // Validasi input kosong (Hanya username & password)
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username dan password wajib diisi!",
      });
    }

    // Cek apakah username sudah ada (Gunakan 'Username' dengan U kapital)
    const existingUser = await prisma.users.findFirst({
      where: {
        Username: username,
      },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username sudah digunakan",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan ke tabel 'users' sesuai struktur database kamu
    const newUser = await prisma.users.create({
      data: {
        Username: username,
        Password: hashedPassword,
        foto: foto || null, // default null kalau frontend tidak kirim foto
      },
    });

    return res.status(201).json({
      success: true,
      message: "Register berhasil",
      data: {
        id: newUser.ID, // ID kapital sesuai phpMyAdmin
        Username: newUser.Username,
        foto: newUser.foto,
      },
    });
  } catch (error: any) {
    console.error("Error pada Register:", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server pada registrasi",
      error: error.message || error,
    });
  }
};

// ==========================================
// 2. CONTROLLER LOGIN
// ==========================================
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username dan password wajib diisi",
      });
    }

    // Cari user di tabel 'users' menggunakan kolom 'Username' (U kapital)
    const user = await prisma.users.findFirst({
      where: {
        Username: username,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Username atau password salah",
      });
    }

    // Cek password menggunakan kolom 'Password' (P kapital)
    const isMatch = await bcrypt.compare(password, user.Password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Username atau password salah",
      });
    }

    // Bikin token JWT tanpa data email
    const token = jwt.sign(
      {
        userId: user.ID,
        username: user.Username,
      },
      process.env.JWT_SECRET || "rahasia_uts_nissa",
      {
        expiresIn: "1h",
      }
    );

    // Response sukses disamakan dengan struktur kebutuhan frontend React kamu
    return res.json({
      success: true,
      message: "Login berhasil",
      token,
      data: {
        id: user.ID,
        Username: user.Username,
        foto: user.foto,
      },
    });
  } catch (error: any) {
    console.error("Error pada Login:", error);
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan server pada login",
      error: error.message || error,
    });
  }
};