"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitGuestbookEntry(formData: FormData) {
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  if (!name || !message) {
    throw new Error("Name and message are required");
  }

  // Insert the new entry using Prisma
  await prisma.guestbook.create({
    data: {
      name,
      message,
    },
  });

  // Revalidate the home page so the new entry shows up immediately
  revalidatePath("/");
}
