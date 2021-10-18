const firebaseConfig = {
    apiKey: "AIzaSyBKUT6ArB95Ksl-5jsvPQfMo0VzYRoNQEY",
    authDomain: "dcbxbcxbzvb.firebaseapp.com",
    databaseURL: "https://dcbxbcxbzvb-default-rtdb.firebaseio.com",
    projectId: "dcbxbcxbzvb",
    storageBucket: "dcbxbcxbzvb.appspot.com",
    messagingSenderId: "976057240433",
    appId: "1:976057240433:web:de7de854077083286dc4d0",
    measurementId: "G-VZYD4QKJPC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addroom(){
    a = document.getElementById("room_name").value;
    console.log(a);
    firebase.database().ref("/").child(a).set({
          purpose:"Adding Room Name"
    });
    localStorage.setItem("room",a);
    window.location="index3.html";
}
function getData() 
{
firebase.database().ref("/").on('value', function(snapshot) 
{
      document.getElementById("output1").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {
 childKey  = childSnapshot.key;
 Room_names = childKey;
console.log("RoomName-",Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='navigate_index(this.id)' >Room name is - "+ Room_names +"</div><hr>";
document.getElementById("output1").innerHTML += row;
});
});
}
getData();
function navigate_index(y){
console.log(y);
localStorage.setItem("room",y);
window.location="index3.html";
}
function profile(){
window.location="index4.html";
}