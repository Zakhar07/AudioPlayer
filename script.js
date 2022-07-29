var data = {
    title: [
    "Lil Nas X - Old Town Road",
    "San Andreas - Theme Song",
    "Rick Astley - Never Gonna Give You Up",
    "Imagine Dragons - Believer",
    "Marsmello - Alone",
    "Michael Jackson - Billie Jean",  
    "Rag'n'Bone Man - Human",
    "Imagine Dragons - Whatever It Takes",
    "OneRepublic - Counting Stars"
],
    song: [
        "music/Old Town Road Mp3 By Billy Ray Cyrus and Lil Nas X.mp3",
        "music/Grand-Theft-Auto-San-Andreas-Theme-Song.mp3",
        "music/Rick_Astley_-_Never_Gonna_Give_You_Upcom.mp3",     
        "music/Imagine-Dragons-Believer.mp3",
        "music/Marshmello_Alone_(thinkNews.com.ng).mp3",
        "music/Michael_Jackson_Billie_Jean_(thinkNews.com.ng).mp3",      
        "music/Rag_n_Bone Man - Human.mp3",   
        "music/imagine-dragons-whatever-it-takes(mp3bit.cc).mp3",
        "music/onerepublic-counting-stars(mp3gid.me).mp3"                  

    ],
    poster:[
        "https://i.ytimg.com/vi/r7qovpFAGrQ/maxresdefault.jpg",
        "https://gs2us.com/games/wp-content/uploads/2021/01/1611858606_439_gta-san-andreas-steam.jpg",
        "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        "https://i1.sndcdn.com/artworks-LNPe2bXMyzD7nqe3-40PWag-t500x500.jpg",
        "https://i.ytimg.com/vi/ALZHF5UqnU4/hqdefault.jpg",
        "https://i.scdn.co/image/ab67616d0000b2739eb690cb054df293fe7711b8",      
       "https://i1.sndcdn.com/artworks-000371266992-69etln-t500x500.jpg",
       "https://i.ytimg.com/vi/M66U_DuMCS8/maxresdefault.jpg",
       "https://i.ytimg.com/vi/tzMGDIU_-ow/maxresdefault.jpg"

    ]
} 
var song = new Audio();

window.onload = function () {
    playSong ();
}

var currentSong = 0;

function playSong () {
    song.src = data.song[currentSong];

    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url("+ data.poster[currentSong]; +")";

    let main = document.getElementById("main");
    main.style.backgroundImage = "url("+ data.poster[currentSong]; +")";
    song.play();
}


function playOrPauseSong () {
    let play = document.getElementById("play");

    if (song.paused) {
        song.play();
        play.src = "images/pause.png"; //pause
    }else {
        song.pause();
        play.src = "images/play-button-arrowhead.png"; //play
    }
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementById("fill");
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; //fill

    converTime(song.currentTime); //cur. time

    if  (song.ended) {
        next();
    }
})

function converTime(seconds){
   var currentTime = document.getElementById("currentTime");
   let min = Math.floor(seconds / 60)
   let sec = Math.floor(seconds % 60)

   min = (min < 10) ? "0" + min :min ; 
   sec = (sec < 10) ? "0" + sec : sec;

   currentTime.textContent = min + ":" + sec;

   totalTime(Math.round(song.duration))

}
function totalTime (seconds){  
    var min = Math.floor(seconds / 60);
    var sec = Math.floor(seconds % 60);
    min = (min < 10) ? "0" + min :min ; 
    sec = (sec < 10) ? "0" + sec : sec;

    if (isNaN(min) || isNaN(sec)) {
        return false;
    }else{

        currentTime.textContent += "/" + min + ":" + sec; 
    }

}
function next(){
    currentSong++;
    if (currentSong >= data.song.length){
        currentSong = 0
    }
    playSong();
    play.src = "images/pause.png"
}

function pre() {
    currentSong--;
    if(currentSong < 0){
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}

function muted(){
    var mute = document.getElementById("mute")
    if(song.muted){
        song.muted = false;
        mute.src = "images/volume.png";
    }else{
        song.muted = true;
        mute.src = "images/volume-mute.png";
    }
}

function decrease(){
    song.volume -= 0.2;
}

function increase(){
    song.volume += 0.2;
}