document.getElementById("fileType").addEventListener("change", function() {
  var fileType = this.value;
  var qualitySelect = document.getElementById("quality");
  var qualityLabel = document.getElementById("qualityLabel");

  if (fileType === "mp4") {
    qualitySelect.style.display = "inline-block";
    qualityLabel.style.display = "inline-block";
  } else {
    qualitySelect.style.display = "none";
    qualityLabel.style.display = "none";
  }
});

document.getElementById("downloadButton").addEventListener("click", function() {
  var videoUrl = document.getElementById("videoUrl").value;
  var fileType = document.getElementById("fileType").value;
  var quality = document.getElementById("quality").value;

  if (videoUrl && fileType) {
    simulateDownload(fileType, quality);
  } else {
    alert("Please fill in all fields.");
  }
});

function simulateDownload(fileType, quality) {
  var progressBar = document.getElementById("progressBar");
  var downloadButton = document.getElementById("downloadButton");

  // Disable the button during download simulation
  downloadButton.disabled = true;

  var progress = 0;
  var interval = setInterval(function() {
    progress += 10;
    progressBar.style.width = progress + "%";

    if (progress === 100) {
      clearInterval(interval);
      alert(fileType.toUpperCase() + " download complete!");

      // Simulate file download (for demonstration)
      var downloadLink = document.createElement("a");
      downloadLink.href = fileType === "mp3" 
        ? "https://www.example.com/sample.mp3" // Replace with MP3 file URL
        : "https://www.example.com/sample.mp4"; // Replace with MP4 file URL
      downloadLink.download = fileType === "mp3" ? "audio.mp3" : "video.mp4";
      downloadLink.click();

      // Enable the button again
      downloadButton.disabled = false;
    }
  }, 500);
}
