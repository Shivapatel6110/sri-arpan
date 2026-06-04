/*import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const {
  name,
  email,
  phone,
  type,
  pujaName,
  temple,
  city,
  offeringType,
  charityType,
  amount,
  paymentId,
  status,
} = req.body;

    const booking = await Booking.create({
      name,
      email,
      phone,
      type,
      pujaName,
      temple,
      city,
      offeringType,
      charityType,
      amount,
      paymentId,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Bookings

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}; */