const previousSong = document.querySelector("#previousSong");
const nextSong = document.querySelector("#nextSong");
const btnPlay = document.querySelector("#btnPlay");

let audioArr = [
  "./music/Benson Boone_GHOST TOWN.mp3",
  "./music/Bruno Mars_Count on me.mp3",
  "./music/Coldplay_Viva La Vida.mp3",
  "./music/Sia_Unstoppable.mp3",
  "./music/Tai Verdes_LAst dAy oN EaRTh.mp3",
  "./music/Sam Ryder_SPACE MAN.mp3",
];

const myAudio = new Audio();

function placing(controlNum) {
  myAudio.src = audioArr[controlNum];
  songName.innerHTML = audioArr[controlNum];
  const song = audioArr[controlNum].substring(8);
  const songArr = song.split("_");
  songName.innerHTML = songArr[1].split(".", 1);
  singer.innerHTML = songArr[0];
}

let controlNum = 0;
placing(controlNum);
const limit = audioArr.length - 1;

// 토글 버튼
let isitplay = false;
function playPause() {
  if (isitplay === false) {
    isitplay = true;
    myAudio.play();
  } else {
    isitplay = false;
    myAudio.pause();
  }
}

function next() {
  controlNum >= limit ? (controlNum = 0) : (controlNum += 1);
  placing(controlNum);
}

function previous() {
  controlNum <= 0 ? (controlNum = limit) : (controlNum -= 1);
  placing(controlNum);
}

btnPlay.addEventListener("click", playPause);
nextSong.addEventListener("click", next);
previousSong.addEventListener("click", previous);
