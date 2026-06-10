import mongoose from "mongoose";

const chadhavaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 500,
    },

    items: [String],

    included: [String],

    templeName: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    date: String,

    occasion: String,

    offeredTime: String,

    price: {
      type: Number,
      required: true,
      min: 1,
    },

    photo: {
      type: String,
      default: "",
    },

    video: {
      type: String,
      default: "",
    },

    reviews: {
      type: Array,
      default: [],
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    bookingCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalOffering: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Chadhava", chadhavaSchema);
