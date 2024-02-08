import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
        clientId={
          process.env.REACT_APP_GOOGLE_CLIENT_ID ||
          "229159744570-qbb5uc9a94vofkgemf23esodlmjqk30k.apps.googleusercontent.com"
        }
      >
    <App />
      </GoogleOAuthProvider>
  </React.StrictMode>
);
