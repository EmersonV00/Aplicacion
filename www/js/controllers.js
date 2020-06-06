 
 var firebaseConfig = {
    apiKey: "AIzaSyAGJLz3ViD5rOLzZ1ta4EQ8TmLpf71AMb0",
    authDomain: "maxapp-a88be.firebaseapp.com",
    databaseURL: "https://maxapp-a88be.firebaseio.com",
    projectId: "maxapp-a88be",
    storageBucket: "maxapp-a88be.appspot.com",
    messagingSenderId: "764443533758",
    appId: "1:764443533758:web:ba5dcda0475edd1ed559ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope, $state) {
  $rootScope.listaProductos = {};

   firebase.database().ref('/producto').on("value", function(snapshot) {
  $rootScope.listaProductos= snapshot.val()
  },function(error){
      console.log("Error: " + error.code);
  });
   //$rootScope.listaProductos = $rootScope.listaProductos[0]

    $rootScope.Categorias=[
{
  nombreCategoria:"Tv y Video", imagen:"img/tag1.jpeg",descripcion:"Televisores, video y audio para TV"
},
{
  nombreCategoria:"Celulares", imagen:"img/tag2.jpeg",descripcion:"Celulares prepago, liberados y accesorios"
},
{
  nombreCategoria:"Linea blanca", imagen:"img/tag3.jpeg",descripcion:"Linea blanca, estufas y refrigeración"
},
{
  nombreCategoria:"Videojuegos", imagen:"img/tag4.jpeg",descripcion:"Consolas, juegos y accesorios"
},
{
  nombreCategoria:"Electrodomésticos", imagen:"img/tag5.jpeg",descripcion:"Electrodomésticos varios"
},
{
  nombreCategoria:"Computación y tablets", imagen:"img/tag6.jpeg",descripcion:"Computadoras de escritorio, laptops, tablets"
},
{
  nombreCategoria:"Audio", imagen:"img/tag1.jpeg",descripcion:"Audio para casa, micrófonos, tornamesas y más"
},
{
  nombreCategoria:"Cámaras y drones", imagen:"img/tag2.jpeg",descripcion:"Videocámaras, cámaras de accion y drones"
},
{
  nombreCategoria:"Accesorios", imagen:"img/tag3.jpeg",descripcion:"Prendas electrónicas"
},
{
  nombreCategoria:"Ambientadores", imagen:"img/tag4.jpeg", descripcion:"Aire acondicionado, ventiladores y calefactores"
}
]

  $scope.viewP = function(){
    //Es una funcion para redireccionar por medio del estado
    $state.go("viewproduct");
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {

  $scope.settings = {
    enableFriends: true
  };
})

.controller('loginCtrl', function($scope) {
  
})

.controller("registroCtrl", function($scope){
  $scope.obtener = function (user){
    
  firebase.auth().createUserWithEmailAndPassword(user.usuario, user.email, user.password, user.confirmpassword).then(function success(x){
    swal("Genial!", "Registro exitoso!", "success")
      firebase.database().ref("/user").set({
          correo: user.email
      });
      firebase.auth().signOut().then(function(){
          // Sign-out succesful.
      }).catch(function(error){
        //An error happened.
      });
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  swal ("error",errorMessage)

});
}
})

.controller('viewproductCtrl', function($scope,$rootScope) {
  $scope.Pro = $rootScope.listaProductos[0];
  console.log($rootScope.Pro)
 
})
//se genera una posicion 0 entonces hay que entrar a ella