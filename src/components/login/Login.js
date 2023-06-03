import { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import toast, { Toaster } from "react-hot-toast";
// import { refreshPage } from "../Utils/Common";
// import { toastStyle } from "../Utils/Common";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form">
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <label className="label-content">
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <br />
      </label>
      <div className="input-container">
        <input type="text" placeholder="username" />
      </div>
      <div className="input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="password"
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
        value="LET'S GO"
        className="button"
        // onClick={loginSubmit}
      />
      <h2>Forgot password?</h2>
    </div>
  );
}

export default Login;
