# Event Booking API

REST API backend for an event booking platform. Users can register, browse and
book events; organizers can create and manage events; admins oversee users,
events, bookings, and payments. Built with **Node.js**, **Express**, and
**MongoDB**.

> Frontend: [event-booking-web](https://github.com/KalyaniHari/event-booking-web)

## Features

- JWT-based authentication for users, organizers, and admins
- Password hashing with bcrypt
- Event CRUD for organizers
- Booking and payment endpoints for users
- Admin endpoints for managing users, events, bookings, and payments

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (`jsonwebtoken`), `bcrypt`, `cors`, `dotenv`

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   # edit .env with your MongoDB connection string and a JWT secret
   ```

3. **Run the server**
   ```bash
   npm run dev   # development (nodemon)
   npm start     # production
   ```
   The API runs on the port set in `.env` (default `5000`).

## API Overview

Base URL: `http://localhost:<PORT>`

| Area | Method & Path | Description |
|------|---------------|-------------|
| Auth | `POST /api/auth/register` | Register an organizer/account |
| Auth | `POST /api/auth/login` | Log in, returns JWT |
| Auth | `GET /api/auth/organizer/:id` | Get organizer details |
| Users | `POST /api/users/register` | Register a user |
| Users | `POST /api/users/login` | User login |
| Users | `PUT /api/users/profile` | Update profile (auth) |
| Users | `POST /api/users/booking` | Create a booking |
| Users | `POST /api/users/payment` | Record a payment |
| Users | `GET /api/users/events` | List events |
| Users | `GET /api/users/bookings/:id` | Get a user's bookings |
| Events | `POST /api/events` | Create an event |
| Events | `PUT /api/events/:id` | Edit an event |
| Events | `DELETE /api/events/:id` | Delete an event |
| Events | `GET /api/events/getevents/:id` | Get events for an organizer |
| Admin | `GET /api/admin/users` | List all users |
| Admin | `GET /api/admin/events` | List all events |
| Admin | `GET /api/admin/bookings` | List all bookings |
| Admin | `GET /api/admin/payment` | List all payments |

Protected routes expect an `Authorization: Bearer <token>` header.

## Security

Secrets are loaded from `.env`, which is git-ignored. Do not commit real
credentials. If a secret is ever exposed, rotate it immediately.

## License

Released under the [MIT License](LICENSE).
