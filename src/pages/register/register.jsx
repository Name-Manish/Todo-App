import "./register.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Join us and start your journey</p>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <button className="register-btn">
            Register
          </button>

          <div className="register-footer">
            Already have an account?
            <span> <NavLink to="/login">Login</NavLink></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;