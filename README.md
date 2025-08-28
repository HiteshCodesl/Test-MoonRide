📊 Dashboard & Authentication App

A full-stack Next.js application with authentication (email + OAuth), a modern dashboard UI, and interactive charts built using Chart.js.

🚀 Features

🔑 Authentication

Sign Up & Login with Email/Password

OAuth Login with Google & GitHub (NextAuth)

🖥️ Dashboard

KPI cards with dynamic growth indicators (green ↑ for positive, red ↓ for negative)

Revenue Bar Chart (responsive with Chart.js)

Product Donut Chart showing top products with percentage share

"Add Profile" feature with a dialog form for adding user details

🌙 Dark Mode Support (toggle switch using NextThemes)

🎨 Responsive and modern UI built with TailwindCSS + shadcn/ui

📂 Proper App Router structure:

/login and /signup → no sidebar

/dashboard → sidebar + analytics

🛠️ Tech Stack

Next.js 14 (App Router)

NextAuth.js
 for authentication

Tailwind CSS
 for styling

shadcn/ui
 for UI components

Chart.js
 + react-chartjs-2 wrapper for charts

Lucide Icons
 for icons

📷 Screenshots
![Login](./public/login.png)
![Dashboard](./public/Dashboard.png)
🔐 Authentication

Signup Page


Login Page


📊 Dashboard

⚡ Getting Started
1️⃣ Clone the repo
git clone https://github.com/HiteshCodesl/Test-MoonRide.git
cd moonride

2️⃣ Install dependencies
pnpm install

3️⃣ Setup environment variables

Create a .env.local file in the root and add:

DATABASE_URL=postgresql://user:password@localhost:5432/mydb
NEXTAUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret

4️⃣ Run Prisma migrations
npx prisma migrate dev

5️⃣ Start the dev server
npm run dev


App runs on 👉 http://localhost:3000

📌 Roadmap

 Add role-based access control

 Deploy on Vercel