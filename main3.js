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
  user_name = localStorage.getItem("User_name");
    room_name = localStorage.getItem("room");

    function send(){
      msg = document.getElementById("send_message").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("send_message").value="";
      document.getElementById("ouput_div").innerHTML=msg;
    }
    function getData() 
  {
        firebase.database().ref("/"+room_name).on('value', function(snapshot) 
        {
              document.getElementById("output_div").innerHTML="";
              snapshot.forEach(function(childSnapshot) 
              {
         childKey  = childSnapshot.key;
         childData = childSnapshot.val();
         if(childKey != "purpose"){
             firebase_message_id = childKey;
             message_data = childData;
             console.log("This is Firebase id",firebase_message_id);
             console.log("This is Firebase Data",message_data);
             name = message_data["name"];
             message = message_data["message"];
             like = message_data["like"];
 like = message_data['like'];
         name_with_tag = "<h4 class='glyphicon glyphicon-check'> "+name+"<img src=''></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-default-tip' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output_div").innerHTML += row;
         }
      });
  });
  }
  getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}
  function profile(){
    window.location="index4.html";
  }