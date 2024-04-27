import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns a string representing the ID.
 * @function generateId - generates a unique ID
 * @returns A unique ID when it invokes.
 */
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};
