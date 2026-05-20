"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function submitRsvp(name: string, status: string, guestsCount: number, message: string) {
  if (!name.trim() || !message.trim()) {
    return { success: false, error: "Name and message are required." };
  }
  try {
    const rsvp = await prisma.rsvp.create({
      data: {
        name: name.trim(),
        status,
        guestsCount: Number(guestsCount) || 1,
        message: message.trim(),
      },
    });
    revalidatePath("/");
    return { success: true, data: rsvp };
  } catch (error) {
    console.error("Failed to submit RSVP:", error);
    return { success: false, error: "Gagal mengirim konfirmasi. Silakan coba lagi." };
  }
}

export async function getRsvps() {
  try {
    const rsvps = await prisma.rsvp.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 20, // Load up to 20 wishes
    });
    return rsvps;
  } catch (error) {
    console.error("Failed to fetch RSVPs:", error);
    return [];
  }
}
