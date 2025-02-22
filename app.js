// Get DOM elements
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

// Add click event listener to heading
heading.addEventListener("click", () => {
  // Toggle red color defined in CSS
  heading.style.color =
    heading.style.color === "red" ? "black" : "red";
});

// Add hover effect to paragraph
paragraph.addEventListener("mouseenter", () => {
  paragraph.style.fontWeight = "bold";
});

paragraph.addEventListener("mouseleave", () => {
  paragraph.style.fontWeight = "normal";
});
