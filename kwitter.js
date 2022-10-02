function addUser(){
    user1 = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user1);
    window.location = "kwitter_room.html";
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOu70VtzHqbTfYKM28OXip6TAKHir33gU",
    authDomain: "kwitter-4e9df.firebaseapp.com",
    databaseURL: "https://kwitter-4e9df-default-rtdb.firebaseio.com",
    projectId: "kwitter-4e9df",
    storageBucket: "kwitter-4e9df.appspot.com",
    messagingSenderId: "774038917960",
    appId: "1:774038917960:web:b37145a3db8f6e0a16d97d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);