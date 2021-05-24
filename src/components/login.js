import "../styles/login.scss";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";
import React, { useState, useRef, useEffect } from "react";
import firebase, { firestore, auth } from "../firebase/index";
import { assertClassBody } from "@babel/types";

const Login = () => {
  const [input, setInput] = useState("");
  const [sentCode, setSentCode] = useState(false);
  const [confirmCode, setConfirmCode] = useState("");
  const [error, setError] = useState(null);
  const recaptcha = useRef(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.languageCode = "mn";
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      recaptcha.current
    );
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  useEffect(() => {
    console.log(auth.currentUser);
  }, [auth]);

  const sendCode = async () => {
    setError(null);
    const appVerifier = window.recaptchaVerifier;
    try {
      window.confirmationResult = await auth.signInWithPhoneNumber(
        `+976 ${input}`,
        appVerifier
      );
      setSentCode(true);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  const LogIn = async () => {
    try {
      let result = await window.confirmationResult.confirm(confirmCode);
      console.log("Hi" + result.user.phoneNumber);
      setIsLogin(true);
    } catch (error) {
      alert("Код буруу");
    }
  };
  const logout = async () => {
    await auth.signOut();
    setIsLogin(false);
  };

  return (
    <body>
      <div className="flex yellow">
        <div className="inner-container flex  deep-purple darken-4 white-text">
          <div className="content flex flex-column green white-text">
            {isLogin && <button onClick={logout}> Гарах</button>}
            {error && <span> {error}</span>}
            <div className="phone_number">Та утасны дугаараа оруулна уу</div>
            <div className="gap">
              <input
                placeholder="99119911"
                className="white-text deep-purple lighten-1
                "
                value={input}
                onChange={event => setInput(event.target.value)}
              />
            </div>

            <div ref={recaptcha} className="flex flex-column" />

            {!sentCode && (
              <button className="gap" onClick={sendCode}>
                Үргэлжлүүлэх
              </button>
            )}
            {sentCode && (
              <div className="gap">
                <input
                  className="white-text"
                  value={confirmCode}
                  onChange={event => setConfirmCode(event.target.value)}
                  placeholder="Баталгаажуулах"
                />
                <button onClick={LogIn}>Нэвтрэх</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
