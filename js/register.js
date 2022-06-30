// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBakliA1PHhdCp7ri-Nf_X_rzr7wVWpuQI",
    authDomain: "saathhealth-f231b.firebaseapp.com",
    projectId: "saathhealth-f231b",
    storageBucket: "saathhealth-f231b.appspot.com",
    messagingSenderId: "427932930554",
    appId: "1:427932930554:web:451ebe53591399decc1443",
    measurementId: "G-STPLZFGPVG"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()


  function Register(){
    var userEmail=document.getElementById("userEmail").value
    var userPassword=document.getElementById("userPassword").value
    var userPhone=document.getElementById("userPhone").value
    var userEmail=document.getElementById("userEmail").value



     // Move on with Auth
     auth.createUserWithEmailAndPassword(userEmail, userPassword)
     .then(function() {
       // Declare user variable
       var user = auth.currentUser
   
       // Add this user to Firebase Database
       var database_ref = database.ref()
   
       // Create User data
       var user_data = {
        userEmail : userEmail,
        userPassword : userPassword,
        userPhone : userPhone,
        userEmail : userEmail,
         
       }
   
       // Push to Firebase Database
       database_ref.child('users/' + user.uid).set(user_data)
   
       // DOne
       alert('Registration Completed Please Login!!')
       window.location="../index.html"
     })
     .catch(function(error) {
       // Firebase will use this to alert of its errors
       var error_code = error.code
       var error_message = error.message
   
       alert(error_message)
     })
  }

  function toLoginPage(){
        window.location="../index.html"
  }