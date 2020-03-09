firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    document.getElementById("menu-elem-1").style.display = "block";
    document.getElementById("menu-elem-2").style.display = "block";
    document.getElementById("menu-elem-3").style.display = "block";

    let user = firebase.auth().currentUser;
    // window.location = "main.html";

    if(user != null){

      let email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";


    document.getElementById("menu-elem-1").style.display = "none";
    document.getElementById("menu-elem-2").style.display = "none";
    document.getElementById("menu-elem-3").style.display = "none";
  }
});

function login(){

  let userEmail = document.getElementById("email_field").value;
  let userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  window.location = "index.html";
}
