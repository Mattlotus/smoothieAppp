// Import the functions you need from the SDKs you need
const {initializeApp} = require('firebase/app')
// const {getAuth} = require('firebase/auth')
const  { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } = require ("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT16ofNRJ3V1x29T-TE65nZp4PMEjqHEQ",
  authDomain: "smoothies-7e4f2.firebaseapp.com",
  projectId: "smoothies-7e4f2",
  storageBucket: "smoothies-7e4f2.appspot.com",
  messagingSenderId: "560009416803",
  appId: "1:560009416803:web:6a3d2132cf5b38cbca2856",
  measurementId: "G-CYGL20C10S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

const fireBaseSignUp = async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    res.json(user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    res.status(400).json(error)
    
    // ..
  });
}

const fireBaseLogin = async (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    res.json(user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    res.status(400).json(error)
    
    // ..
  });
}

module.exports = {fireBaseSignUp , fireBaseLogin} 
