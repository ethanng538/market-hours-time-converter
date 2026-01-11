/**
 * @fileoverview Logic for generating a structured three-category time zone selector.
 */
import { STOCK_EXCHANGES } from './exchangeData';

export interface TimeZoneOption {
  readonly label: string;
  readonly value: string;
}

/**
 * Category 1: Relative exchange time.
 * Dynamically linked to all exchanges currently in the data table.
 */
export const EXCHANGE_RELATIVE_OPTIONS: readonly TimeZoneOption[] =
  STOCK_EXCHANGES.map((exchange) => ({
    label: `${exchange.name} Time`,
    value: exchange.timeZone,
  }));

/**
 * Category 2: UTC standard time zones.
 * Complete list of standard offsets from UTC-12 to UTC+14.
 */
export const UTC_STANDARD_OPTIONS: readonly TimeZoneOption[] = Array.from(
  { length: 27 },
  (_, i) => {
    const offset = i - 12;
    const sign = offset >= 0 ? '+' : '-';
    const absOffset = Math.abs(offset).toString().padStart(2, '0');
    // IANA "Etc/GMT" zones use inverted signs (GMT+5 is Etc/GMT-5)
    const value = `Etc/GMT${offset >= 0 ? '-' : '+'}${Math.abs(offset)}`;
    return {
      label: `UTC ${sign}${absOffset}:00`,
      value: value,
    };
  },
);

/**
 * Category 3: world capital time zones (major financial hubs).
 * Curated list based on global financial centre indices.
 */
export const WORLD_CAPITAL_OPTIONS: readonly TimeZoneOption[] = [
  { label: 'London', value: 'Europe/London' },
  { label: 'New York', value: 'America/New_York' },
  { label: 'Hong Kong', value: 'Asia/Hong_Kong' },
  { label: 'Singapore', value: 'Asia/Singapore' },
  { label: 'Tokyo', value: 'Asia/Tokyo' },
  { label: 'San Francisco', value: 'America/Los_Angeles' },
  { label: 'Chicago', value: 'America/Chicago' },
  { label: 'Shanghai', value: 'Asia/Shanghai' },
  { label: 'Frankfurt', value: 'Europe/Berlin' },
  { label: 'Zurich', value: 'Europe/Zurich' },
  { label: 'Paris', value: 'Europe/Paris' },
  { label: 'Amsterdam', value: 'Europe/Amsterdam' },
  { label: 'Toronto', value: 'America/Toronto' },
  { label: 'Sydney', value: 'Australia/Sydney' },
  { label: 'Dubai', value: 'Asia/Dubai' },
  { label: 'São Paulo', value: 'America/Sao_Paulo' },
  { label: 'Mumbai', value: 'Asia/Kolkata' },
  { label: 'Johannesburg', value: 'Africa/Johannesburg' },
];
