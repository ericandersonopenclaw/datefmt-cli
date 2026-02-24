#!/usr/bin/env node

// date - Date utilities
// Usage: date [format]

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h') || args.length === 0) {
  console.log(`date 📅 - Date utilities

Usage: date [command]

Commands:
  now       Current date/time
  tomorrow  Tomorrow's date
  epoch     Current Unix timestamp
  week      What week of the year
  day       Day of year

Examples:
  date now
  date epoch
`);
  process.exit(0);
}

const cmd = args[0].toLowerCase();
const now = new Date();

if (cmd === 'now') {
  console.log(now.toString());
} else if (cmd === 'tomorrow') {
  const t = new Date(now);
  t.setDate(t.getDate() + 1);
  console.log(t.toDateString());
} else if (cmd === 'epoch') {
  console.log(Math.floor(now.getTime() / 1000));
} else if (cmd === 'week') {
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  const oneWeek = 604800000;
  console.log(Math.ceil(diff / oneWeek));
} else if (cmd === 'day') {
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  console.log(Math.floor(diff / 86400000));
} else {
  console.log('Unknown command. Run "date" for help.');
}