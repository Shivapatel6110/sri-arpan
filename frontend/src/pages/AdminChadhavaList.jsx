import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllChadhava, deleteChadhava } from "../api/chadhavaApi";
import "../styles/admin.css";


const AdminChadhavaList = () => {
  const navigate = useNavigate();
  const [chadhavas, setChadhavas] = useState([]);

  useEffect(() => {
    fetchChadhavas();
  }, []);

  const fetchChadhavas = async () => {
    try {
      const res = await getAllChadhava();
      setChadhavas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Chadhava?",
    );

    if (!confirmDelete) return;

    try {
      await deleteChadhava(id);

      setChadhavas(chadhavas.filter((item) => item._id !== id));

      alert("Chadhava Deleted Successfully");
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="admin-container">
    <div className="admin-list">
      <h1>Chadhava List</h1>
      <Link to="/admin/chadhava/add" className="add-btn" style={{textDecoration:"none", color:"black", fontWeight:"bold", background:"var(--gold-light)"}}>
    + Add New Chadhava
  </Link>

      <table border="1" cellPadding="10" style={{marginTop:"15px"}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Temple Name</th>
            <th>Occasion</th>
            <th>Offered Time</th>
            <th>Price</th>
            <th>Total Offering</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {chadhavas.length > 0 ? (
            chadhavas.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.templeName}</td>
                <td>{item.occasion}</td>
                <td>{item.offeredTime}</td>
                <td>₹{item.price}</td>
                <td>{item.totalOffering}</td>

                <td>
                  <button className="action-btn edit-btn"
                    onClick={() => navigate(`/admin/chadhava/edit/${item._id}`)}
                  >
                    Edit
                  </button>

                  <button className="action-btn delete-btn" onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Chadhava Records Found</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AdminChadhavaList;
