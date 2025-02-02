document.getElementById("loadVideoButton").addEventListener("click", function() {
    const videoUrl = document.getElementById("videoUrl").value;
    const videoId = getYouTubeVideoId(videoUrl);

    if (videoId) {
        loadYouTubeVideo(videoId);
    } else {
        alert("Please paste a valid YouTube URL.");
    }
});

function getYouTubeVideoId(url) {
    // Extracts video ID from YouTube URL
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function loadYouTubeVideo(videoId) {
    // Show the YouTube video player and set the video source
    const playerContainer = document.getElementById("videoPlayerContainer");
    const player = document.getElementById("youtubePlayer");
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    playerContainer.style.display = 'block';
    document.getElementById("downloadOptions").style.display = 'block';
}

document.getElementById("fileType").addEventListener("change", function() {
    const fileType = this.value;
    if (fileType === "mp4") {
        document.getElementById("qualityOptions").style.display = 'block';
    } else {
        document.getElementById("qualityOptions").style.display = 'none';
    }
});

document.getElementById("downloadButton").addEventListener("click", async function() {
    const videoUrl = document.getElementById("videoUrl").value;
    const fileType = document.getElementById("fileType").value;
    const quality = document.getElementById("quality").value;

    if (videoUrl && fileType) {
        try {
            // Show progress bar and start the download request
            document.getElementById('progressContainer').style.display = 'block';
            document.getElementById('progressBar').style.width = '10%';
            
            // Simulate file download progress
            let progress = 10;
            const interval = setInterval(() => {
                progress += 10;
                document.getElementById('progressBar').style.width = progress + '%';

                if (progress >= 100) {
                    clearInterval(interval);
                    downloadVideo(videoUrl, fileType, quality);
                }
            }, 500);
        } catch (error) {
            alert('Failed to download: ' + error.message);
        }
    } else {
        alert("Please fill in all fields.");
    }
});

function downloadVideo(url, fileType, quality) {
    // Simulate the video download process (backend part required here)
    // For demo purposes, we'll just trigger the file download instantly
    alert('Video downloaded successfully!');
    document.getElementById('progressContainer').style.display = 'none';
}
