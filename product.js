document.addEventListener('DOMContentLoaded', function () {
    const speakerImg = document.getElementById('speaker');
    const audioFile = document.getElementById('audio-file');
    let isPlaying = false; // Initially, the audio is not playing

    speakerImg.addEventListener('click', () => {
        if (isPlaying) {
            audioFile.pause();
            speakerImg.src = "./images/icons/webButtons/speaker-off.png"; // Change to 'off' icon
        } else {
            audioFile.play();
            speakerImg.src = "./images/icons/webButtons/speaker-on.png"; // Change to 'on' icon
        }
        isPlaying = !isPlaying; // Toggle playing state
    });

    // Optional: Reset icon when audio ends
    audioFile.addEventListener('ended', () => {
        isPlaying = false;
        speakerImg.src = "./images/icons/webButtons/speaker-off.png"; // Reset to 'off' icon
    });
});

// ------------------ SECOND MUSIC BUTTON ----------------

document.addEventListener('DOMContentLoaded', function () {
    const speakerImg = document.getElementById('speaker2');
    const audioFile = document.getElementById('audio-file2');
    let isPlaying = false; // Initially, the audio is not playing

    speakerImg.addEventListener('click', () => {
        if (isPlaying) {
            audioFile.pause();
            speakerImg.src = "./images/icons/webButtons/speaker-off.png"; // Change to 'off' icon
        } else {
            audioFile.play();
            speakerImg.src = "./images/icons/webButtons/speaker-on.png"; // Change to 'on' icon
        }
        isPlaying = !isPlaying; // Toggle playing state
    });

    // Optional: Reset icon when audio ends
    audioFile.addEventListener('ended', () => {
        isPlaying = false;
        speakerImg.src = "./images/icons/webButtons/speaker-off.png"; // Reset to 'off' icon
    });
});

// ------------------ YOU ARE LEAVING PAGE NOTIFICATION ----------------
function confirmLeave() {
    return confirm("Hey there! You are about to leave our platform to buy materials from TEMU. Thank you for being with us and we hope to see you again!");
}

// ------------------ UPLOAD PHOTO CODE ----------------
document.addEventListener('DOMContentLoaded', function () {
    const fileUploadInput = document.getElementById('file-upload');
    const mediaGallery = document.getElementById('media-gallery');

    fileUploadInput.addEventListener('change', function (event) {
        const file = event.target.files[0]; // Get the selected file

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            // Once the file is read, add it to the gallery
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result; // File's content as base64
                img.alt = 'User Uploaded Image';
                img.className = 'media-item media-img'; // Apply existing styles

                // Append the image to the gallery
                mediaGallery.appendChild(img);
            };

            reader.readAsDataURL(file); // Read the file as a DataURL (base64)
        } else {
            alert('Please upload a valid image file.');
        }
    });
});

