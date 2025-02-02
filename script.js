// Select DOM elements
const videoUrlInput = document.getElementById("video-url");
const formatSelect = document.getElementById("format-select");
const selectQualityBtn = document.getElementById("select-quality-btn");
const qualitySelect = document.getElementById("quality-select");
const downloadBtn = document.getElementById("download-btn");
const progressBar = document.getElementById("progress-bar");
const message = document.getElementById("message");

// Enable "Select Quality" button when URL is provided
videoUrlInput.addEventListener("input", () => {
    if (videoUrlInput.value.trim() !== "") {
        selectQualityBtn.disabled = false;
    } else {
        selectQualityBtn.disabled = true;
    }
});

// Enable quality select and download when format is selected
formatSelect.addEventListener("change", () => {
    const selectedFormat = formatSelect.value;
    
    if (selectedFormat === "mp4") {
        qualitySelect.disabled = false;
        selectQualityBtn.disabled = false;
    } else if (selectedFormat === "mp3") {
        qualitySelect.disabled = true;
        selectQualityBtn.disabled = true;
        downloadBtn.disabled = false;
    } else {
        qualitySelect.disabled = true;
        selectQualityBtn.disabled = true;
        downloadBtn.disabled = true;
    }
});

// Simulate downloading progress
function simulateDownload() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.value = progress;

        if (progress === 100) {
            clearInterval(interval);
            message.innerText = "Download Complete!";
        }
    }, 50); // Speed of progress (can be adjusted)
}

// Handle download button click
downloadBtn.addEventListener("click", () => {
    message.innerText = "Downloading...";

    // Simulate download progress
    simulateDownload();
});

