let sound_die = new Audio('audio/cinta.mp4');
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const backgroundMusic = document.getElementById("backgroundMusic");
  
    startButton.addEventListener("click", function () {
      backgroundMusic.play();
      startButton.style.display = "none"; // Menyembunyikan tombol "Mulai" setelah musik dimulai
    });
  
    // Juga, jika tombol "Enter" ditekan, memulai musik
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        backgroundMusic.play();
        startButton.style.display = "none"; // Menyembunyikan tombol "Mulai" setelah musik dimulai
      }
    });
  });

