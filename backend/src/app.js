import express from "express";
import cors from "cors";
// import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Booking Routes
// app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Sri Arpan Backend Running",
  });
});

export default app;