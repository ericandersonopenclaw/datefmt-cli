#!/usr/bin/env node
/**
 * datefmt - Format date/time
 * Usage: datefmt [format]
 */

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`datefmt 🦞 - Date formatter

Usage: datefmt [format]

Formats:
  iso    ISO 8601
  us     MM/DD/YYYY
  eu     DD/MM/YYYY
  full   Full date
  unix   Unix timestamp
`);
  process.exit(0);
}

const fmt = args[0] || 'iso';
const now = new Date();

switch (fmt) {
  case 'iso': console.log(now.toISOString()); break;
  case 'us': console.log(now.toLocaleDateString('en-US')); break;
  case 'eu': console.log(now.toLocaleDateString('en-GB')); break;
  case 'full': console.log(now.toLocaleString()); break;
  case 'unix': console.log(Math.floor(now.getTime() / 1000)); break;
  default: console.log(now.toISOString());
}
