/**
 * Represents a Stock Exchange domain model.
 */
export interface StockExchange {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly continent:
    | 'North America'
    | 'Europe'
    | 'Asia'
    | 'Oceania'
    | 'South America'
    | 'Africa';
  readonly openingTime: string; // HH:mm format
  readonly closingTime: string; // HH:mm format
  readonly timeZone: string; // IANA Timezone (e.g., 'America/New_York')
}

export type TimeZonePreference = 'local' | 'exchange' | string;
