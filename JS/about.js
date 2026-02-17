
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const speed = target / 180;

    const updateCount = () => {
      current += speed;
      if (current < target) {
        counter.innerText = Math.floor(current) + "+";
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
});

