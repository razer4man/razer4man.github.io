firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Если пользователь есть

    // document.getElementById("menu-elem-1").style.display = "none";
    // document.getElementById("menu-elem-2").style.display = "none";
    // document.getElementById("menu-elem-3").style.display = "none";


    let user = firebase.auth().currentUser;

    if(user != null){

      let email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // Если пользователя нет

    document.getElementById("menu-elem-1").style.display = "none";
    document.getElementById("menu-elem-2").style.display = "none";
    document.getElementById("menu-elem-3").style.display = "none";

  }
});

function login(){

  let userEmail = document.getElementById("email_field").value;
  let userPass = document.getElementById("password_field").value;
  console.log(userEmail);

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    // let errorCode = error.code;
    let errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
