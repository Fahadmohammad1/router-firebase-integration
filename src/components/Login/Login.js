import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h3>Please Login</h3>
      <button
        onClick={() => {
          handleGoogleSignIn();
        }}
        style={{ margin: "20px" }}
      >
        Google
      </button>
      <br />
      <input type="email" name="" placeholder="Your Email" />
      <br />
      <input type="password" name="" placeholder="Your Password" />
      <br />
      <input type="submit" value="Login" />
    </div>
  );
};

export default Login;
