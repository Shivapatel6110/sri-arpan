import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getChadhavaById, updateChadhava } from "../api/chadhavaApi";
import "../styles/admin.css";

const AdminEditChadhava = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
  });

  useEffect(() => {
    fetchChadhava();
  }, []);

  const fetchChadhava = async () => {
    try {
      const res = await getChadhavaById(id);

      setFormData({
        title: res.data.title || "",
        description: res.data.description || "",
        items: Array.isArray(res.data.items) ? res.data.items.join(", ") : "",
        included: Array.isArray(res.data.included)
          ? res.data.included.join(", ")
          : "",
        templeName: res.data.templeName || "",
        address: res.data.address || "",
        date: res.data.date ? res.data.date.split("T")[0] : "",
        occasion: res.data.occasion || "",
        offeredTime: res.data.offeredTime || "",
        price: res.data.price || "",
        photo: res.data.photo || "",
        video: res.data.video || "",
        rating: res.data.rating || "",
        bookingCount: res.data.bookingCount || 0,
        totalOffering: res.data.totalOffering || 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    updatedData.totalOffering =
      Number(updatedData.price || 0) * Number(updatedData.bookingCount || 0);

    setFormData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      await updateChadhava(id, data);

      alert("Updated Successfully");

      navigate("/admin/chadhava");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit} className="admin-form">
        <Link
          to="/admin/chadhava"
          className="back-btn"
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
            background: "var(--gold-light)",
          }}
        >
          ← Back to List
        </Link>
        <h1>Edit Chadhava</h1>

        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
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
          placeholder="Occasion"
          value={formData.occasion}
          onChange={handleChange}
        />
        <label>Offered Time</label>
        <input
          type="time"
          name="offeredTime"
          value={formData.offeredTime}
          onChange={handleChange}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <label>Photo URL</label>
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={formData.photo}
          onChange={handleChange}
        />
        <label>Video URL</label>
        <input
          type="text"
          name="video"
          placeholder="Video URL"
          value={formData.video}
          onChange={handleChange}
        />
        <label>Rating</label>
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          min="0"
          max="5"
          step="0.1"
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

        <button type="submit">Update Chadhava</button>
      </form>
    </div>
  );
};

export default AdminEditChadhava;
