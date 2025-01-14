import React, { useState } from "react";
import "./complaint.css"; // Import the CSS file for styling

const ComplaintForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !complaint) {
      alert("Please fill out all required fields.");
      return;
    }
    // Handle form submission logic
    alert("Complaint submitted successfully!");
  };

  return (
    <div className="complaint-container">
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit} className="complaint-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint *</label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
            placeholder="Enter your complaint"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
