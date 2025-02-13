import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import AttendeeDetails from "./AttendeeDetails"; // ✅ Import AttendeeDetails component
import TicketConfirmation from "./TicketConfirmation"; // ✅ Import AttendeeDetails component

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              <div className="Logo"></div>
            </a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">My Tickets</a>
          </li>
          <li>
            <a href="#">About Project</a>
          </li>
        </ul>
        <button className="ticket-btn">MY TICKETS →</button>
      </nav>
    </header>
  );
};

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const tickets = [
    { type: "REGULAR ACCESS", price: "Free", available: 20 },
    { type: "VIP ACCESS", price: "$150", available: 20 },
    { type: "VVIP ACCESS", price: "$150", available: 20 },
  ];

  return (
    <main>
      <section className="ticket-selection">
        <h2>Ticket Selection</h2>
        <p className="step-info">Step 1/3</p>
        <div className="progress-bar">
          <span></span>
        </div>

        <div className="event-card-container">
          <div className="event-card">
            <h1>Techember Fest '25</h1>
            <p>
              Join us for an unforgettable experience at <br />
              <strong>Techember Fest</strong>! Secure your spot now.
            </p>
            <p>
              📍 <strong>Conference Hall A</strong> || March 15, 2025 | 7:00 PM
            </p>
          </div>
        </div>

        <h3>Select Ticket Type:</h3>
        <div className="tickets">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`ticket ${selectedTicket === index ? "selected" : ""}`}
              onClick={() => setSelectedTicket(index)}
            >
              <p className="price">{ticket.price}</p>
              <p className="type">{ticket.type}</p>
              <p>{ticket.available}/52</p>
            </div>
          ))}
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              aria-expanded={isAccordionOpen}
            >
              Number of Tickets
            </button>
            {isAccordionOpen && (
              <div className="accordion-content">
                <p>1</p>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Updated Button with Navigation */}
        <button className="btn1">Cancel</button>
        <button className="btn2" onClick={() => navigate("/AttendeeDetails")}>
          Next
        </button>
      </section>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        <Route path="/AttendeeDetails" element={<AttendeeDetails />} />
        <Route path="/TicketConfirmation" element={<TicketConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
