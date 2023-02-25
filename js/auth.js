// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBU8l2iwPjwARDUm46J5JZQrTLHD6v5LMg",
    authDomain: "datacapture-e86cc.firebaseapp.com",
    databaseURL: "https://datacapture-e86cc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "datacapture-e86cc",
    storageBucket: "datacapture-e86cc.appspot.com",
    messagingSenderId: "1023746779687",
    appId: "1:1023746779687:web:0588edba7c273747db3c02"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

//invokes firebase authentication.
const auth = firebase.auth();

const signOut = () => {
    firebase
        .auth()
        .signOut()
        .catch(function (error) {
            alert("error signing out, check network connection");
        });
    console.log("signout");
};

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password).
    then(() => {
        db.collection("users").doc(userCredential.user.uid).set({
            email: email,
            password: password
          })
        
            window.location.replace("Home.html");
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert.warning(errorMessage);
        });
};

const signOutButton = document.querySelector("#signout");

if (signOutButton) {
    signOutButton.addEventListener("click", () => {
        signOut();
    });
}