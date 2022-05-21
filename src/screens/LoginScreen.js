import React, { useState } from "react";
import SignupScreen from "./SignupScreen";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button
            className="loginScreen_button"
            onClick={(e) => {
              e.preventDefault();
              setSignIn(true);
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="loginScreen_gradient" />

      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={(e) => {
                    e.preventDefault();
                    setSignIn(true);
                  }}
                > GET STARTED
                </button>
                
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;