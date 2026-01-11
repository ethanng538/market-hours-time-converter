import type { StockExchange } from '../types/exchange';

/**
 * @fileoverview A comprehensive list of major global stock exchanges with standarised times.
 */
export const STOCK_EXCHANGES: readonly StockExchange[] = [
  // North America
  {
    id: 'nyse',
    name: 'New York Stock Exchange (NYSE)',
    country: 'USA',
    continent: 'North America',
    // Regular trading hours ET (Eastern Time)
    openingTime: '09:30',
    closingTime: '16:00',
    timeZone: 'America/New_York',
  },
  {
    id: 'nasdaq',
    name: 'NASDAQ',
    country: 'USA',
    continent: 'North America',
    openingTime: '09:30',
    closingTime: '16:00',
    timeZone: 'America/New_York',
  },
  {
    id: 'tsx',
    name: 'Toronto Stock Exchange (TSX)',
    country: 'Canada',
    continent: 'North America',
    openingTime: '09:30',
    closingTime: '16:00',
    timeZone: 'America/Toronto', // Toronto typically uses the same ET as NY
  },

  // Europe
  {
    id: 'lse',
    name: 'London Stock Exchange (LSE)',
    country: 'UK',
    continent: 'Europe',
    openingTime: '08:00',
    closingTime: '16:30',
    timeZone: 'Europe/London', // Uses GMT/BST
  },
  {
    id: 'xetr',
    name: 'Deutsche Börse Xetra (XETR)',
    country: 'Germany',
    continent: 'Europe',
    openingTime: '09:00',
    closingTime: '17:30',
    timeZone: 'Europe/Berlin', // Uses CET/CEST
  },
  {
    id: 'gettex',
    name: 'GETTEX',
    country: 'Germany',
    continent: 'Europe',
    openingTime: '07:30',
    closingTime: '23:00',
    timeZone: 'Europe/Berlin',
  },
  {
    id: 'par',
    name: 'Euronext Paris (PAR)',
    country: 'France',
    continent: 'Europe',
    openingTime: '09:00',
    closingTime: '17:30',
    timeZone: 'Europe/Paris',
  },
  {
    id: 'ams',
    name: 'Euronext Amsterdam (AMS)',
    country: 'Netherlands',
    continent: 'Europe',
    openingTime: '09:00',
    closingTime: '17:30',
    timeZone: 'Europe/Amsterdam',
  },
  {
    id: 'six',
    name: 'SIX Swiss Exchange',
    country: 'Switzerland',
    continent: 'Europe',
    openingTime: '08:30',
    closingTime: '17:20',
    timeZone: 'Europe/Zurich',
  },

  // Asia
  {
    id: 'tse',
    name: 'Tokyo Stock Exchange (TSE)',
    country: 'Japan',
    continent: 'Asia',
    // The TSE has a lunch break. We only list the start and end of the day.
    openingTime: '09:00',
    closingTime: '15:00', // Closes at 3:00 PM JST
    timeZone: 'Asia/Tokyo', // JST (UTC+09:00)
  },
  {
    id: 'sse',
    name: 'Shanghai Stock Exchange (SSE)',
    country: 'China',
    continent: 'Asia',
    // Has a lunch break, using overall market start and end times
    openingTime: '09:30',
    closingTime: '15:00', // Closes at 3:00 PM CST
    timeZone: 'Asia/Shanghai', // CST (UTC+08:00)
  },
  {
    id: 'hkex',
    name: 'Hong Kong Stock Exchange (HKEX)',
    country: 'Hong Kong',
    continent: 'Asia',
    // Has a lunch break, using overall market start and end times
    openingTime: '09:30',
    closingTime: '16:00', // Closes at 4:00 PM HKT
    timeZone: 'Asia/Hong_Kong', // HKT (UTC+08:00)
  },
  {
    id: 'bse',
    name: 'BSE (Bombay Stock Exchange)',
    country: 'India',
    continent: 'Asia',
    openingTime: '09:15',
    closingTime: '15:30', // 3:30 PM IST
    timeZone: 'Asia/Kolkata', // IST (UTC+05:30)
  },

  // Oceania
  {
    id: 'asx',
    name: 'Australian Securities Exchange (ASX)',
    country: 'Australia',
    continent: 'Oceania',
    openingTime: '10:00',
    closingTime: '16:00', // 4:00 PM Sydney time
    timeZone: 'Australia/Sydney', // AEST/AEDT
  },

  // South America
  {
    id: 'b3',
    name: 'B3 (Brazil Stock Exchange)',
    country: 'Brazil',
    continent: 'South America',
    openingTime: '10:00',
    closingTime: '17:55', // 5:55 PM local time
    timeZone: 'America/Sao_Paulo', // GMT-03:00
  },
];
