import { clsx, type ClassValue } from "clsx";

/**
 * Utility function to merge class names
 * Used for conditional styling with Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
