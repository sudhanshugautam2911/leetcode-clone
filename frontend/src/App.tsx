
import './App.css'
import { Landing } from './components/Landing'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Signin } from './components/Signin';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCamMQqaU56msBWMpMSz9hBWrZGvwUqyC4",
  authDomain: "leetcode-clone-c3ce4.firebaseapp.com",
  projectId: "leetcode-clone-c3ce4",
  storageBucket: "leetcode-clone-c3ce4.appspot.com",
  messagingSenderId: "754746217083",
  appId: "1:754746217083:web:567236c72c112afbe948de",
  measurementId: "G-0J2JBRT384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {

  return (
    <>
      <Landing/>
      <Signin/>
    </>
  )
}

export default App
