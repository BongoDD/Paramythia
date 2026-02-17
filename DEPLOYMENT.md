# 🚀 Deployment Guide for Paramythia

This guide provides step-by-step instructions for deploying the Paramythia project to Firebase Hosting.

## Prerequisites

Before deploying, ensure you have:

1. **Node.js 18+** installed
2. **npm** installed (comes with Node.js)
3. **Firebase CLI** installed globally:
   ```bash
   npm install -g firebase-tools
   ```
4. **Firebase account** with access to the `paramythia-88562` project

## Firebase Setup Verification

### 1. Check Firebase CLI Installation

```bash
firebase --version
```

Should show version 13.0.0 or higher.

### 2. Login to Firebase

```bash
firebase login
```

This will open your browser to authenticate with your Google account.

### 3. Verify Project Connection

```bash
firebase projects:list
```

You should see `paramythia-88562` in the list.

### 4. Set Active Project

```bash
firebase use paramythia-88562
```

Or simply:
```bash
firebase use default
```

(The project is already configured in `.firebaserc`)

## Deployment Process

### Quick Deployment (Recommended)

From the project root directory:

```bash
cd client
npm run deploy:hosting
```

This command will:
1. Build the Next.js app (`npm run build`)
2. Deploy only the hosting to Firebase (`firebase deploy --only hosting`)

### Full Deployment

To deploy all Firebase services:

```bash
cd client
npm run deploy
```

### Manual Deployment Steps

If you prefer to do it manually:

```bash
# 1. Navigate to client directory
cd client

# 2. Install dependencies (if not already done)
npm install

# 3. Build the project
npm run build

# 4. Navigate back to root
cd ..

# 5. Deploy to Firebase
firebase deploy --only hosting
```

## What Gets Deployed

The deployment includes:
- All static Next.js pages from `client/out/`
- Static assets (images, CSS, JavaScript)
- Next.js routing configuration
- Cache headers for optimal performance

## Deployment Checklist

Before deploying, ensure:

- [ ] All changes are committed to Git
- [ ] Dependencies are up to date (`npm install`)
- [ ] The project builds successfully (`npm run build`)
- [ ] Firebase CLI is installed and logged in
- [ ] You have deployment permissions for the Firebase project

## Viewing Your Deployed Site

After deployment, your site will be available at:

**Production URL:** https://paramythia-88562.web.app
**Alternative URL:** https://paramythia-88562.firebaseapp.com

## Troubleshooting

### Error: "Firebase CLI not found"

Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

### Error: "Not authorized"

Login again:
```bash
firebase logout
firebase login
```

### Error: "Build failed"

Check for errors in the build:
```bash
cd client
npm run build
```

Fix any TypeScript or build errors before deploying.

### Error: "Permission denied"

Ensure you have editor or owner access to the Firebase project:
1. Visit https://console.firebase.google.com/
2. Select the `paramythia-88562` project
3. Go to Settings → Users and permissions
4. Verify your account has appropriate permissions

### Deployment is taking too long

- Check your internet connection
- Try deploying only hosting: `firebase deploy --only hosting`
- Clear Firebase cache: `firebase deploy --only hosting --force`

## Rollback to Previous Version

If something goes wrong:

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select `paramythia-88562` project
3. Navigate to Hosting
4. Click on "Release history"
5. Find the previous working version
6. Click "Rollback" to restore it

## CI/CD (Continuous Deployment)

For automated deployments on every push, you can set up GitHub Actions. See `.github/workflows/firebase-hosting.yml` (if it exists) or refer to Firebase documentation for setting up automatic deployments.

## Environment Variables

If your project needs environment variables:

1. Create `.env.local` in the `client` directory
2. Add your variables (e.g., API keys)
3. **IMPORTANT:** Never commit `.env.local` to Git (it's already in `.gitignore`)
4. For production, set environment variables in Firebase Console or use Firebase Functions config

## Post-Deployment Verification

After deployment:

1. ✅ Visit the production URL
2. ✅ Check all pages load correctly
3. ✅ Test navigation between pages
4. ✅ Verify responsive design on mobile
5. ✅ Check browser console for errors
6. ✅ Test Firebase features (if applicable)

## Monitoring

Monitor your deployment:

- **Firebase Console:** https://console.firebase.google.com/project/paramythia-88562/hosting
- **Analytics:** View traffic and user behavior
- **Performance:** Monitor page load times
- **Errors:** Check for runtime errors

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

## Support

If you encounter issues:
1. Check this guide first
2. Review [FIREBASE_GUIDE.md](./FIREBASE_GUIDE.md) for Firebase management
3. Check [SETUP.md](./SETUP.md) for project setup
4. Visit Firebase Community: https://firebase.google.com/community

---

**Remember:** Always test locally with `npm run dev` before deploying! 🚀
