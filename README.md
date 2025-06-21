# 💸 Full Stack AI Finance Platform with Next.js, Supabase, Prisma, TailwindCSS, Inngest, ArcJet, Shadcn UI 🚀

This is a modern **full-stack finance dashboard platform** built using cutting-edge tools like **Next.js 15**, **Supabase**, **Prisma**, **TailwindCSS**, **Inngest**, **ArcJet**, and **Shadcn UI** — with integrated **AI features** powered by Google's Gemini API.

> 🔐 Authentication powered by [Clerk.dev](https://clerk.dev/)  
> 💡 AI insights powered by [Gemini API](https://ai.google.dev)  
> 📬 Email automation via [Resend](https://resend.com/)  
> ⏱️ Background workflows via [Inngest](https://www.inngest.com/)  
> 🛡️ Security with [Arcjet](https://arcjet.com/)

---

## 📺 YouTube Tutorial (Full Credits)

This project is based on this amazing tutorial:  
🎥 [Build a Full-Stack AI Finance Platform - Code Commerce](https://www.youtube.com/watch?v=egS6fnZAdzk&t=35s)

Thanks to the creator for this incredible content!

---

## 🔗 Live Demo

**https://www.financeai64.xyz/**  


---

## 📦 Tech Stack

- **Frontend:** Next.js 15 (with App Router), React 19 RC, TailwindCSS
- **Backend:** Supabase (PostgreSQL), Prisma ORM
- **Authentication:** Clerk
- **AI Services:** Google Gemini
- **Email API:** Resend
- **Security:** ArcJet
- **UI Components:** Shadcn UI, Radix
- **Workflows & Tasks:** Inngest
- **Others:** Zod, Lucide Icons, Recharts, React Hook Form

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd ai-finance-platform
````

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database URLs
DATABASE_URL=
DIRECT_URL=

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI API
GEMINI_API_KEY=

# Email Service
RESEND_API_KEY=

# ArcJet Security
ARCJET_KEY=
```

> 💡 You will get `DATABASE_URL` from your Supabase project settings.
> For Clerk, follow [Clerk Docs](https://clerk.dev/docs) to generate the keys.

---

### 4️⃣ Generate Prisma Client

```bash
npx prisma generate
```

And apply migrations if necessary:

```bash
npx prisma migrate dev
```

---

### 5️⃣ Start the Development Server

```bash
npm run dev
```

> The app will be available at `http://localhost:3000`

---

## 🧠 Features

* 🔐 Authentication with Clerk
* 💬 AI-powered financial insights using Gemini API
* 📊 Financial dashboard with Recharts
* 📤 Email notifications via Resend
* 🔄 Serverless workflows using Inngest
* 🛡️ Security layer via ArcJet
* ✨ Beautiful UI with Shadcn UI + TailwindCSS
* ✅ Fully type-safe using Zod and TypeScript
* 🌙 Dark mode & theme support

---

## ✨ Credits

This project is inspired and guided by this tutorial:
📺 [Build a Full-Stack AI Finance Platform (YouTube)](https://www.youtube.com/watch?v=egS6fnZAdzk&t=35s)

Big thanks to the creator for the awesome breakdown and UI/UX design!

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Connect

Made with ❤️ by Shreyas Pathe(https://github.com/ShreyasPathe)
Feel free to contribute or raise issues!
```
