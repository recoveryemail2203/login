// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Your Firebase config
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

// ✅ Target login form elements
const loginBtn = document.getElementById('login-submit');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Login successful:', user);
      alert('Login successful!');
      window.location.href = "index1.html"; // redirect to your dashboard
    })
    .catch((error) => {
      console.error('Error during login:', error.code, error.message);
      alert('Error: ' + error.message);
    });
});
