const highScoresList = document.querySelector('#highScoresList');

var firebaseConfig = {
    apiKey: "AIzaSyD1tR5Bue3rqfOpnrAgMpI0AhVo2EZxgUI",
    authDomain: "save-78404.firebaseapp.com",
    projectId: "save-78404",
    storageBucket: "save-78404.appspot.com",
    messagingSenderId: "984500896672",
    appId: "1:984500896672:web:b757de14584d092fcf9ac5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var ref = database.ref("scores");

ref.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        
        var data = childSnapshot.val();

        console.log(data.name + " - ", data.score);

        const HighScore = document.createElement('li');

        HighScore.classList.add('high-score');

        HighScore.innerHTML = `${data.name} - ${data.score}`;

        highScoresList.appendChild(HighScore);
    })
})