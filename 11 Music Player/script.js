let songs = [
  {
    songName: "Tera Roothna",
    url: "./Audio/tera-roothna-reprise-romantic-trending-latest-song-viral-345163.mp3",
    image: "./poster/Tera Roothna.jpg",
  },
  {
    songName: "Teri ye aada",
    url: "./Audio/teri-ye-adaa-romantic-song-206526.mp3",
    image: "./poster/Teri ye ada.webp",
  },
  {
    songName: "Tu hai meri",
    url: "./Audio/Tu Hai Meri Sunny Sanskari Ki Tulsi Kumari 128 Kbps.mp3",
    image: "./poster/tu-hai-meri-sunny-sanskari-ki-tulsi-kumari-500-500.jpg",
  },
  {
    songName: "Tum mere na huye",
    url: "./Audio/Tum Mere Na Huye Thamma 320 Kbps.mp3",
    image: "./poster/tum-mere-na-huye-thamma-500-500.jpg",
  },
];

let allSong = document.querySelector("#all-song");
let selectedSong = 0;
let audio = new Audio();
let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");
let likebtn = document.querySelector("#like");
let like = document.querySelector("#like i");
let songCard = document.querySelectorAll(".songCard")

function list() {
  let clutter = "";
  songs.forEach(function (val, idx) {
    clutter += `<div class="song-card" id="${idx}"> 
                    <div class="details">
                        <img src="${val.image}" alt="">
                        <h2>${val.songName}</h2>
                    </div>
                    <div class="time">
                        3:55
                    </div>
                </div>`;
  });
  allSong.innerHTML = clutter;

  audio.src = songs[selectedSong].url;
  document.querySelector(
    "#left"
  ).style.backgroundImage = `url('${songs[selectedSong].image}')`;
}
list();

allSong.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  list();
  audio.play();
  play.innerHTML = `<i class="ri-pause-line"></i>`
  flag = 1
//   songCard[dets.target.id].style.backgroundColor = "#3d4970";
});

let flag = 0
play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-line"></i>`
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        audio.pause()
        flag = 0
    }

})

forward.addEventListener("click",function(){
    if(selectedSong < songs.length -1){
        selectedSong++
        list()
        play.innerHTML = `<i class="ri-pause-line"></i>`
        flag = 1
        audio.play()
        backward.style.opacity = 1
    }else{
        forward.style.opacity = 0.3
    }
})
backward.addEventListener("click",function(){
    if(selectedSong > 0){
        selectedSong--
        list()
        play.innerHTML = `<i class="ri-pause-line"></i>`
        flag = 1
        audio.play()
        forward.style.opacity = 1
    }else{
        backward.style.opacity = 0.3
    }
})

function favourite(){
    let flag = 0;
    likebtn.addEventListener("click",function(){
        if(flag == 0){
            like.style.color = "red";
            flag = 1;
        }else{
            like.style.color = "white"
            flag = 0
        }
    })
}
favourite()