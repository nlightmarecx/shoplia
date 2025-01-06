document.addEventListener('DOMContentLoaded', function () {
    const speakerImg = document.getElementById('speaker');
    const audioFile = document.getElementById('audio-file');
    let isPlaying = false; // Initially, the audio is not playing

    speakerImg.addEventListener('click', () => {
        if (isPlaying) {
            audioFile.play();
            speakerImg.src = "./images/speaker-on.png"; // Change to 'on' icon
        } else {
            audioFile.pause();
            speakerImg.src = "./images/speaker-off.png"; // Change to 'off' icon
        }
        isPlaying = !isPlaying; // Toggle playing state
    });

    // Optional: Reset icon when audio ends
    audioFile.addEventListener('ended', () => {
        isPlaying = false;
        speakerImg.src = "./images/speaker-off.png"; // Reset to 'off' icon
    });
});