// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAtfVj9YHiVkaFf-V8IUnMIxFVZ1argJF8",
      authDomain: "let-s-chat-3192e.firebaseapp.com",
      databaseURL: "https://let-s-chat-3192e-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-3192e",
      storageBucket: "let-s-chat-3192e.appspot.com",
      messagingSenderId: "615055459224",
      appId: "1:615055459224:web:e0937cb28f079c907c61ed"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}
  