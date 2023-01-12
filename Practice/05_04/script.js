/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

//    1 .Identify specific elements you want to target

//    page-header

//    2 .Use console (script.js file) to find those target elements

document.querySelector(".backpack__name").innerHTML = "ONCE A WEEK BACKPACK";

//     3. Target specific elements nested inside other elements
document.querySelector(".page-header > h2").innerHTML =
  "Backpacks are overrated";

//     4. Try advanced CSS queries to get specific targets

const elements = document.querySelectorAll(".feature.backpack__color");
elements.forEach((element) => {
  element.style.backgroundColor = element.querySelector("span").innerHTML;
});
