import { recipes } from "./recipes.js";

const recipeList = document.querySelector(".row.g-4");

function displayRecipes(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const recipeItem = document.createElement("div");
    recipeItem.classList.add("col-md-4");
    recipeItem.innerHTML = `
         <div class="card h-100 shadow-sm">
    <div class="ratio ratio-16x9">
        <img src="./assets/images/${
          recipe.image
        }" class="card-img-top object-fit-cover" alt="${
      recipe.name
    }" style="object-fit: cover;">
    </div>
    <div class="card-body text-center d-flex flex-column justify-content-between">
        <h5 class="card-title" style="font-size: 0.9rem; font-weight: bold;">${
          recipe.name
        }</h5>
        ${
          recipe.description
            ? `<p class='card-text text-truncate' style='font-size: 0.875rem;'>${recipe.description}</p>`
            : ""
        }
    </div>
</div>

    `;
    recipeList.appendChild(recipeItem);
  });
}

function viewRecipe(index) {
  localStorage.setItem("selectedRecipe", JSON.stringify({ index, recipes }));
  window.location.href = "recipe-details.html";
}

displayRecipes(recipes);

document.querySelector(".btn.btn-warning").addEventListener("click", () => {
  displayRecipes(recipes);
});
