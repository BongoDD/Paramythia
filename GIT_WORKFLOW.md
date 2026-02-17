# Git and GitHub Workflow Guide

This guide helps you verify and use Git/GitHub integration with Visual Studio and Visual Studio Code.

## Verifying Git Connection

### Check Git Installation

```bash
git --version
```

Should show version 2.x or higher.

### Check Repository Connection

```bash
# View remote repository URL
git remote -v

# Should show:
# origin  https://github.com/BongoDD/Paramythia.git (fetch)
# origin  https://github.com/BongoDD/Paramythia.git (push)
```

### Test GitHub Authentication

```bash
# Check authentication status
git config --list | grep user

# Should show your name and email
# user.name=Your Name
# user.email=your.email@example.com
```

## Setting Up Git (First Time)

If Git is not configured:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use GitHub email)
git config --global user.email "your.email@example.com"

# Verify settings
git config --list
```

## Using Git with Visual Studio Code (Recommended)

### 1. Install VS Code Extensions

Open VS Code and install these recommended extensions:
- **GitLens** - Supercharge Git capabilities
- **Git Graph** - View Git history visually
- **Git History** - View and search Git log
- **GitHub Pull Requests** - Manage PRs directly in VS Code

These are already listed in `.vscode/extensions.json` and VS Code will prompt you to install them.

### 2. Verify Repository in VS Code

1. Open the Paramythia folder in VS Code
2. Click the Source Control icon (Ctrl+Shift+G)
3. You should see your repository and changes
4. The status bar should show the current branch

### 3. Basic Git Operations in VS Code

**View Changes:**
- Click Source Control icon (Ctrl+Shift+G)
- See all modified files
- Click a file to see diff

**Stage Changes:**
- Click the + icon next to a file
- Or click + next to "Changes" to stage all

**Commit Changes:**
- Type a commit message
- Press Ctrl+Enter or click the checkmark

**Push to GitHub:**
- Click the "..." menu in Source Control
- Select "Push" or "Sync Changes"
- Or use the sync icon in the status bar

**Pull from GitHub:**
- Click the "..." menu
- Select "Pull"
- Or click the sync icon

**Create Branch:**
- Click the branch name in status bar
- Select "Create new branch"
- Enter branch name

### 4. GitLens Features

With GitLens installed:
- **Inline Blame:** See who changed each line
- **File History:** Right-click file → "Open File History"
- **Compare:** Compare branches, commits, or files
- **Search Commits:** Find commits by message, author, or file

## Using Git with Visual Studio (Full IDE)

### 1. Open Repository

1. Launch Visual Studio
2. File → Open → Folder
3. Select the Paramythia folder
4. Visual Studio will detect the Git repository

### 2. Team Explorer

1. View → Team Explorer (Ctrl+\, Ctrl+M)
2. See repository information
3. Access branches, commits, and sync

### 3. Basic Git Operations in Visual Studio

**View Changes:**
- Team Explorer → Changes
- See all modified files

**Stage and Commit:**
- Team Explorer → Changes
- Enter commit message
- Click "Commit All" or "Commit Staged"

**Push to GitHub:**
- Team Explorer → Sync
- Click "Push"

**Pull from GitHub:**
- Team Explorer → Sync
- Click "Pull"

**Create Branch:**
- Team Explorer → Branches
- Right-click → New Local Branch

### 4. Git Settings in Visual Studio

- Tools → Options → Source Control → Git Global Settings
- Verify your name and email
- Configure merge and diff tools

## Common Git Workflows

### Making Changes

```bash
# 1. Ensure you're on the right branch
git branch
git checkout main  # or your working branch

# 2. Pull latest changes
git pull origin main

# 3. Create a new branch (optional, recommended)
git checkout -b feature/my-new-feature

# 4. Make your changes to files

# 5. Check what changed
git status
git diff

# 6. Stage changes
git add .  # Add all files
# or
git add specific-file.tsx  # Add specific file

# 7. Commit changes
git commit -m "Description of changes"

# 8. Push to GitHub
git push origin feature/my-new-feature
```

### Syncing with GitHub

```bash
# Pull latest changes from GitHub
git pull origin main

# Push your changes to GitHub
git push origin your-branch-name

# Sync (pull then push)
git pull && git push
```

### Working with Branches

```bash
# List all branches
git branch -a

# Create new branch
git checkout -b new-branch-name

# Switch to existing branch
git checkout branch-name

# Delete branch
git branch -d branch-name
```

### Checking Repository Status

```bash
# See current status
git status

# See commit history
git log --oneline -10

# See changes in files
git diff

# See remote repository
git remote -v
```

## Troubleshooting

### Problem: "Git is not recognized"

**Solution:**
1. Install Git from https://git-scm.com/
2. Restart your terminal/IDE
3. Verify: `git --version`

### Problem: "Permission denied (publickey)"

**Solution:**
Use HTTPS instead of SSH:
```bash
git remote set-url origin https://github.com/BongoDD/Paramythia.git
```

### Problem: "Authentication failed"

**Solution:**
1. Use GitHub Personal Access Token
2. Go to GitHub → Settings → Developer Settings → Personal Access Tokens
3. Generate new token with `repo` scope
4. Use token as password when pushing

### Problem: "Merge conflicts"

**Solution:**
1. Open conflicted file
2. Look for `<<<<<<<`, `=======`, `>>>>>>>` markers
3. Edit to resolve conflicts
4. Save file
5. `git add conflicted-file.tsx`
6. `git commit -m "Resolved merge conflict"`

### Problem: "Can't push to repository"

**Solution:**
1. Ensure you have write permissions on GitHub
2. Pull first: `git pull origin main`
3. Resolve any conflicts
4. Try pushing again: `git push origin main`

## Best Practices

### Commit Messages

✅ **Good:**
- "Add Firebase deployment configuration"
- "Fix responsive navigation menu"
- "Update README with deployment instructions"

❌ **Bad:**
- "Update"
- "Fix stuff"
- "Changes"

### When to Commit

- Commit after completing a logical unit of work
- Commit before switching branches
- Commit before major refactoring
- Don't commit broken code to main branch

### Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/xyz` - New features
- `fix/xyz` - Bug fixes
- `hotfix/xyz` - Urgent production fixes

## VS Code Settings for Git

The repository includes `.vscode/settings.json` with Git optimizations:
- Auto-fetch from remote
- Smart commit enabled
- Push notifications
- Git Graph integration

## GitHub Features

### Pull Requests

1. Push your branch to GitHub
2. Visit https://github.com/BongoDD/Paramythia
3. Click "Compare & pull request"
4. Fill in description
5. Request reviewers
6. Click "Create pull request"

### Issues

Track bugs and features:
1. Go to repository Issues tab
2. Click "New issue"
3. Describe the issue
4. Add labels (bug, enhancement, etc.)
5. Assign to someone

### GitHub Desktop (Alternative)

If you prefer a GUI:
1. Download GitHub Desktop
2. File → Add Local Repository
3. Select Paramythia folder
4. Use visual interface for Git operations

## Quick Reference

| Task | VS Code | Command Line |
|------|---------|--------------|
| View status | Source Control panel | `git status` |
| Stage all | Click + next to Changes | `git add .` |
| Commit | Enter message, Ctrl+Enter | `git commit -m "message"` |
| Push | Click sync icon | `git push` |
| Pull | Click sync icon | `git pull` |
| New branch | Click branch name in status | `git checkout -b name` |
| Switch branch | Click branch name, select | `git checkout name` |

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitLens Documentation](https://gitlens.amod.io/)
- [VS Code Git Support](https://code.visualstudio.com/docs/editor/versioncontrol)

---

**Your Git repository is properly connected!** Use this guide to work efficiently with version control. 🎉
