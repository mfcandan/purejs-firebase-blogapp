// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBiFgbVxDxa9MoI4vZdhggBC2fG7LJOxak",
    authDomain: "purejs-firebase-blogapp.firebaseapp.com",
    databaseURL: "https://purejs-firebase-blogapp.firebaseio.com",
    projectId: "purejs-firebase-blogapp",
    storageBucket: "purejs-firebase-blogapp.appspot.com",
    messagingSenderId: "448990101673",
    appId: "1:448990101673:web:871fced1300cb76b3b69b8",
    measurementId: "G-9RCLR5JT84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  let postCollection = document.querySelector('#posts-collection');