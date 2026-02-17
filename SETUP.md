# 🚀 Paramythia Setup Guide

This guide will help you set up the Paramythia project on your local machine.

## ⚠️ Before You Start

**IMPORTANT:** You must install dependencies before running the application!

## 📋 Prerequisites

Before setting up the project, ensure you have:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`
   - Should show: v18.x.x or higher

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`
   - Should show: 9.x.x or higher

3. **Git** (for cloning the repository)
   - Verify installation: `git --version`

## 🔧 Installation Steps

### Step 1: Clone the Repository

```bash
git clone https://github.com/BongoDD/Paramythia.git
cd Paramythia
```

Or if you've already cloned:
```bash
cd Paramythia
```

### Step 2: Install Client Dependencies

This is the **most important step**! You must install dependencies before running the app.

```bash
cd client
npm install
```

**Wait for installation to complete.** This will:
- Download all required packages (~442 packages)
- Create the `node_modules` folder
- Install Next.js, React, Firebase, and other dependencies
- Take 1-3 minutes depending on your internet speed

### Step 3: Run the Development Server

After installation is complete:

```bash
npm run dev
```

The application will start at: **http://localhost:3000**

## ✅ Verify Installation

After `npm install` completes, you should see:
- A `node_modules` folder in the `client` directory
- A `node_modules/.bin` folder containing executable scripts
- No errors in the terminal

## 🐛 Troubleshooting

### Error: 'next' is not recognized

**Symptom:**
```
'next' is not recognized as an internal or external command,
operable program or batch file.
```

**Cause:** You tried to run `npm run dev` before running `npm install`

**Solution:**
```bash
cd client
npm install
npm run dev
```

### Error: Cannot find module 'next'

**Solution:** Same as above - install dependencies first:
```bash
cd client
npm install
```

### Installation is taking too long

- Check your internet connection
- Try using a different npm registry:
  ```bash
  npm install --registry https://registry.npmjs.org/
  ```

### Permission errors on Linux/Mac

Use sudo if needed:
```bash
sudo npm install
```

Or fix npm permissions:
```bash
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
```

### Error: EACCES or permission denied

**On Windows:** Run your terminal/PowerShell as Administrator

**On Mac/Linux:** Use sudo or fix npm permissions (see above)

## 🎯 Quick Start Commands

Once dependencies are installed:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure After Setup

After running `npm install`, your structure should look like:

```
Paramythia/
├── client/
│   ├── node_modules/     ← Created by npm install
│   ├── app/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── package-lock.json
├── server/
└── README.md
```

## 🔥 Firebase Setup (Optional)

The Firebase configuration is already included in `client/src/lib/firebase.ts`.

To use Firebase features:
1. Visit https://console.firebase.google.com/
2. Select the "paramythia-88562" project
3. Configure services as needed

See `FIREBASE_GUIDE.md` for detailed Firebase management instructions.

## 💡 Tips

1. **Always run `npm install` first** in a new clone
2. Run commands from the `client` directory, not the root
3. If you update `package.json`, run `npm install` again
4. The `node_modules` folder is gitignored (not committed to Git)
5. Each developer must run `npm install` on their own machine

## 🆘 Still Having Issues?

1. Delete `node_modules` and `package-lock.json`:
   ```bash
   cd client
   rm -rf node_modules package-lock.json  # Linux/Mac
   # Or on Windows:
   # rmdir /s /q node_modules
   # del package-lock.json
   ```

2. Reinstall:
   ```bash
   npm install
   ```

3. Clear npm cache:
   ```bash
   npm cache clean --force
   npm install
   ```

4. Check Node.js version:
   ```bash
   node --version
   ```
   Must be v18 or higher. Update Node.js if needed.

## 📞 Getting Help

If you're still stuck:
- Check the main README.md for project overview
- Review FIREBASE_GUIDE.md for Firebase-specific help
- Open an issue on GitHub
- Check that you're in the correct directory (`client`)

---

**Remember:** Installation is required! Always run `npm install` before `npm run dev` 🚀
