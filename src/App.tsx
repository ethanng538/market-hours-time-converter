/**
 * @fileoverview Main Application component for the stock market hours converter.
 */
import React, { useState, useMemo, useEffect } from 'react';
import { Clock, Globe, Filter, Moon, Sun } from 'lucide-react';
import { STOCK_EXCHANGES } from './constants/exchangeData';
import {
  EXCHANGE_RELATIVE_OPTIONS,
  UTC_STANDARD_OPTIONS,
  WORLD_CAPITAL_OPTIONS,
} from './constants/timeZones';
import { ExchangeTableRow } from './components/ExchangeTableRow';

/**
 * Root component managing state for theme, time zones, and exchange filtering.
 * Developer note: 'useState' stores user choices; 'useEffect' syncs choices with the DOM.
 */
export const App: React.FC = () => {
  // Theme state: defaults to OS preference (prefers-color-scheme: dark).
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [targetTimeZone, setTargetTimeZone] = useState<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );
  const [filterCountry, setFilterCountry] = useState<string>('All');
  const [filterContinent, setFilterContinent] = useState<string>('All');

  /**
   * Effect: synchronises the '.dark' class on the document root (<html>).
   */
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = (): void => setIsDarkMode((prev) => !prev);

  // Logic: resolve display label for any of the three time zone categories.
  const timeZoneLabel = useMemo(() => {
    const allOptions = [
      ...EXCHANGE_RELATIVE_OPTIONS,
      ...UTC_STANDARD_OPTIONS,
      ...WORLD_CAPITAL_OPTIONS,
    ];
    const match = allOptions.find((opt) => opt.value === targetTimeZone);
    return match ? match.label : targetTimeZone.replace(/_/g, ' ');
  }, [targetTimeZone]);

  // Logic: extract unique filter values for the dropdown menus.
  const countryOptions = useMemo(
    () => ['All', ...new Set(STOCK_EXCHANGES.map((e) => e.country))],
    [],
  );
  const continentOptions = useMemo(
    () => ['All', ...new Set(STOCK_EXCHANGES.map((e) => e.continent))],
    [],
  );

  // Logic: apply country/continent filters.
  const filteredExchanges = useMemo(() => {
    return STOCK_EXCHANGES.filter((exchange) => {
      const matchesCountry =
        filterCountry === 'All' || exchange.country === filterCountry;
      const matchesContinent =
        filterContinent === 'All' || exchange.continent === filterContinent;
      return matchesCountry && matchesContinent;
    });
  }, [filterCountry, filterContinent]);

  return (
    <div className="min-h-screen p-4 sm:p-8 antialiased font-sans">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center relative">
          {/* User toggle: moon for dark mode, dun for light mode */}
          <div className="absolute right-0 top-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 cursor-pointer rounded-full bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-blue-500 transition-all"
            >
              {isDarkMode ? (
                <Sun className="text-yellow-400" size={20} />
              ) : (
                <Moon className="text-slate-700" size={20} />
              )}
            </button>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Stock market hours time converter
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Stock exchange opening hours from your selected perspective.
          </p>

          <div className="mt-6 h-22.5 w-full max-w-182 mx-auto bg-slate-200 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500">
            Advertisement Placeholder (728x90)
          </div>
        </header>

        <main className="rounded-xl bg-white dark:bg-slate-900 shadow-xl ring-1 ring-slate-200 dark:ring-slate-800 overflow-hidden transition-colors">
          <div className="flex flex-wrap items-end gap-6 p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            {/* Time zone category selection */}
            <div className="flex-1 min-w-75">
              <label
                htmlFor="time-zone-select"
                className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2"
              >
                <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />{' '}
                View perspective
              </label>
              <select
                id="time-zone-select"
                value={targetTimeZone}
                onChange={(e) => setTargetTimeZone(e.target.value)}
                className="w-full rounded-lg border-slate-300 dark:border-slate-700 py-2.5 pl-3 shadow-sm focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 sm:text-sm"
              >
                <optgroup
                  label="Relative Exchange Time"
                  className="dark:bg-slate-800"
                >
                  {EXCHANGE_RELATIVE_OPTIONS.map((opt) => (
                    <option key={`rel-${opt.value}`} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup
                  label="UTC Standard Time Zones"
                  className="dark:bg-slate-800"
                >
                  {UTC_STANDARD_OPTIONS.map((opt) => (
                    <option key={`utc-${opt.value}`} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup
                  label="World Capital Time Zones"
                  className="dark:bg-slate-800"
                >
                  {WORLD_CAPITAL_OPTIONS.map((opt) => (
                    <option key={`world-${opt.value}`} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Filter controls */}
            <div className="flex gap-4 items-center">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1">
                  <Filter className="h-3 w-3" /> Country
                </label>
                <select
                  value={filterCountry}
                  onChange={(e) => setFilterCountry(e.target.value)}
                  className="w-full rounded-lg border-slate-300 dark:border-slate-700 py-2.5 pl-3 shadow-sm focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 sm:text-sm"
                >
                  {countryOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Continent
                </label>
                <select
                  value={filterContinent}
                  onChange={(e) => setFilterContinent(e.target.value)}
                  className="w-full rounded-lg border-slate-300 dark:border-slate-700 py-2.5 pl-3 shadow-sm focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 sm:text-sm"
                >
                  {continentOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Core table output */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="p-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                    Stock exchange
                  </th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    Opening <Clock className="h-3.5 w-3.5" />
                  </th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                    Closing
                  </th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                    Viewing zone
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredExchanges.map((exchange) => (
                  <ExchangeTableRow
                    key={exchange.id}
                    exchange={exchange}
                    targetTimeZone={targetTimeZone}
                    timeZoneLabel={timeZoneLabel}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </main>

        <footer className="mt-12 pb-8 text-center text-sm text-slate-400 dark:text-slate-500">
          <div className="flex flex-col items-center gap-2">
            <p>
              © 2026 Stock market hours time converter. All rights reserved.
            </p>
            <p className="mt-2 text-xs italic">
              Data provided for informational purposes only. Always verify with
              official exchange sources.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
