import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import toast, { Toaster } from "react-hot-toast";
// import { refreshPage } from "../Utils/Common";
// import { toastStyle } from "../Utils/Common";
import "./Register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form">
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <label className="label-content">
        <h1>CREATE YOUR ACCOUNT</h1>
        <br />
      </label>
      <label className="label">Full name</label>
      <div className="input-container">
        <input
          type="text"
          placeholder="full name"
          style={{ border: "2px solid green" }}
        />
      </div>

      <label className="label">Email</label>
      <div className="input-container">
        <input
          type="text"
          placeholder="email"
          style={{ border: "2px solid green" }}
        />
      </div>

      <label className="label">Username</label>
      <div className="input-container">
        <input
          type="text"
          placeholder="username"
          style={{ border: "2px solid green" }}
        />
      </div>

      <label className="label">Password</label>
      <div className="input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="password"
          style={{ border: "2px solid green" }}
        />
        <span onClick={togglePassword} className="password-toggle-icon">
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="eye-icon"
          />
        </span>
      </div>

      <div className="input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="confirm password"
          style={{ border: "2px solid green" }}
        />
        <span onClick={togglePassword} className="password-toggle-icon">
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="eye-icon"
          />
        </span>
      </div>
      <input
        type="submit"
        value="SIGN UP"
        className="button"
        // onClick={loginSubmit}
      />
      <h2>Login here</h2>
    </div>
  );
}

export default Register;
