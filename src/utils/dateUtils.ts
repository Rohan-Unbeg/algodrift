import { DateTime } from "luxon";

/**
 * Format a date using Luxon for consistent, localized date formatting
 * @param date - Date to format
 * @param format - Optional format (defaults to 'LLL dd, yyyy')
 * @returns Formatted date string
 */
export function formatDate(date: Date, format = 'LLL dd, yyyy'): string {
  return DateTime.fromJSDate(date).toFormat(format);
}

/**
 * Get relative time (e.g., "2 days ago")
 * @param date - Date to format
 * @returns Relative time string
 */
export function getRelativeTime(date: Date): string {
  return DateTime.fromJSDate(date).toRelative() || '';
}

/**
 * Calculate reading time for a post
 * @param content - Content to calculate reading time for
 * @param wordsPerMinute - Words per minute (default: 200)
 * @returns Reading time in minutes
 */
export function getReadingTime(content: string, wordsPerMinute = 200): number {
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time > 0 ? time : 1; // Minimum 1 minute
}