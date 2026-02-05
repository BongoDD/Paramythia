# Paramythia

An educational book and play store for children.

## 📁 Project Structure

This is a monorepo project with the following structure:

```
Paramythia/
├── client/          # Next.js frontend application
│   ├── app/         # Next.js App Router pages
│   ├── src/
│   │   └── lib/     # Shared libraries (Firebase config, etc.)
│   └── public/      # Static assets
├── server/          # Backend server logic
│   └── services/    # Firebase Cloud Functions and API services
└── firebase.json    # Firebase configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Firebase CLI (optional): `npm install -g firebase-tools`

### Installation

1. **Install client dependencies:**
   ```bash
   cd client
   npm install
   ```

2. **Install server dependencies (when ready):**
   ```bash
   cd server
   npm install
   ```

### Development

**Run the Next.js development server:**
```bash
cd client
npm run dev
```

The application will be available at `http://localhost:3000`.

**Build for production:**
```bash
cd client
npm run build
```

## 🔥 Firebase Integration

### Configuration
The Firebase configuration is located in `client/src/lib/firebase.ts`. The app is already connected to the Paramythia Firebase project.

### Managing Firebase Features

You can manage Firebase through multiple environments:

1. **Firebase Console** (Recommended for most tasks)
   - Visit: https://console.firebase.google.com/
   - Project: `paramythia-88562`
   - Manage: Authentication, Firestore, Storage, Hosting, Analytics

2. **Firebase CLI** (For deployments and advanced features)
   ```bash
   # Install globally
   npm install -g firebase-tools
   
   # Login to Firebase
   firebase login
   
   # Deploy
   firebase deploy
   ```

3. **Visual Studio Code** (Recommended for development)
   - Install Firebase extensions:
     - "Firebase Explorer" for managing Firebase services
     - "Firebase Snippets" for code completion
   - Use the integrated terminal for Firebase CLI commands

4. **Visual Studio** (Can be used but not optimal)
   - Visual Studio can be used for editing code
   - However, Firebase CLI should be used for Firebase-specific operations
   - Better suited for .NET/C# projects than JavaScript/TypeScript

### Available Firebase Services
- **Authentication**: User management and authentication
- **Firestore**: NoSQL database for storing data
- **Storage**: File storage for images and media
- **Hosting**: Static site hosting (configured for Next.js)
- **Analytics**: User behavior tracking
- **Cloud Functions**: Serverless backend logic (in `/server`)

## 🎨 Theme

The application uses a warm, welcoming "Fairytale" theme with earth tones:
- **Cream** (#FEFCF5) - Main background
- **Sand** (#F4E1D2) - Headers and cards
- **Sage** (#A3B18A) - Natural accent
- **Terracotta** (#D4A373) - Warm highlights
- **Chocolate** (#583101) - Text color

## 📝 Version Naming

This is **Paramythia V1** - the initial version of the educational book and play store.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+, React, TypeScript, Tailwind CSS v4
- **Backend**: Firebase (Authentication, Firestore, Cloud Functions)
- **Deployment**: Firebase Hosting
- **Development**: Node.js, npm

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)