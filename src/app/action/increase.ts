"use server";
import { prisma } from "@/utils/prisma";

export const IncreaseView = async (id: string) => {
  try {
    await prisma.post.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error increasing view count:", error);
    return { success: false, error: "Failed to increase view count" };
  }
};
