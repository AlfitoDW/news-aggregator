📰 News Aggregator

A modern News Aggregator Web Application built with Next.js, NextAuth, Prisma, and PostgreSQL, featuring Google Authentication, Credential Login, and real-time news from trusted sources.

🔗 Live Demo:
https://news-aggregator-umber-chi.vercel.app

✨ Features

🔐 Authentication with NextAuth

Google OAuth

Email & Password (Credentials)

📰 News Aggregation (GNews API)

👤 User Management (Prisma + PostgreSQL)

🔄 JWT Session Strategy

🌐 Fully deployed on Vercel

🧠 Secure environment variables

📱 Responsive UI

🛠 Tech Stack
Technology	Description
Next.js	React Framework
NextAuth.js	Authentication
Prisma	ORM
PostgreSQL	Database
Google OAuth	Social Login
Vercel	Deployment
Tailwind CSS	Styling
GNews API	News Provider
📂 Project Structure
.
├── app/
│   ├── auth/
│   │   ├── [...nextauth]/
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   └── reset-password/
│   ├── profile/
│   └── page.tsx
│
├── lib/
│   ├── prisma.ts
│   └── auth.ts
│
├── prisma/
│   └── schema.prisma
│
├── .env
├── next.config.js
└── README.md

🔐 Environment Variables

Create a .env file:

# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# NextAuth
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://news-aggregator-umber-chi.vercel.app

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GNews API
GNEWS_API_KEY=your_api_key

# Cloudinary (Optional)
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

# SMTP (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
EMAIL_FROM="News Aggregator <your_email@gmail.com>"

🔑 Google OAuth Setup
Authorized JavaScript Origins
http://localhost:3000
https://news-aggregator-umber-chi.vercel.app

Authorized Redirect URIs
http://localhost:3000/api/auth/callback/google
https://news-aggregator-umber-chi.vercel.app/api/auth/callback/google

⚙️ Installation & Setup
# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Run database migration
npx prisma migrate dev

# Run development server
npm run dev

🚀 Deployment (Vercel)

Push project to GitHub

Import project to Vercel

Add Environment Variables

Set:

NEXTAUTH_URL=https://your-domain.vercel.app

Alfito Darma Wijaya
📍 Indonesia
💻 Web Developer
🚀 Passionate about Fullstack & Backend Development

⭐ Support

If this project helps you, please consider giving it a ⭐ on GitHub!
