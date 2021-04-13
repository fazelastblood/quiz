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



const username = document.querySelector('#username');
const savedScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    savedScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
    e.preventDefault();

    if (username.value < 2) {
        alert("Name Is To Short");
    } else {
        const score = {
            score: mostRecentScore,
            name: username.value
        }

        var database = firebase.database();

        var ref = database.ref("scores");

        ref.push(score);

        savedScoreBtn.disabled = true;
        savedScoreBtn.innerHTML = "Saved";

    }
}