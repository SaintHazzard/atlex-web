// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { GoogleOAuthProvider } from "@react-oauth/google"




// ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// ).render(
//   <GoogleOAuthProvider clientId='221571406493-961rm6kr67mdsitfadju1loha2fdtr3g.apps.googleusercontent.com'>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   </GoogleOAuthProvider>
    
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"



const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <GoogleOAuthProvider clientId='221571406493-961rm6kr67mdsitfadju1loha2fdtr3g.apps.googleusercontent.com'>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  );
}




// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
