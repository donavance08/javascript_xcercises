/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const cells = document.querySelectorAll("li").values();

const mainUL = document.querySelector("main ul");

for (const cell of cells) {
  const originalColor = cell.style.backgroundColor;

  cell.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "red";
  });

  cell.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = originalColor;
  });

  mainUL.append(cell);
}

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "e") {
    let backgroundColor = e.target.style.backgroundColor;
    e.target.style.backgroundColor = backgroundColor === "gray" ? "" : "gray";
  }
});
