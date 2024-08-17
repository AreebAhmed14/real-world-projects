let index = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let previous = document.getElementById('previous')
let next = document.getElementById('next')

masterPlay.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
    }
})

audioElement.addEventListener("timeupdate", () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
    audioElement.currentTime = (progressBar.value / 100) * audioElement.duration;
});

// audioElement.addEventListener("ended", () => {
//     console.log("Audio ended event triggered");
//     if (progressBar.value >= 99.9) { // Using a tolerance level
//         audioElement.pause();
//         masterPlay.classList.remove("fa-pause");
//         masterPlay.classList.add("fa-play");
//         // progressBar.value = 0;
//     }
// });
let songs = [
    { filePath: "songs/1.mp3" },
    { filePath: "songs/2.mp3" },
    { filePath: "songs/3.mp3" },
    { filePath: "songs/4.mp3" },
    { filePath: "songs/5.mp3" },
    { filePath: "songs/6.mp3" },
    { filePath: "songs/7.mp3" },
    { filePath: "songs/8.mp3" },
    { filePath: "songs/9.mp3" },
    { filePath: "songs/10.mp3" },
];
let songs_image = [
    { filePath: "image/1.jfif" },
    { filePath: "image/2.jfif" },
    { filePath: "image/3.jfif" },
    { filePath: "image/4.jfif" },
    { filePath: "image/5.jfif" },
    { filePath: "image/6.jfif" },
    { filePath: "image/7.jpg" },
    { filePath: "image/8.jfif" },
    { filePath: "image/9.jfif" },
    { filePath: "image/10.jfif" },

];

Array.from(document.getElementsByClassName('songList')).forEach((element) => {
    element.addEventListener('click', (e) => {

        index = parseInt(e.target.id) // Assuming the IDs are numbers starting at 1
        console.log(index);
        audioElement.src = songs[index].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        document.querySelector(".current_song").children[0].src = songs_image[index].filePath
    });
});

audioElement.addEventListener("ended", () => {
    console.log("Audio ended event triggered");
    index +=1
    // Ensure index is within the bounds of the songs array
    if (index >= songs.length) {
        index = 0; // or handle it differently
    }
    
    audioElement.src = songs[index].filePath;
    document.querySelector(".current_song").children[0].src = songs_image[index].filePath
    audioElement.currentTime = 0; // reset to the beginning of the new song
    audioElement.play();
    progressBar.value = 0;
});

next.addEventListener('click', () => {
    index += 1
    console.log(index);
    if (index == songs.length) {
        index = 0
        audioElement.src = songs[index].filePath;
        document.querySelector(".current_song").children[0].src = songs_image[index].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
    }
    else {
        // Loop through songs
        audioElement.src = songs[index].filePath;
        document.querySelector(".current_song").children[0].src = songs_image[index].filePath
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    }
});
previous.addEventListener('click', () => {
    if (index <= 0) {
        index = 9
    }
    else {
        index -= 1
    }
    audioElement.src = songs[index].filePath;
    document.querySelector(".current_song").children[0].src = songs_image[index].filePath
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})

