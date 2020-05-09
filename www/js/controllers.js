 
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

   firebase.database().ref('producto').on('value', function(productReceive) {
  $rootScope.listaProductos[data]= productReceive.val();

});
   //$rootScope.listaProductos = $rootScope.listaProductos[0]

    $rootScope.Categorias=[
{
  nombreCategoria:"Tv y Video", imagen:"https://www.lg.com/pe/images/televisores/md06104738/gallery/d001.jpg"
},
{
  nombreCategoria:"Celulares", imagen:"https://static.iris.net.co/dinero/upload/images/2019/10/16/278083_1.jpg"
},
{
  nombreCategoria:"Linea blanca", imagen:"https://www.chopinmol.com/16796-large_default/lavadora-automatica-de-19-kg.jpg"
},
{
  nombreCategoria:"Videojuegos", imagen:"https://images-na.ssl-images-amazon.com/images/I/81nDSzyHhCL._SX679_.jpg"
},
{
  nombreCategoria:"Electrodomésticos", imagen:"https://tienda.bodegangas.com.gt/wp-content/uploads/2019/05/licuacromadas-600x600.jpg"
},
{
  nombreCategoria:"Computación y tablets", imagen:"https://www.argomall.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/a/s/asus-x407ma-gld-2.png"
},
{
  nombreCategoria:"Audio", imagen:"https://www.steren.com.gt/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/b/o/boc-069_x1ne.jpg"
},
{
  nombreCategoria:"Cámaras y drones", imagen:"https://c1.neweggimages.com/ProductImage/380-0002-00039-S06.jpg"
},
{
  nombreCategoria:"Accesorios", imagen:"https://images-na.ssl-images-amazon.com/images/I/61t1cks8mBL._SY355_.jpg"
},
{
  nombreCategoria:"Ambientadores", imagen:"https://cdn1.coppel.com/images/catalog/pm/6305433-1.jpg"
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