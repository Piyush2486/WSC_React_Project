import React from "react";
import db, { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setUser }) {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const newUser = {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        navigate("/");
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        db.collection("users").doc(result.user.email).set(newUser);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img className="WSC-Logo" src="WSC-Logo.png" alt="" />
        <p className="login-name">D.P.S.I World Scholars Cup</p>
        <button className="login-btn" onClick={signInWithGoogle}>
          <img src="Google.png" alt="login with google" />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;