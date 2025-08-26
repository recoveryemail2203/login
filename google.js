import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwTWuREHpypr-aA2ZkDOtsa4YvfSSPaB8",
  authDomain: "login-3c206.firebaseapp.com",
  projectId: "login-3c206",
  storageBucket: "login-3c206.firebasestorage.app",
  messagingSenderId: "429434810851",
  appId: "1:429434810851:web:9d1b4015d432f6501cb0d6",
  measurementId: "G-CCGQ99KHH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Google provider
const provider = new GoogleAuthProvider();

// Reusable login function
function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Google login successful:", user);
      alert("Welcome " + user.displayName + "!");
      window.location.href = "index1.html"; // redirect to dashboard
    })
    .catch((error) => {
      console.error("Error during Google login:", error.code, error.message);
      alert("Error: " + error.message);
    });
}

// Attach listeners to BOTH buttons if they exist
const googleRegisterBtn = document.getElementById("google-register");
const googleLoginBtn = document.getElementById("google-login");

if (googleRegisterBtn) {
  googleRegisterBtn.addEventListener("click", googleSignIn);
}
if (googleLoginBtn) {
  googleLoginBtn.addEventListener("click", googleSignIn);
}
