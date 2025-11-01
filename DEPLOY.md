# How to Publish Your Portfolio

## Quick Deploy Guide

### Option 1: GitHub Pages (Recommended - FREE)

#### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com) and sign up

#### Step 2: Create a New Repository
1. Click the "+" icon → "New repository"
2. Name it: `portfolio` (or `yourname.github.io` for custom domain)
3. Make it **Public** (required for free GitHub Pages)
4. Check "Add a README file"
5. Click "Create repository"

#### Step 3: Upload Your Files
**Option A: Using GitHub Website (Easiest)**
1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop all files from your `portfolio` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Click "Commit changes"

**Option B: Using Git (Command Line)**
```bash
cd C:\Users\lukel\gesture_cursor\portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

#### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll to **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

**Note:** If you named your repo `username.github.io`, it will be at: `https://username.github.io`

---

### Option 2: Netlify (Super Easy - FREE)

#### Method 1: Drag & Drop
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Drag your entire `portfolio` folder onto the Netlify dashboard
3. Done! You'll get a URL like `random-name-123.netlify.app`
4. You can rename it in Site settings → Domain settings

#### Method 2: Connect GitHub
1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select your portfolio repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `portfolio` (or `/` if root)
6. Click "Deploy site"
7. Your site is live!

---

### Option 3: Vercel (Also Easy - FREE)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New..." → "Project"
3. Import your GitHub repository (or drag & drop)
4. Click "Deploy"
5. Your site is live at `your-project.vercel.app`

---

## Adding a Custom Domain

### Buy a Domain
- **Namecheap** - ~$10/year
- **Google Domains** - ~$12/year
- **Cloudflare** - ~$8-10/year

### Connect Domain to GitHub Pages
1. In your GitHub repo: Settings → Pages
2. Under "Custom domain", enter your domain
3. Update your domain's DNS settings:
   - Add an A record pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record: `yourusername.github.io`

### Connect Domain to Netlify/Vercel
1. In site settings, go to Domain settings
2. Add your custom domain
3. Follow their DNS instructions (usually just update nameservers)

---

## Continuous Deployment (Auto-Updates)

### GitHub + Netlify/Vercel
1. Connect your GitHub repo to Netlify/Vercel
2. Every time you push changes to GitHub, your site auto-deploys
3. Perfect for keeping your portfolio updated!

**Workflow:**
```bash
# Make changes to your files
git add .
git commit -m "Update portfolio"
git push
# Site automatically updates in ~30 seconds!
```

---

## Testing Before Publishing

1. **Local Testing**: Open `index.html` in browser
2. **Test Responsive**: Use browser dev tools (F12) to test mobile
3. **Check Links**: Make sure all navigation links work
4. **Validate HTML**: Use [validator.w3.org](https://validator.w3.org)

---

## Tips

- **Use HTTPS**: All these platforms provide free SSL certificates
- **SEO**: Update meta tags in `index.html` for better search visibility
- **Analytics**: Add Google Analytics to track visitors (optional)
- **Backup**: Keep a local copy of all files
- **Version Control**: Use Git to track changes

---

## Quick Reference URLs

- GitHub Pages: [pages.github.com](https://pages.github.com)
- Netlify: [netlify.com](https://netlify.com)
- Vercel: [vercel.com](https://vercel.com)
- Cloudflare Pages: [pages.cloudflare.com](https://pages.cloudflare.com)

---

**Need Help?** All these platforms have excellent documentation and support communities!
