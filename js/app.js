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

 // accedo al servicio de autenticación
var authService = firebase.auth();


// manejador de eventos para loguearse
document.getElementById('botonlogin').addEventListener('click', function() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('email');
  authService.signInWithPopup(provider)
        .then(function(result) {
            // logueado con éxito
            console.log('Hemos autenticado al usuario ', result.user);
        })
        .catch(function(error) {
            // Fallo de login
            console.log('Se ha encontrado un error:', error);
        });
})


//manejador de eventos para cerrar sesión (logout)
document.getElementById('botonlogout').addEventListener('click', function() {
  authService.signOut()
})


// manejador de eventos para los cambios del estado de autenticación
authService.onAuthStateChanged(function(user) {
  if (user) {
    console.log('AuthStateChanged', user)
    document.getElementById('datosuser').innerHTML = JSON.stringify(user);
    console.log(JSON)
    document.getElementById('botonlogin').style.display = 'none';
    document.getElementById('botonlogout').style.display = 'block';
  } else {
    document.getElementById('datosuser').innerHTML = 'Sin usuario logueado...'
    document.getElementById('botonlogin').style.display = 'block';
    document.getElementById('botonlogout').style.display = 'none';
  }
});
