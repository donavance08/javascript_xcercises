/* eslint-disable no-unused-vars */
/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";

const setContent = (backpackObject) => {
  const content = `
    <figure class="backpack__image">
      <img src=${backpackObject.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpackObject.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpackObject.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpackObject.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpackObject.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpackObject.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpackObject.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpackObject.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpackObject.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`;

  return content;
};

// create an article for each backpack object
const articles = backpackObjectArray.map((backpackObject) => {
  // create an article element
  const article = document.createElement("article");

  // populate the content with the current backpack information
  const content = setContent(backpackObject);

  // add a "backpack" class to each article
  article.classList.add("backpack");

  // set a unique "id" for each article
  article.setAttribute("id", backpackObject.id);

  // insert the content element inside the article
  article.innerHTML = content;

  // return the updated article element
  return article;
});

const main = document.querySelector(".maincontent");

// Loop through each article and append it to the main element
articles.forEach((article) => {
  main.append(article);
});
