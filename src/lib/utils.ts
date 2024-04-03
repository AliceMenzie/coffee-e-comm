import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function anyTrue(options: Record<string, Record<string, boolean>>) {
  for (const category in options) {
    for (const value in options[category]) {
      if (options[category][value] === true) {
        return true;
      }
    }
  }
  return false;
}