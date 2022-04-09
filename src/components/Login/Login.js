import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { handleSignIn } = useFirebase();
  return (
    <div>
      <h3>Please Login</h3>
      <button onClick={handleSignIn} style={{ margin: "20px" }}>
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
