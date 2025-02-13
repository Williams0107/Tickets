// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./TicketConfirmation.css";

// const TicketConfirmation = () => {
//   const navigate = useNavigate();

//   // Simulated ticket data
//   const ticketDetails = {
//     name: "Avi Chukwu",
//     email: "User@email.com",
//     ticketType: "VIP",
//     ticketFor: 1,
//     specialRequest:
//       "Nil ? Or the users sad story they write in there gets this whole space, Max of three rows",
//     eventName: "Techember Fest '25",
//     location: "04 Runners road, Ikoyi, Lagos",
//     date: "March 15, 2025 | 7:00 PM",
//     barcode: "1234567 891026",
//   };

//   const handleDownload = () => {
//     alert("Downloading ticket... (Implement actual download logic)");
//   };

//   return (
//     <div className="confirmation-container">
//       <div className="confirmation-card">
//         {/* Header */}
//         <div className="confirmation-header">
//           <h2>Ready</h2>
//           <p className="step-info">Step 3/3</p>
//         </div>

//         {/* Progress Bar */}
//         <div className="progress-bar">
//           <div className="progress-fill"></div>
//         </div>

//         {/* Success Message */}
//         <h2 className="success-message">Your Ticket is Booked!</h2>
//         <p className="info-text">
//           Check your email for a copy or you can{" "}
//           <span className="download-text">download</span>
//         </p>

//         {/* Ticket Display */}
//         <div className="ticket-card">
//           <h3 className="event-title">{ticketDetails.eventName}</h3>
//           <p className="event-info">📍 {ticketDetails.location}</p>
//           <p className="event-info">📅 {ticketDetails.date}</p>

//           {/* Profile Image (Placeholder) */}
//           <div className="profile-image">
//             <img src="https://via.placeholder.com/100" alt="Attendee" />
//           </div>

//           {/* Ticket Details */}
//           <div className="ticket-details">
//             <p>
//               <strong>Enter your name:</strong> {ticketDetails.name}
//             </p>
//             <p>
//               <strong>Enter your email:</strong> {ticketDetails.email}
//             </p>
//             <p>
//               <strong>Ticket Type:</strong> {ticketDetails.ticketType}
//             </p>
//             <p>
//               <strong>Ticket for:</strong> {ticketDetails.ticketFor}
//             </p>
//             <p>
//               <strong>Special request:</strong> {ticketDetails.specialRequest}
//             </p>
//           </div>

//           {/* Barcode */}
//           <div className="barcode">
//             <p>{ticketDetails.barcode}</p>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="button-group">
//           <button className="book-again-btn" onClick={() => navigate("/")}>
//             Book Another Ticket
//           </button>
//           <button className="download-btn" onClick={handleDownload}>
//             Download Ticket
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TicketConfirmation;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./TicketConfirmation.css"; // Import CSS

const TicketConfirmation = () => {
  const navigate = useNavigate();

  // Ticket Data
  const ticketDetails = {
    name: "Avi Chukwu",
    email: "User@email.com",
    ticketType: "VIP",
    ticketFor: 1,
    eventName: "Techember Fest '25",
    location: "04 Runners road, Ikoyi, Lagos",
    date: "March 15, 2025 | 7:00 PM",
    barcode: "1234567 891026",
  };

  const handleDownload = () => {
    alert("Downloading ticket... (Implement actual download logic)");
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card svg">
        {/* Ticket Display */}
        <div className="ticket-wrapper">
          <div className="ticket-card">
            {/* Ticket Content */}
            <div className="ticket-content">
              <h3 className="event-title">{ticketDetails.eventName}</h3>
              <p className="event-info">📍 {ticketDetails.location}</p>
              <p className="event-info">📅 {ticketDetails.date}</p>

              {/* Profile Image (Placeholder) */}
              <div className="profile-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Attendee"
                />
              </div>

              {/* Ticket Details */}
              <div className="ticket-details-grid">
                <div className="ticket-detail-item">
                  <p>
                    <strong>Enter your name:</strong>
                  </p>
                  <p>{ticketDetails.name}</p>
                </div>
                <div className="ticket-detail-item">
                  <p>
                    <strong>Enter your email:</strong>
                  </p>
                  <p>{ticketDetails.email}</p>
                </div>
                <div className="ticket-detail-item">
                  <p>
                    <strong>Ticket Type:</strong>
                  </p>
                  <p>{ticketDetails.ticketType}</p>
                </div>
                <div className="ticket-detail-item">
                  <p>
                    <strong>Ticket for:</strong>
                  </p>
                  <p>{ticketDetails.ticketFor}</p>
                </div>
              </div>

              {/* Barcode */}
              {/* <div className="barcode">
                <p>{ticketDetails.barcode}</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="button-group">
          <button className="book-again-btn" onClick={() => navigate("/")}>
            Book Another Ticket
          </button>
          <button className="download-btn" onClick={handleDownload}>
            Download Ticket
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TicketConfirmation;
