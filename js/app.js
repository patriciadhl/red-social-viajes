// Initialize Firebase
 var config = {
   apiKey: "AIzaSyDj-Gm2SLDYORx-9Qn30h-0WfrREgF-Gfw",
   authDomain: "red-social-d37a2.firebaseapp.com",
   databaseURL: "https://red-social-d37a2.firebaseio.com",
   projectId: "red-social-d37a2",
   storageBucket: "red-social-d37a2.appspot.com",
   messagingSenderId: "327166003977"
 };
 firebase.initializeApp(config);

 window.onload = inicializar;


 function inicializar(){
   var formAuth=document.getElementById('form-auth');
   formAuth.addEventListener('submit',autentificar,false);
 }

 function autentificar(){
   event.preventDefault();
   var usuario=event.target.email.value;
   var contraseña=event.target.password.value;

   firebase.auth().signInWithEmailAndPassword(usuario,contraseña)
    .then(function(result){
      window.location.href="views/home.html"
    })
    .catch(function(error){
     $('#myModal').modal('open');
   });
 }

 $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
