// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    const speakerImg = document.getElementById('speaker');
    const audioFile = document.getElementById('audio-file');
    let isPlaying = true; // Initially, the audio is not playing

    speakerImg.addEventListener('click', () => {
        if (isPlaying) {
            audioFile.pause();
            speakerImg.src = "../../01b-Home-Imgs/speaker-off.png"; // Change to 'off' icon
        } else {
            audioFile.play();
            speakerImg.src = "../../01b-Home-Imgs/speaker-on.png"; // Change to 'on' icon
        }
        isPlaying = !isPlaying; // Toggle playing state
    });

    // Optional: Reset icon when audio ends
    audioFile.addEventListener('ended', () => {
        isPlaying = false;
        speakerImg.src = "../../01b-Home-Imgs/speaker-off.png"; // Reset to 'off' icon
    });
});
