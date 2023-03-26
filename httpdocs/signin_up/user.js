    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  import { getDatabase,set,ref,onValue,update} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword,onAuthStateChanged,signOut,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";



  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB_qH3tD1JAJif86Fxm6otkD6iEIMYqzVk",
    authDomain: "snkr-97b15.firebaseapp.com",
    databaseURL: "https://snkr-97b15-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "snkr-97b15",
    storageBucket: "snkr-97b15.appspot.com",
    messagingSenderId: "685803751797",
    appId: "1:685803751797:web:61bba736f52e788e81eb3c",
    measurementId: "G-0BLGRE0YDY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth(app);
  

/*google.addEventListener('click',(e)=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const email = credential.email;
     set(ref(database, 'users/' + credential.user),{
          username: username,
          email: email
      })
    alert(user.displayName);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...

    alert(errorMessage);
  });
 });
 */
 if(document.getElementById("signIn")){
  signIn.addEventListener('click',(e)=>{
    var em= document.getElementById('email-address').value;
   var p = document.getElementById('password_login').value;
       signInWithEmailAndPassword(auth, em, p)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         
         const dt = new Date();
          update(ref(database, 'users/' + user.uid),{
           last_login: dt,
         })
          alert('User logged in!');
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
 
         alert(errorMessage);
   });
  });
 }

 if(document.getElementById("signUp")){ 
 signUp.addEventListener('click',(e)=>{ 
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;
      
       set(ref(database, 'users/' + user.uid),{
          username: username,
          email: email
      })
      alert('User created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message; 
      alert(errorMessage);
    // ..
    });

 });
 }


   onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const userRef = ref(database, `users/${uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          const username = userData.username;
          console.log(`Signed in as ${username}`);
          const usernameElement = document.getElementById("naam");
          usernameElement.textContent = `Welcome, ${username}!`;
        });
      } else {
        console.log("User is signed out!");
      }
    });
    
if(document.getElementById("logout")){  
logout.addEventListener('click',(e)=>{

   signOut(auth).then(() => {
     // Sign-out successful.
     alert('User logged out!');
     const usernameElement = document.getElementById("naam");
          usernameElement.textContent = `User logged out succesfully`;
   }).catch((error) => {
     // An error happened.
     const errorCode = error.code;
     const errorMessage = error.message;

        alert(errorMessage);
   });

});
}

if(document.getElementById("passw")){
passw.addEventListener('click',(e)=>{
var em= document.getElementById('email-address').value;
sendPasswordResetEmail(auth, em)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 });
}