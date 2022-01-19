var firebaseConfig = {
      apiKey: "AIzaSyCuFOm7c9ohCI81eNww2NIzLGX3rymevfw",
      authDomain: "kwitter-8dc0f.firebaseapp.com",
      databaseURL: "https://kwitter-8dc0f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8dc0f",
      storageBucket: "kwitter-8dc0f.appspot.com",
      messagingSenderId: "649309023666",
      appId: "1:649309023666:web:b47f4c059c9da5232d08ab"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like : 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code//

//End code//
      } });  }); }
getData();
