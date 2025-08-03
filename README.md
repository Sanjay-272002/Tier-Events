# 🎟️ Event Tier Showcase Platform

This project is a **tier-based event listing application** built using:

- 🧩 **Next.js 14 App Router**
- 🔐 **Clerk.dev for Authentication**
- 🗃️ **Supabase (PostgreSQL) for Event Data**
- 🎨 **Tailwind CSS** for styling

Events are accessible based on the **user's tier (Free, Silver, Gold, Platinum)**. Google OAuth is integrated via Clerk for easy sign-up and sign-in.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. 📁 Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
create .env.local 
copy the below sample 

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/onboarding
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/onboarding
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=E
NEXT_PUBLIC_CLERK_SIGN_OUT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/onboarding
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/onboarding
NEXT_PUBLIC_SUPABASE_URL=https://ofumrwqkojqmamdyfcpr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4 Run Development Environment
```bash
npm run dev 
```

### 5. Test Credentials
Use the following credentials to test different tiers:

- Free	santest790@gmail.com	santest@27
- Silver	sddanjay27@gmail.com	sddanjay27@27
- Gold	sanjayfprtedt887@gmail.com	sanjayfprtedt887@27
- Platinum	sanj53387@gmail.com	sanj53387@27
