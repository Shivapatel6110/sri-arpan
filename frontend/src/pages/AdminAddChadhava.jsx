import React, { useState } from "react";
import { createChadhava } from "../api/chadhavaApi";
import "../styles/admin.css";
import { Link } from "react-router-dom";

const AdminAddChadhava = () => {
  const initialState = {
    title: "",
    description: "",
    items: "",
    included: "",
    templeName: "",
    address: "",
    date: "",
    occasion: "",
    offeredTime: "",
    price: "",
    photo: "",
    video: "",
    rating: "",
    bookingCount: "",
    totalOffering: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Description Validation
    if (formData.description.trim().length < 20) {
      alert("Description must be at least 20 characters long");
      return;
    }

    if (formData.description.trim().length > 1000) {
      alert("Description cannot exceed 500 characters");
      return;
    }

    // Rating Validation
    if (
      formData.rating &&
      (Number(formData.rating) < 0 || Number(formData.rating) > 5)
    ) {
      alert("Rating must be between 0 and 5");
      return;
    }

    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    if (!formData.templeName.trim()) {
      alert("Temple Name is required");
      return;
    }

    if (!formData.price || Number(formData.price) <= 0) {
      alert("Enter valid price");
      return;
    }

    try {
      const data = {
        ...formData,

        items: formData.items
          ? formData.items.split(",").map((item) => item.trim())
          : [],

        included: formData.included
          ? formData.included.split(",").map((item) => item.trim())
          : [],
      };

      await createChadhava(data);

      alert("Chadhava Added Successfully");

      setFormData(initialState);
    } catch (error) {
      console.error(error);
      alert("Failed to add Chadhava");
    }
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit} className="admin-form">
        <Link
          to="/admin/chadhava"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            background: "var(--gold-light)",
          }}
        >
          ← Back to List
        </Link>
        <h1>Add Chadhava</h1>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          required
          maxLength={150}
        />
        <p>{formData.title.length}/150</p> {/* Character count for title */}
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          maxLength={1000}
        />
        <p style={{ marginBottom: "5px" }}>
          {formData.description.length}/1000
        </p>
        <label>Items</label>
        <input
          type="text"
          name="items"
          placeholder="Items (comma separated)"
          value={formData.items}
          onChange={handleChange}
        />
        <label>Included</label>
        <input
          type="text"
          name="included"
          placeholder="Included (comma separated)"
          value={formData.included}
          onChange={handleChange}
        />
        <label>Temple Name</label>
        <input
          type="text"
          name="templeName"
          placeholder="Temple Name"
          value={formData.templeName}
          onChange={handleChange}
        />
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label>Occasion</label>
        <input
          type="text"
          name="occasion"
          placeholder="Occasion, Ex: Mahashivratri"
          value={formData.occasion}
          onChange={handleChange}
        />
        <label>Offered Time</label>
        <input
          type="time"
          name="offeredTime"
          placeholder="Offered Time"
          value={formData.offeredTime}
          onChange={handleChange}
        />
        <label>Price (₹)</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          min="1"
          value={formData.price}
          onChange={handleChange}
        />
        <label>Upload Photo </label>
        <input
          type="file"
          accept="image/*"
          name="photo"
          placeholder="Upload Photo"
          value={formData.photo}
          onChange={handleChange}
        />
        <label> Upload Video</label>
        <input
          type="file"
          accept="video/*"
          name="video"
          placeholder="Upload Video"
          value={formData.video}
          onChange={handleChange}
        />
        <label>Rating</label>
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          min="0"
          step="0.1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />
        <label>Booking Count</label>
        <input
          type="number"
          name="bookingCount"
          min="0"
          value={formData.bookingCount}
          onChange={handleChange}
        />
        <label>Total Offering</label>
        <input
          type="number"
          name="totalOffering"
          placeholder="Total Offering"
          value={formData.totalOffering}
          onChange={handleChange}
          readOnly
        />
        <div className="form-footer">
          <button type="submit">Add Chadhava</button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddChadhava;
