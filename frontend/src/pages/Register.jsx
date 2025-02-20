import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Register.css'; // Make sure to import this CSS file

const Register = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await axios.post("http://localhost:5000/register", { username, email, password });
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
