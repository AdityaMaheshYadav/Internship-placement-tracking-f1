import React, { useState } from "react";
import api from "../api";
import "./Login.css";

function Login({ onLogin }) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [selectedRole, setSelectedRole] = useState("student");

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Create account states
  const [newFullName, setNewFullName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCollege, setNewCollege] = useState("");
  const [newPassOutYear, setNewPassOutYear] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Login submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        email: loginEmail,
        password: loginPassword,
        role: selectedRole,
      });

      alert(`✅ Login successful as ${selectedRole}!`);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      onLogin();
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert("❌ Login failed: " + (err.response?.data?.error || err.message));
    }
  };

  // Create account submit
  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();

    // Role-specific validation
    if (selectedRole === 'student' && (!newFullName || !newEmail || !newCollege || !newPassOutYear || !newPassword)) {
      alert("Please fill all required fields for student registration!");
      return;
    }

    if (selectedRole === 'college' && (!newFullName || !newEmail || !newCollege || !newDepartment || !newPassword)) {
      alert("Please fill all required fields for college registration!");
      return;
    }

    if (selectedRole === 'admin' && (!newFullName || !newEmail || !newPassword)) {
      alert("Please fill all required fields for admin registration!");
      return;
    }

    try {
      const payload = {
        name: newFullName,
        email: newEmail,
        role: selectedRole,
        password: newPassword,
      };

      // Add role-specific fields
      if (selectedRole === 'student') {
        payload.college = newCollege;
        payload.pass_out_year = parseInt(newPassOutYear);
      }
      
      if (selectedRole === 'college') {
        payload.college = newCollege;
        payload.department = newDepartment;
        payload.phone = newPhone;
      }

      if (selectedRole === 'admin') {
        // Admin doesn't need college, department, etc.
        payload.college = newCollege || null;
      }

      console.log("Register payload:", payload);

      const response = await api.post("/auth/register", payload);

      alert(`✅ ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Account Created Successfully!`);
      setIsCreatingAccount(false);
      
      // Reset form
      setNewFullName("");
      setNewEmail("");
      setNewCollege("");
      setNewPassOutYear("");
      setNewDepartment("");
      setNewPhone("");
      setNewPassword("");
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      alert(
        "❌ Account creation failed: " +
          (err.response?.data?.error || err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <h2>Hack-2-Hire</h2>

        {/* Tabs */}
        <div className="tab-buttons">
          <button
            className={!isCreatingAccount ? "active" : ""}
            onClick={() => setIsCreatingAccount(false)}
          >
            Login
          </button>
          <button
            className={isCreatingAccount ? "active" : ""}
            onClick={() => setIsCreatingAccount(true)}
          >
            Create Account
          </button>
        </div>

      {/* Role Selection */}
      <div className="role-selection">
        <label>Select Role:</label>
        <div className="role-buttons">
          <button
            type="button"
            className={selectedRole === "student" ? "role-btn active" : "role-btn"}
            onClick={() => setSelectedRole("student")}
          >
            Student
          </button>
          <button
            type="button"
            className={selectedRole === "college" ? "role-btn active" : "role-btn"}
            onClick={() => setSelectedRole("college")}
          >
            College
          </button>
          <button
            type="button"
            className={selectedRole === "admin" ? "role-btn active" : "role-btn"}
            onClick={() => setSelectedRole("admin")}
          >
            Admin
          </button>
        </div>
      </div>

      {/* Forms */}
      {!isCreatingAccount ? (
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button type="submit">Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}</button>
        </form>
      ) : (
        <form className="create-account-form" onSubmit={handleCreateAccountSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={newFullName}
            onChange={(e) => setNewFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
          
          {/* Show college field for student and college roles only */}
          {(selectedRole === 'student' || selectedRole === 'college') && (
            <input
              type="text"
              placeholder={selectedRole === 'college' ? "College/Institution Name" : "College Name"}
              value={newCollege}
              onChange={(e) => setNewCollege(e.target.value)}
              required
            />
          )}

          {/* Admin can optionally add college/organization */}
          {selectedRole === 'admin' && (
            <input
              type="text"
              placeholder="Organization (Optional)"
              value={newCollege}
              onChange={(e) => setNewCollege(e.target.value)}
            />
          )}
          
          {/* Student-specific fields */}
          {selectedRole === 'student' && (
            <input
              type="number"
              placeholder="Pass Out Year"
              value={newPassOutYear}
              onChange={(e) => setNewPassOutYear(e.target.value)}
              required
            />
          )}

          {/* College-specific fields */}
          {selectedRole === 'college' && (
            <>
              <input
                type="text"
                placeholder="Department"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </>
          )}

          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">
            Register as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
          </button>
        </form>
      )}
    </div>
    </div>
  );
}

export default Login;
