 
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

.controller('DashCtrl', function($scope) {

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
    
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function success(x){
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
