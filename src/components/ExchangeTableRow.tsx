import React from 'react';
import type { StockExchange } from '../types/exchange';
import { convertExchangeTimeToDisplay } from '../utils/timeUtils';

interface ExchangeTableRowProps {
  readonly exchange: StockExchange;
  readonly targetTimeZone: string;
  readonly timeZoneLabel: string;
}

/**
 * Renders a single exchange row.
 * Developer note: 'React.memo' prevents the row from
 * re-rendering unless its specific props change.
 */
export const ExchangeTableRow: React.FC<ExchangeTableRowProps> = React.memo(
  ({ exchange, targetTimeZone, timeZoneLabel }) => {
    const opening = convertExchangeTimeToDisplay(
      exchange.openingTime,
      exchange.timeZone,
      targetTimeZone,
    );
    const closing = convertExchangeTimeToDisplay(
      exchange.closingTime,
      exchange.timeZone,
      targetTimeZone,
    );

    return (
      <tr className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors">
        <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">
          {exchange.name}
        </td>
        <td className="p-4 text-slate-700 dark:text-slate-300 font-mono">
          {opening}
        </td>
        <td className="p-4 text-slate-700 dark:text-slate-300 font-mono">
          {closing}
        </td>
        <td className="p-4 text-sm text-slate-500 dark:text-slate-400 italic">
          {timeZoneLabel}
        </td>
      </tr>
    );
  },
);

ExchangeTableRow.displayName = 'ExchangeTableRow';
