import ajaxService from "../services/ajaxService";

export default function listMealsByFirstLetter() {
  const searchInput = document.querySelector("#search-meal-input");
  const dataList = document.querySelector("#meal-options");

  if (searchInput && dataList) {
    searchInput.addEventListener("input", async (event) => {
      const query = event.target.value.trim();

      if (query.length === 1 && /^[a-zA-Z]$/.test(query)) {
        try {
          const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
          const mealData = await ajaxService(apiUrl);

          if (mealData && Array.isArray(mealData.meals)) {
            populateDatalist(mealData.meals, dataList);
          } else {
            clearDatalist(dataList);
          }
        } catch (error) {
          console.error("Error fetching meals by letter:", error);
          clearDatalist(dataList);
        }
      } else if (query.length === 0) {
        clearDatalist(dataList);
      }
    });
  }
}

function populateDatalist(meals, dataList) {
  clearDatalist(dataList);

  meals.forEach((meal) => {
    const option = document.createElement("option");
    option.value = meal.strMeal;
    dataList.appendChild(option);
  });
}

function clearDatalist(dataList) {
  dataList.innerHTML = "";
}
