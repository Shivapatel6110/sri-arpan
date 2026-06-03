import { useState } from "react";
import API from "../api/bookingApi";

function ChadhavaForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "chadhava",
    temple: "",
    city: "",
    offeringType: "",
    amount: "",
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
        type: "chadhava",
        temple: "",
        city: "",
        offeringType: "",
        amount: "",
      });
    } catch (error) {
      console.log(error);
      alert("Chadhava Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "500px",
          padding: "30px",
          borderRadius: "12px",
          background: "#fff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>🌸 Offer Chadhava</h2>

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

          <select
            type="text"
            name="temple"
            placeholder="Temple Name"
            value={formData.temple}
            onChange={handleChange}
          >
            <option value="">
              Select Temple
            </option>
            <option value="Ram Janmabhoomi Mandir">
              Ram Janmabhoomi Mandir
            </option>
            <option value="Kashi Vishwanath Temple">
              Kashi Vishwanath Temple
            </option>
            <option value="Venkateswara Temple">Venkateswara Temple</option>
            <option value="Jagannath Temple">Jagannath Temple</option>
            <option value="Harmandir Sahib (Golden Temple)">
              Harmandir Sahib (Golden Temple)
            </option>
            <option value="Meenakshi Amman Temple">
              Meenakshi Amman Temple
            </option>
            <option value="Ramanathaswamy Temple">Ramanathaswamy Temple</option>
            <option value="Somnath Temple">Somnath Temple</option>
            <option value="Dwarkadhish Temple">Dwarkadhish Temple</option>
            <option value="Badrinath Temple">Badrinath Temple</option>
            <option value="Kedarnath Temple">Kedarnath Temple</option>
            <option value="Mansa Devi Temple">Mansa Devi Temple</option>
            <option value="Neelkanth Mahadev Temple">
              Neelkanth Mahadev Temple
            </option>
            <option value="Sai Baba Samadhi Mandir">
              Sai Baba Samadhi Mandir
            </option>
            <option value="Brihadisvara Temple">Brihadisvara Temple</option>
            <option value="Mahakaleshwar Jyotirlinga">
              Mahakaleshwar Jyotirlinga
            </option>
            <option value="Kamakhya Temple">Kamakhya Temple</option>
            <option value="Bhagavathy Amman Temple">
              Bhagavathy Amman Temple
            </option>
            <option value="Vaishno Devi Temple">Vaishno Devi Temple</option>
            <option value="Vishnupad Temple">Vishnupad Temple</option>
            <option value="Konark Sun Temple">Konark Sun Temple</option>
            <option value="Kamakshi Amman Temple">Kamakshi Amman Temple</option>
            <option value="Thillai Nataraja Temple">
              Thillai Nataraja Temple
            </option>
            <option value="Virupaksha Temple">Virupaksha Temple</option>
            <option value="Kandariya Mahadeva Temple">
              Kandariya Mahadeva Temple
            </option>
            <option value="Kalaram Temple">Kalaram Temple</option>
            <option value="Trimbakeshwar Jyotirlinga">
              Trimbakeshwar Jyotirlinga
            </option>
            <option value="Krishna Janmabhoomi Temple">
              Krishna Janmabhoomi Temple
            </option>
            <option value="Banke Bihari Temple">Banke Bihari Temple</option>
            <option value="Kamadgiri Temple">Kamadgiri Temple</option>
            <option value="Brahma Temple">Brahma Temple</option>
            <option value="Murugan Temple">Murugan Temple</option>
            <option value="Guruvayur Temple">Guruvayur Temple</option>
            <option value="Ayyappa Temple">Ayyappa Temple</option>
          </select>

          <select
           name="city" 
          value={formData.city} 
          onChange={handleChange}
          >
            <option value="">Select city of Temple</option>
            <option value="Amritsar">Amritsar</option>
            <option value="Ayodhya">Ayodhya</option>
            <option value="Badrinath">Badrinath</option>
            <option value="Chidambaram">Chidambaram</option>
            <option value="Chitrakoot">Chitrakoot</option>
            <option value="Dwarka">Dwarka</option>
            <option value="Gaya">Gaya</option>
            <option value="Guruvayur">Guruvayur</option>
            <option value="Guwahati">Guwahati</option>
            <option value="Hampi">Hampi</option>
            <option value="Haridwar">Haridwar</option>
            <option value="Kanchipuram">Kanchipuram</option>
            <option value="Kanyakumari">Kanyakumari</option>
            <option value="Katra">Katra</option>
            <option value="Kedarnath">Kedarnath</option>
            <option value="Khajuraho">Khajuraho</option>
            <option value="Konark">Konark</option>
            <option value="Madurai">Madurai</option>
            <option value="Mathura">Mathura</option>
            <option value="Nashik">Nashik</option>
            <option value="Palani">Palani</option>
            <option value="Puri">Puri</option>
            <option value="Pushkar">Pushkar</option>
            <option value="Rameswaram">Rameswaram</option>
            <option value="Rishikesh">Rishikesh</option>
            <option value="Sabarimala">Sabarimala</option>
            <option value="Shirdi">Shirdi</option>
            <option value="Somnath">Somnath</option>
            <option value="Tanjore">Tanjore</option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Tirupati">Tirupati</option>
            <option value="Trimbak">Trimbak</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Varanasi">Varanasi</option>
            <option value="Vrindavan">Vrindavan</option>
          </select>

          <select
            name="offeringType"
            value={formData.offeringType}
            onChange={handleChange}
          >
            <option value="">Select Offering</option>
            <option value="Flowers">Flowers</option>
            <option value="Prasad">Prasad</option>
            <option value="Coconut">Coconut</option>
            <option value="Sweets">Sweets</option>
            <option value="Milk">Milk</option>
          </select>

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
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
            }}
          >
            Offer Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChadhavaForm;
