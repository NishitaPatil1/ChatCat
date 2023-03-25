var firebaseConfig = {
    apiKey: "AIzaSyAdOX-biyQoWdtVxg_VgC6Rd7LY1EEKPe8",
    authDomain: "kwitter-project-1e462.firebaseapp.com",
    databaseURL: "https://kwitter-project-1e462-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1e462",
    storageBucket: "kwitter-project-1e462.appspot.com",
    messagingSenderId: "251763997291",
    appId: "1:251763997291:web:8707afed7f4b7dc7e5cf2e"
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name=localStorage.getItem("room_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();