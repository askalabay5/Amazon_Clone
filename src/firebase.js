// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyA5OR30bZBRUH4UsJpIEAGHsNMWQBtSgso",
// 	authDomain: "clone-front-fbafb.firebaseapp.com",
// 	projectId: "clone-front-fbafb",
// 	storageBucket: "clone-front-fbafb.appspot.com",
// 	messagingSenderId: "614777023388",
// 	appId: "1:614777023388:web:28416911552a76fd2ef659",
// 	measurementId: "G-Q0Q8QPX14L",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA5OR30bZBRUH4UsJpIEAGHsNMWQBtSgso",
//   authDomain: "clone-front-fbafb.firebaseapp.com",
//   projectId: "clone-front-fbafb",
//   storageBucket: "clone-front-fbafb.appspot.com",
//   messagingSenderId: "614777023388",
//   appId: "1:614777023388:web:28416911552a76fd2ef659",
//   measurementId: "G-Q0Q8QPX14L"
// };
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// //

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// AIzaSyDkYZ9We9Iyvj_73xzpGaLpcki0iwLw - BY;
// old="AIzaSyBgGv9NaA5lsH6BVykA5lyCA0f43nNSJXw",
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBgGv9NaA5lsH6BVykA5lyCA0f43nNSJXw",
	authDomain: "clone-react-c0b37.firebaseapp.com",
	projectId: "clone-react-c0b37",
	storageBucket: "clone-react-c0b37.appspot.com",
	messagingSenderId: "822647900628",
	appId: "1:822647900628:web:2ff4474735f76e3927ee41",
	measurementId: "G-DYS1GXPY13",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
