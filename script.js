 // Function to open the camera
 function openCamera() {
    // Using getUserMedia API to access the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const videoElement = document.createElement('video');
            videoElement.srcObject = stream;
            videoElement.autoplay = true;
            document.getElementById('videoContainer').appendChild(videoElement);
        })
        .catch(error => {
            console.error('Error accessing camera:', error);
        });
}

// Function to close the camera
function closeCamera() {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(element => {
        const stream = element.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => {
            track.stop();
        });
        element.srcObject = null;
        document.getElementById('videoContainer').removeChild(element);
    });
}

// Event listener for opening the camera
document.getElementById('openCameraBtn').addEventListener('click', openCamera);

// Event listener for closing the camera
document.getElementById('closeCameraBtn').addEventListener('click', closeCamera);