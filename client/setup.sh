#!/bin/bash

# Paramythia Setup Script
# This script helps set up the Paramythia project

echo "🚀 Paramythia Setup Script"
echo "=========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js version $NODE_VERSION detected"
    echo "Please upgrade to Node.js 18 or higher"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo "✅ npm $(npm -v) detected"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "Please run this script from the client directory:"
    echo "  cd client"
    echo "  ./setup.sh"
    exit 1
fi

echo "📦 Installing dependencies..."
echo "This may take 1-3 minutes..."
echo ""

# Install dependencies
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "🎉 You can now run the development server:"
    echo "   npm run dev"
    echo ""
    echo "The app will be available at http://localhost:3000"
else
    echo ""
    echo "❌ Installation failed!"
    echo "Please check the error messages above"
    echo ""
    echo "Common solutions:"
    echo "  1. Check your internet connection"
    echo "  2. Clear npm cache: npm cache clean --force"
    echo "  3. Delete node_modules and try again"
    exit 1
fi
