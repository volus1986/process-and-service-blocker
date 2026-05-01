# Process & Service Blocker

A lightweight Node.js utility for Windows that automatically terminates unwanted processes and stops/disables unnecessary Windows services. Designed to reduce system bloat, disable telemetry, and free up resources by continuously monitoring and killing processes like Microsoft Edge, OneDrive, Xbox services, Cortana, and many others.

## How It Works

The application runs in a continuous loop (every 1 second by default) and:

1. **Kills unwanted processes** — terminates bloatware, telemetry, and other unnecessary processes
2. **Stops & disables services** — stops running Windows services and sets them to `disabled` so they don't restart on reboot (e.g. windows update `wuauserv`)

The lists of blocked processes and services are defined in [`src/stopItemNames.ts`](src/stopItemNames.ts). You can edit this file to add or remove items.

> ⚠️ **Requires Administrator privileges** to stop services and kill system processes.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- Windows OS

## Build

Before the first launch — or after any code changes — the project **must be rebuilt**:

```bash
npm install
npm run build
```

This compiles TypeScript source from `src/` into JavaScript in the `dist/` directory.

## Running on Windows

### Option 1 — Using `start.bat`

Simply double-click `start.bat` (or run it from a terminal). Make sure to **Run as Administrator**.

```bat
start.bat
```

### Option 2 — Using npm

```bash
npm start
```

### Option 3 — Directly with Node

```bash
node dist/index.js
```

### Autorun at Startup (on Windows only)

To run automatically on every Windows boot:

1. Press `Win + R` and enter: `taskschd.msc`
2. Create a new task with **administrator permissions**
3. Set the trigger to **"At startup"** or **"At log on"**
4. Set the action to run the `start.bat` file

## Customization

Edit [`src/stopItemNames.ts`](src/stopItemNames.ts) to configure which processes and services should be blocked. After making changes, don't forget to rebuild:

```bash
npm run build
```

## License

[MIT](LICENSE) © Volodymyr Ustilkin
