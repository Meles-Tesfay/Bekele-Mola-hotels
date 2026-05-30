// server.js

import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./configs/db.js"
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js"
import hotelRouter from "./routes/hotelRoutes.js"
import connectCloudinary from "./configs/cloudinary.js"
import roomRouter from "./routes/roomRoute.js"
import bookingRouter from "./routes/bookingRoutes.js"
import adminRouter from "./routes/adminRoutes.js"
import ownerRouter from "./routes/ownerRoutes.js"
import hospitalityRouter from "./routes/hospitalityRoutes.js"
import branchRouter from "./routes/branchRoutes.js"
import { stripeWebhooks } from "./controllers/stripeWebhooks.js"
import ensureAdmin, { migrateLegacyOwners } from "./utils/ensureAdmin.js"

connectDB()
connectCloudinary()
ensureAdmin().then(() => migrateLegacyOwners())

const app = express()
app.use(cors())

// 1. GLOBAL MIDDLEWARE: Process standard JSON requests for all other routes.
// FIX: Move app.use(express.json()) BELOW the Stripe webhook handler 
// to ensure the webhook gets the raw body first.
// FIX: This section MUST be moved down. (Keeping it here is the source of the error)


// FIX 1: Change the webhook route from "/api/stripe" to the correct path "/api/webhooks/stripe" 
// (based on previous context).
// FIX 2: This route MUST be placed BEFORE the app.use(express.json()) middleware.

// 2. STRIPE WEBHOOK HANDLER: Must use express.raw() and come first.
app.post("/api/webhooks/stripe", express.raw({ type: "application/json" }), stripeWebhooks)

// 3. GLOBAL MIDDLEWARE: Process standard JSON requests for all other routes.
// This is the correct placement for the standard JSON parser.
app.use(express.json())

app.get("/", (req, res) => res.send("API IS WORKING"))
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/rooms", roomRouter)
app.use("/api/bookings", bookingRouter)
app.use("/api/admin", adminRouter)
app.use("/api/owner", ownerRouter)
app.use("/api/hospitalities", hospitalityRouter)
app.use("/api/branches", branchRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))