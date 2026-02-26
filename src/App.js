import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaUser, FaUsers, FaBriefcase,FaFileAlt,FaCalendar, FaLaptop, FaInfoCircle, FaEnvelope } from "react-icons/fa";

import Login from "./components/Login";
import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
import Community from "./components/Community";
import Career from "./components/Career";
import CareerSuggestion from "./components/CareerSuggestion";
import Inbox from "./components/Inbox";
import JobsInternships from "./components/JobsInternships";
import JobsInternshipsPage from "./components/JobsInternshipsPage";
import ChatBox from "./components/ChatBox";
import Events from "./components/Events";
import Documents from "./components/Documents";
import About from "./components/About";
import "./App.css";
import CareerDetail from "./components/CareerDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Hack-2-Hire</h1>
          {isLoggedIn && (
           <div className="header-right">
            {/* Inbox */}
            <Link to="/chat" className="inbox-btn">
              <FaEnvelope /> Inbox
            </Link>

            {/* Search Bar */}
            <div className="search-bar-wrapper">
              <input type="text" placeholder="Search alumni, jobs..." />
              <button className="search-btn">Search</button>
            </div>
          </div>
          )}
        </header>

        {!isLoggedIn ? (
          <Login onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <div className="dashboard">
            {/* Sidebar */}
           <aside className="sidebar">
              <Link to="/" className="menu-item">
                <span>🏠</span> <span>Home</span>
              </Link>
              <Link to="/profile" className="menu-item">
                <FaUser /> <span>Profile</span>
              </Link>
              <Link to="/community" className="menu-item">
                <FaUsers /> <span>Community</span>
              </Link>
              <Link to="/career" className="menu-item">
                <FaBriefcase /> <span>Career</span>
              </Link>
              <Link to="/jobs" className="menu-item">
                <FaLaptop /> <span>Jobs & Internships</span>
              </Link>
              <Link to="/events" className="menu-item">
                <FaCalendar/><span>Events</span>
              </Link>
              <Link to="/documents" className="menu-item">
                <FaFileAlt/> <span>Documents</span>
              </Link>
              <Link to="/about" className="menu-item">
                <FaInfoCircle /> <span>About Us</span>
              </Link>
            </aside>


            {/* Main Content */}
            <main className="main-content">
              <Routes>
               <Route
                  path="/"
                  element={
                    <div className="posts-section">
                      {[
                        {
                          id: 1,
                          text: "Alumni meet this weekend 🎉",
                          image: "https://via.placeholder.com/600x300?text=Alumni+Event"
                        },
                        {
                          id: 2,
                          text: "Internship opportunity at Google 🚀",
                          image: "https://via.placeholder.com/600x300?text=Google+Internship"
                        },
                        {
                          id: 3,
                          text: "Job opening at Microsoft 💼",
                          image: "https://via.placeholder.com/600x300?text=Microsoft+Job"
                        },
                        {
                          id: 4,
                          text: "Alumni success story 🌟",
                          image: "https://via.placeholder.com/600x300?text=Success+Story"
                        },
                        {
                          id: 5,
                          text: "Symbiosis Alumni event 📢",
                          image: "https://via.placeholder.com/600x300?text=Symbiosis+Event"
                        },
                        {
                          id: 6,
                          text: "Career guidance session 🧑‍🏫",
                          image: "https://via.placeholder.com/600x300?text=Career+Session"
                        },
                        {
                          id: 7,
                          text: "New project collaboration 🤝",
                          image: "https://via.placeholder.com/600x300?text=Project+Collaboration"
                        }
                      ].map((post) => (
                        <div key={post.id} className="post-card">
                          <div className="post-header">
                            <img
                              src="https://via.placeholder.com/50"
                              alt="profile"
                              className="post-profile-pic"
                            />
                            <div>
                              <h4>Hack-2-Hire</h4>
                              <p>Just now</p>
                            </div>
                          </div>
                          <p className="post-text">{post.text}</p>
                          {post.image && <img src={post.image} alt="post" className="post-image" />}
                          <div className="post-actions">
                            <button>Like</button>
                            <button>Comment</button>
                            <button>Share</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  }
                />

                <Route path="/profile" element={<Profile />} />
                <Route path="/community" element={<Community />} />
                <Route path="/career" element={<Career />} />
                <Route path="/career/:careerName" element={<CareerDetail />} />
                <Route path="/career-suggestions" element={<CareerSuggestion />} />
                <Route path="/jobs" element={<JobsInternshipsPage />} />
                <Route path="/chat" element={<ChatBox />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/about" element={<About/>} />
                <Route path="/events" element={<Events />} />
              </Routes>
            </main>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
