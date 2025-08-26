// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Your web app's Firebase configuration
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

// ✅ Initialize Auth
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('Registration successful:', user);
      alert('User created successfully!');
      window.location.href = "index1.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error during registration:', errorCode, errorMessage);
      alert('Error: ' + errorMessage);
    });
});
