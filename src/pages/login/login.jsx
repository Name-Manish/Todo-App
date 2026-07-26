import "./login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Login to your account</p>

        <form>
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
              placeholder="Enter your password"
            />
          </div>

          <button className="login-btn">
            Login
          </button>

          <div className="login-footer">
            Don't have an account?
            <span> <NavLink to="/register">Register</NavLink></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;