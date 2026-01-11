# Market Hours Time Converter

A professional, high-performance web application built to track and convert global stock exchange opening and closing times. Developed with **React 19**, **TypeScript**, and **Tailwind CSS v4.1**.

## 🚀 Features

-   **Dynamic time zone conversion**: supports three viewing perspectives:
    -   **Relative exchange time**: view hours exactly as they appear at the exchange (e.g., "NYSE Time").
    -   **UTC standard**: complete list of fixed offsets from UTC-12:00 to UTC+14:00.
    -   **Financial hubs**: curated list of major world capital time zones (London, Tokyo, New York, etc.).
-   **Advanced filtering**: filter exchanges by Country and Continent.
-   **Industry standard SEO**: fully optimised metadata for search engine indexing.
-   **Monetisation ready**: includes integrated ad slots (728x90) for Google AdSense.
-   **Clean Code architecture**: strictly adheres to Martin's *Clean Code* heuristics and the Google TypeScript Style Guide.

## 🛠️ Tech stack

-   **Framework**: [React 19](react.dev) (LTS)
-   **Build tool**: [Vite 6+](vite.dev)
-   **Styling**: [Tailwind CSS v4.1](tailwindcss.com) (CSS-first engine)
-   **Date logic**: [@date-fns/tz](github.com) (2026 industry standard for time zone math)
-   **Testing**: [Vitest](vitest.dev) (FAST principles: Fast, Isolated, Repeatable, Self-Validating, Timely)
-   **Icons**: [Lucide React](lucide.dev)

## 🏗️ Project structure

```text
src/
├── components/   # Reusable UI components (pure and memoised)
├── constants/    # High-level configurable data
├── types/        # Domain-specific TypeScript interfaces
├── utils/        # Pure helper functions for time conversion
└── App.tsx       # Main application controller