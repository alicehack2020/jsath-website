const video = document.createElement('video');

// 👇️ Local file
// video.src = 'video.mp4';
var videoLink=JSON.parse(localStorage.getItem("videoLink")) 
var imageLink=JSON.parse(localStorage.getItem("imageLink"))

// 👇️ Remote file]
video.src =videoLink;
video.poster =imageLink;
  

video.autoplay = false;
video.controls = true;
video.muted = false;
video.height = 500; // 👈️ in px
video.width = 950; // 👈️ in px

const box = document.getElementById('box');

box.appendChild(video);
