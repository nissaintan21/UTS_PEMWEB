import { Request, Response } from "express";
import { prisma } from "../lib/db.js";
import bcrypt from "bcrypt";

export const createUsers = async (req: Request, res: Response) => {
  try {
    const { username, password, foto } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username dan password tidak boleh kosong!"
      });
    }

    const existingUser = await prisma.users.findUnique({
      where: {
        Username: username
      }
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User sudah terdaftar"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        Username: username,
        Password: hashedPassword,
        foto: foto || null 
      }
    });

    return res.status(201).json({
      success: true,
      message: "User berhasil dibuat",
      data: {
        id: newUser.ID, 
        Username: newUser.Username,
        foto: newUser.foto
      }
    });

  } catch (error: any) {
    // Mencetak error asli di terminal backend untuk debugging UTS kamu
    console.error("Terjadi Error pada Controller:", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
      error: error.message || error
    });
  }
};