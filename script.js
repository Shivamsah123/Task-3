// --- Image Carousel ---
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showImage(i) {
  images.forEach((img, idx) => {
    img.classList.toggle("active", idx === i);
  });
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  showImage(index);
});

// --- Joke API Fetch ---
async function getJoke() {
  const jokeEl = document.getElementById("joke");
  jokeEl.innerText = "Loading...";
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await res.json();
    jokeEl.innerText = data.joke || "No joke found.";
  } catch (error) {
    jokeEl.innerText = "Failed to fetch joke.";
  }
}
