# Quick Fix Guide - "next is not recognized" Error

## The Problem You're Experiencing

```
'next' is not recognized as an internal or external command,
operable program or batch file.
```

## Why This Happens

You tried to run `npm run dev` before installing the project dependencies. The `next` command lives in the `node_modules` folder, which doesn't exist until you run `npm install`.

## The Solution (Choose One)

### Option 1: Quick Manual Fix (30 seconds)

```bash
cd client
npm install
npm run dev
```

Wait 1-3 minutes for installation, then the server will start!

### Option 2: Automated Script - Windows

```bash
cd client
setup.bat
```

Double-click `setup.bat` or run it from Command Prompt/PowerShell.

### Option 3: Automated Script - Mac/Linux

```bash
cd client
./setup.sh
```

The script will check everything and install automatically.

## What npm install Does

- Downloads 442 packages (~265MB)
- Creates `node_modules` folder with all dependencies
- Installs Next.js, React, Firebase, TypeScript, Tailwind
- Takes about 1-3 minutes

## After Installation

You'll see:
```
✓ added 442 packages in 9s
✓ found 0 vulnerabilities
```

Now you can run:
```bash
npm run dev
```

And you'll see:
```
▲ Next.js 16.1.6 (Turbopack)
- Local:         http://localhost:3000
✓ Ready in 603ms
```

## Visit Your App

Open your browser to: **http://localhost:3000**

You should see the beautiful Paramythia homepage! 🎉

## Need More Help?

- **Detailed Guide:** Read [SETUP.md](SETUP.md)
- **Project Overview:** Read [README.md](README.md)
- **Firebase Setup:** Read [FIREBASE_GUIDE.md](FIREBASE_GUIDE.md)

## Common Questions

**Q: Do I need to run npm install every time?**
A: No! Only the first time, or after updating `package.json`

**Q: Can I delete node_modules?**
A: Yes, it's gitignored. But you'll need to run `npm install` again.

**Q: Why isn't node_modules in GitHub?**
A: It's too large (265MB). Each developer installs their own copy.

**Q: I'm getting permission errors**
A: On Windows, run as Administrator. On Mac/Linux, see SETUP.md for solutions.

---

**Remember:** Always `npm install` before `npm run dev`! 🚀
