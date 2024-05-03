document.getElementById("confetti-btn").addEventListener("click", function () {
  var confettiSettings = {
    target: "confetti-canvas",
    max: 150,
    size: 2,
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: 25,
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(function () {
    confetti.clear();
  }, 5000); // Efface les confettis après 5 secondes
});
