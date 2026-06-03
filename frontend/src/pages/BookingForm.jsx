import { useState } from "react";
import API from "../api/bookingApi";
import { useLocation } from "react-router-dom";
import pujaBg from "../assets/Satyanarayan Puja.png";

function BookingForm() {
  const location = useLocation();
 

 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  type: "booking",
  pujaName: location.state?.pujaName || "",
  temple: location.state?.temple || "",
  city: location.state?.city || "",
  amount: location.state?.amount || "",
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookingData = {
        ...formData,
        paymentId: "pay_demo123",
        status: "Paid",
      };

      const res = await API.post("/bookings/create", bookingData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "booking",
        pujaName: "",
        temple: "",
        city: "",
        amount: "",
      });
    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        //backgroundImage: `url(${pujaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "rgba(255,255,255,0.1)",
          padding: "30px",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      > 
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#7a0019",
          }}
        >
          Book a Puja
        </h2>

        <div
  style={{
    background: "#fff7e6",
    border: "1px solid #ffd591",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  <h3 style={{ margin: "0 0 10px" }}>
    🛕 {formData.temple}
  </h3>

  <p style={{ margin: "5px 0" }}>
    📍 {formData.city}
  </p>

  <p style={{ margin: "5px 0" }}>
    🪔 {formData.pujaName}
  </p>

  <p
    style={{
      color: "#ff7a1a",
      fontWeight: "bold",
      fontSize: "18px",
      marginTop: "10px",
    }}
  >
    ₹ {formData.amount}
  </p>
</div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          

          <button
            type="submit"
            style={{
              background: "#ff7a1a",
              color: "#fff",
              border: "none",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
