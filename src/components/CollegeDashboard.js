import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaUser, FaFileAlt, FaCalendar, FaUsers, FaBuilding, FaHome, FaChartLine, FaTruck, FaCertificate, FaBriefcase } from "react-icons/fa";

import Profile from "./Profile";
import CAFForm from "./CAFForm";
import StudentInfo from "./StudentInfo";
import CompanyInfo from "./CompanyInfo";
import Events from "./Events";
import Documents from "./Documents";
import CommunityNew from "./CommunityNew";
import CollegeHome from "./CollegeHome";
import PlacementTracking from "./PlacementTracking";

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
        <Link to="/college-dashboard/placement-tracking" className="menu-item">
          <FaChartLine /> <span>Placement Tracking</span>
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
          <Route path="/" element={<CollegeHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/placement-tracking" element={<PlacementTracking />} />
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
