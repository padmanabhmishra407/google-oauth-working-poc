import React from "react";
import "./App.css";

import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [decoded, setDecoded] = useState({});

  const decode_store_jwt = (token) => {
    const decode = jwtDecode(token);
    console.log(decode, ">>>>>");
    setDecoded(decode);
  };

  return (
    <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            height: "100%",
          }}
        >
          {!isLoggedIn ? (
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                decode_store_jwt(credentialResponse.credential);
                console.log(credentialResponse)
                setIsLoggedIn(true);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          ) : (
            // <button onClick={() => googleLogout()}>Logout</button>
            googleLogout()
          )}
        </div>
        <div>
          <h2>Decoded Object:</h2>
          <ul>
            {Object.entries(decoded).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
