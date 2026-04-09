# MaxBuy - Full Stack E-Commerce Platform

MaxBuy is a full stack e-commerce project with:

- Customer storefront (React + Vite)
- Admin dashboard (React + Vite)
- Backend API (Node.js + Express + MongoDB)

The project is organized as a monorepo with three deployable apps: frontend, admin, and backend.

## Live Deployment

This project is deployed on Vercel.

- Frontend: your frontend Vercel URL
- Admin: your admin Vercel URL
- Backend API: your backend Vercel URL

Update these links with your actual deployment URLs.

## Project Structure

```text
E-Commerce-Website/
  frontend/   # Customer-facing app
  admin/      # Admin dashboard
  backend/    # REST API + database integration
```

## Tech Stack

### Frontend and Admin

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- React Toastify

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- JWT authentication
- Bcrypt password hashing
- Cloudinary image storage
- Multer (file uploads)

## Features

### Customer App

- Browse product catalog
- View product details
- Add products to cart by size
- Update cart quantity
- Register and login
- Place orders with COD
- View order history

### Admin App

- Admin login
- Add products with multiple images
- List products
- Remove products
- View all orders
- Update order status

### Backend API

- User auth endpoints
- Product CRUD-related endpoints
- Cart management endpoints
- Order management endpoints

## API Base URL

All apps use the backend base URL from environment variables:

- frontend: VITE_BACKEND_URL
- admin: VITE_BACKEND_URL

## API Routes Summary

### User Routes

- POST /api/user/register
- POST /api/user/login
- POST /api/user/admin

### Product Routes

- POST /api/product/add
- POST /api/product/remove
- POST /api/product/single
- GET /api/product/list

### Cart Routes

- POST /api/cart/add
- POST /api/cart/get
- POST /api/cart/update

### Order Routes

- POST /api/order/place
- POST /api/order/placepaypal
- POST /api/order/userorders
- POST /api/order/list
- POST /api/order/status

## Local Development Setup

## 1. Clone and Install

```bash
git clone <your-repo-url>
cd E-Commerce-Website

cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

## 2. Environment Variables

Create a .env file inside backend:

```env
MONGODB_URI=your_mongodb_connection_string_without_db_name_suffix
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Note: backend appends maxbuy to MONGODB_URI in code, so keep the URI format compatible with that.

Create .env in frontend:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Create .env in admin:

```env
VITE_BACKEND_URL=http://localhost:4000
```

## 3. Run Applications

Run backend:

```bash
cd backend
npm run server
```

Run frontend:

```bash
cd frontend
npm run dev
```

Run admin:

```bash
cd admin
npm run dev
```


## Vercel Deployment Guide

Deploy as three separate Vercel projects.

## 1. Backend Deployment

- Import repository into Vercel
- Set Root Directory to backend
- Add backend environment variables in Vercel project settings
- Deploy

## 2. Frontend Deployment

- Create another Vercel project with Root Directory set to frontend
- Add VITE_BACKEND_URL as your deployed backend URL
- Deploy

## 3. Admin Deployment

- Create another Vercel project with Root Directory set to admin
- Add VITE_BACKEND_URL as your deployed backend URL
- Deploy

## 4. Validate CORS and API Connectivity

- Open frontend and admin deployed URLs
- Test login, product listing, add to cart, and order flows

## Notes

- COD order flow is implemented.
- PayPal route exists but payment implementation is currently pending.
- Product images are uploaded to Cloudinary.

