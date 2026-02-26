import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaUser, FaFileAlt, FaCalendar, FaUsers, FaBuilding, FaHome } from "react-icons/fa";

import Profile from "./Profile";
import CAFForm from "./CAFForm";
import StudentInfo from "./StudentInfo";
import CompanyInfo from "./CompanyInfo";
import Events from "./Events";
import Documents from "./Documents";
import CommunityNew from "./CommunityNew";

function CollegeDashboard() {
  return (
    <div className="dashboard">
      {/* College Sidebar */}
      <aside className="sidebar college-sidebar">
        <Link to="/college-dashboard" className="menu-item">
          <FaHome /> <span>Home</span>
        </Link>
        <Link to="/college-dashboard/profile" className="menu-item">
          <FaUser /> <span>Profile</span>
        </Link>
        <Link to="/college-dashboard/community" className="menu-item">
          <FaUsers /> <span>Community</span>
        </Link>
        <Link to="/college-dashboard/caf-form" className="menu-item">
          <FaFileAlt /> <span>CAF Form</span>
        </Link>
        <Link to="/college-dashboard/students" className="menu-item">
          <FaUsers /> <span>Student Information</span>
        </Link>
        <Link to="/college-dashboard/companies" className="menu-item">
          <FaBuilding /> <span>Company Information</span>
        </Link>
        <Link to="/college-dashboard/documents" className="menu-item">
          <FaFileAlt /> <span>Documents</span>
        </Link>
        <Link to="/college-dashboard/events" className="menu-item">
          <FaCalendar /> <span>Events</span>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="college-home">
                <h2>Welcome to College Dashboard</h2>
                <div className="dashboard-stats">
                  <div className="stat-card">
                    <h3>Total Students</h3>
                    <p className="stat-number">0</p>
                  </div>
                  <div className="stat-card">
                    <h3>CAF Forms</h3>
                    <p className="stat-number">0</p>
                  </div>
                  <div className="stat-card">
                    <h3>Companies</h3>
                    <p className="stat-number">0</p>
                  </div>
                  <div className="stat-card">
                    <h3>Events</h3>
                    <p className="stat-number">0</p>
                  </div>
                </div>
                <div className="recent-activity">
                  <h3>Recent Activity</h3>
                  <p>No recent activity</p>
                </div>
              </div>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<CommunityNew />} />
          <Route path="/caf-form" element={<CAFForm />} />
          <Route path="/students" element={<StudentInfo />} />
          <Route path="/companies" element={<CompanyInfo />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
    </div>
  );
}

export default CollegeDashboard;
