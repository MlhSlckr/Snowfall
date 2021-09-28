function createSnow() {
  const rotate = Math.random() * 180 + 180;
  const snow = document.createElement("i");
  snow.classList.add("far");
  snow.classList.add("fa-snowflake");
  snow.style.left = Math.random() * 100 + "%";
  snow.style.transform = `rotate(${Math.random() * -180 + 360}deg)`;
  snow.style.fontSize = Math.random() * 20 + 15 + "px";
  snow.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.querySelector("body").appendChild(snow);
  setTimeout(() => {
    snow.remove();
  }, 5000);
}

setInterval(createSnow, 0);
