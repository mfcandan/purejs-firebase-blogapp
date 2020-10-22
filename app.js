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

  let postCollection = document.querySelector('#posts-collection');

  const db = firebase.firestore();

  console.log(db);

  //create Posts
  function createPosts(title, time, content) {
      let div = document.createElement('div');
      div.setAttribute('class','col-md-4');

      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let small = document.createElement('small');

      h2.textContent = title;
      small.textContent = time;
      p.textContent = content;

      div.appendChild(h2);
      div.appendChild(small);
      div.appendChild(p);

      postCollection.appendChild(div);
  }

  //get Posts
  function getPosts() {
    db.collection("posts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(docs => {
            createPosts(
                docs.data().postName,
                docs.data().createdAt,
                docs.data().postContent
            )
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  getPosts();