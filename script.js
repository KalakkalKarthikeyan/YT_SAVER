let videoUrl = "";

function fetchVideoInfo() {
    videoUrl = document.getElementById("url").value;
    if (!videoUrl) return alert("Please enter a YouTube URL");

    fetch('https://api.example.com/get_video_info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: videoUrl })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) return alert(data.error);

        document.getElementById("thumbnail").src = data.thumbnail;
        document.getElementById("title").innerText = data.title;
        document.getElementById("duration").innerText = `Duration: ${data.duration} seconds`;

        let qualitySelect = document.getElementById("quality");
        qualitySelect.innerHTML = "";
        data.qualities.forEach(q => {
            let option = document.createElement("option");
            option.value = q;
            option.innerText = q;
            qualitySelect.appendChild(option);
        });

        document.getElementById("video-info").style.display = "block";
    });
}

function toggleQuality() {
    let format = document.getElementById("format").value;
    document.getElementById("quality").style.display = (format === "mp4") ? "block" : "none";
}

function startDownload() {
    let format = document.getElementById("format").value;
    let quality = document.getElementById("quality").value;

    fetch('https://api.example.com/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: videoUrl, format: format, quality: quality })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) return alert(data.error);
        alert(data.message);
    });

    updateProgress();
}

function updateProgress() {
    fetch('https://api.example.com/progress')
    .then(response => response.json())
    .then(data => {
        document.getElementById("progress").style.width = data.progress + "%";
        document.getElementById("progress").innerText = data.progress + "%";
        
        if (data.progress < 100) {
            setTimeout(updateProgress, 500);
        }
    });
}
