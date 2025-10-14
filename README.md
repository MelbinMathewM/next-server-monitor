# Next Server Monitor Dashboard

A **real-time system monitoring dashboard** built with **Next.js Server Components** and **API Routes**.  
Shows CPU, Memory, and Uptime stats with dynamic routing and refresh functionality.

## Features

- ✅ Server Components + Server-side data fetching  
- ✅ Dynamic Routes: `/dashboard/[stat]`  
- ✅ API Routes for stats  
- ✅ Refresh button (server action simulation)  
- ✅ Responsive design (TailwindCSS + Shadcn UI)  
- ✅ Optional graphs (Recharts)  

## Tech Stack

- Next.js 14+ (App Router)  
- TypeScript  
- TailwindCSS + Shadcn UI  
- Recharts (optional graphs)  
- Node.js `os` or `systeminformation` library  

## Live Demo

[View Live Dashboard](https://<your-vercel-url>)

## How to Run Locally

```bash
git clone <your-repo-url>
cd next-server-monitor
npm install
npm run dev
