import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AttendeeDetails.css";

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address.";
    if (!file) newErrors.file = "Profile photo is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle file selection
  const handleFileChange = (selectedFile) => {
    if (selectedFile) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(selectedFile.type)) {
        setErrors((prev) => ({
          ...prev,
          file: "Only JPG or PNG images allowed.",
        }));
        return;
      }
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
      setErrors((prev) => ({ ...prev, file: "" })); // Clear error
    }
  };

  // Handle drag & drop
  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log({ name, email, specialRequest, file });
      navigate("/TicketConfirmation");
    }
  };

  return (
    <div className="attendee-container">
      <div className="attendee-card">
        <div className="attendee-header">
          <h2>Attendee Details</h2>
          <p className="step-info">Step 2/3</p>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Upload Profile Photo */}
          <div className="upload-section">
            <p>
              Upload Profile Photo <span className="required">*</span>
            </p>
            <div
              className={`upload-box ${dragging ? "dragging" : ""}`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e.target.files[0])}
                hidden
              />
              <p className="upload-text">
                {dragging ? "Drop file here" : "Drag & drop or click to upload"}
              </p>
              {filePreview && (
                <img
                  src={filePreview}
                  alt="Preview"
                  className="preview-image"
                />
              )}
            </div>
            {errors.file && <p className="error-text">{errors.file}</p>}
          </div>

          {/* Name Input */}
          <label>
            Enter your name <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: "" })); // Clear error on change
            }}
            required
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          {/* Email Input */}
          <label>
            Enter your email <span className="required">*</span>
          </label>
          <div className="email-input">
            <span>📧</span>
            <input
              type="email"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" })); // Clear error on change
              }}
              required
            />
          </div>
          {errors.email && <p className="error-text">{errors.email}</p>}

          {/* Special Request */}
          <label>Special request?</label>
          <textarea
            placeholder="Any special requests..."
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
          ></textarea>

          {/* Buttons */}
          <div className="button-group">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <button type="submit" className="submit-btn">
              Get My Free Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;
