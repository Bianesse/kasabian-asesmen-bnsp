# Web SMKN 2 CIMAHI

> Modern web application built with Next.js, Tailwind CSS, and Prisma for news and user data management.

---

## 🚀 Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS  
- **Backend:** Next.js API Routes, Prisma ORM  
- **Database:** PostgreSQL (Neon Serverless)

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js >= 18  
- npm or yarn  
- Database (Neon Serverless)  

---

## ⚡ Setup Project

### 1. Clone repository
```bash
git clone https://github.com/Bianesse/kasabian-asesmen-bnsp
cd kasabian-asesmen-bnsp
```

### 2. Install dependencies
```bash
npm install

```

### 3. Setup environment variables
Create a `.env` file in the root project directory:

```env
Example provided in env.example
```

> **Note:** Adjust the database connection string according to your local setup.

### 4. Generate Prisma Client & Migrate Database
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Seed Database (Optional)
```bash
npx prisma db seed
```

### 6. Run Development Server
```bash
npm run dev
# or
yarn dev
```

🌐 **Access the application at:** [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Run development server |
| `build` | Build project for production |
| `start` | Run production server |


---