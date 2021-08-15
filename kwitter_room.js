

   var firebaseConfig = {
      apiKey: "AIzaSyDFLN-fino0vFj9GwAW-Hjs5_Prq8FCFIg",
      authDomain: "let-s-chat-15d11.firebaseapp.com",
      databaseURL: "https://let-s-chat-15d11-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-15d11",
      storageBucket: "let-s-chat-15d11.appspot.com",
      messagingSenderId: "623424172352",
      appId: "1:623424172352:web:06dd93f696755a4ae08aa5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id='room_names_div' onclick='redirecttoroomname(this.id)'>"+"#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML=row;
     });});}
getData();
function logout(){
      window.location="index.html";

}
function addroom(){
      
            roomname_div=document.getElementById("room_id").value;
            firebase.database().ref("/").child(roomname_div).update({
                  Roomadded:"Added"
            });
            localStorage.setItem("join_Room_name",roomname_div);
            window.location="kwitterpage.html";
      
            
      
}
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("join_Room_name",name);
      window.location="kwitterpage.html";
}
username= localStorage.getItem("username");
document.getElementById("name_h3").innerHTML= "Welocome "+username+" !";
