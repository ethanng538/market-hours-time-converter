/**
 * @fileoverview Utility for time-zone-aware market hour conversions.
 */
import { format } from 'date-fns';
import { tz, TZDate } from '@date-fns/tz';

/**
 * Converts a fixed exchange time (e.g., "09:30") into a target time zone display.
 *
 * @param timeStr - Time in "HH:mm" format (e.g., "09:30").
 * @param sourceTimeZone - IANA time zone of the exchange (e.g., "America/New_York").
 * @param targetTimeZone - IANA time zone for the user's view (e.g., "Europe/Berlin").
 * @returns Formatted time string in "HH:mm".
 */
export const convertExchangeTimeToDisplay = (
  timeStr: string,
  sourceTimeZone: string,
  targetTimeZone: string,
): string => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const now = new Date();

  /**
   * Logic: TZDate mirrors the native Date constructor but accepts the
   * IANA time zone as the final argument. This ensures "09:30" is
   * correctly locked to the exchange's local time.
   */
  const exchangeDate = new TZDate(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    0,
    sourceTimeZone,
  );

  /**
   * The 'in' option in date-fns v4+ format function correctly handles
   * rendering the specific moment into the user's target time zone.
   */
  return format(exchangeDate, 'HH:mm', { in: tz(targetTimeZone) });
};
