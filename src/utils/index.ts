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

export const truncate = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

/**
 * Returns an Encrypted a string .
 * @function encryptString - Encodes or encrypts a string using a base64 Buffer
 * @returns A encoded string .
 */
export const encryptString = (str: string): string => {
  const buffer = Buffer.from(str);
  return buffer.toString("base64");
};

/**
 * Decodes and Returns a string .
 * @function decryptString - Decodes or decrypts an encrypted string Buffer
 * @returns A decoded string .
 */

export const decryptString = (str: string): string => {
  const buffer = Buffer.from(str, "base64");
  return buffer.toString();
};

/**
 * Returns a string representing the time elapsed since the given time.
 * @param time - The time in seconds or a Date object.
 * @returns The formatted time string.
 */
export const commentsTime = (time: number | Date): string => {
  function getSuffix(date: number): string {
    if (date === 1 || date === 21 || date === 31) {
      return "st";
    } else if (date === 2 || date === 22) {
      return "nd";
    } else if (date === 3 || date === 23) {
      return "rd";
    } else {
      return "th";
    }
  }

  time = new Date((time as number) * 1000);
  let str = "";

  let months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let chunks: [number, string][] = [
    [31536000000, "year"],
    [2592000000, "month"],
    [604800000, "week"],
    [86400000, "day"],
    [3600000, "hour"],
    [60000, "minute"],
    [1000, "second"],
  ];

  let today: Date = new Date();
  let since: Date = new Date(today.getTime() - time.getTime());

  if (since.getTime() > 604800000) {
    str = `${months[time.getMonth()]} ${time.getDate()} ${getSuffix(
      time.getDate()
    )}`;

    if (since.getTime() > 31536000000) {
      str = `${str}, ${time.getFullYear()}`;
    }
    return str;
  }

  let ms: number = 0;
  let name: string = "";
  let i: number = 0;
  let chunksLen: number = chunks.length;
  let count: number = 0;
  for (i = 0; i < chunksLen; i++) {
    ms = chunks[i][0];
    name = chunks[i][1];
    count = Math.floor(since.getTime() / ms);
    if (count !== 0) break;
  }

  return `${count} ${name}${count > 1 ? "s" : ""} ago`;
};



export const timeAgo = (dateString: string): string => {
  const now: Date = new Date();
  const date = new Date(dateString);
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 1) return `${days} days ago`;
  if (days === 1) return "1 day ago";
  if (hours > 1) return `${hours} hours ago`;
  if (hours === 1) return "1 hour ago";
  if (minutes > 1) return `${minutes} minutes ago`;
  if (minutes === 1) return "1 minute ago";
  if (seconds > 1) return `${seconds} seconds ago`;
  return "just now";
};