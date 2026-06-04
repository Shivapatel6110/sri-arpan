/* import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
      default: "booking",
    },

    pujaName: {
      type: String,
      default: "",
    },

    temple: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    offeringType: {
      type: String,
      default: "",
    },

    charityType: {
      type: String,
      default: "",
    },

    amount: {
      type: Number,
      required: true,
    },

    paymentId: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", bookingSchema); 

*/