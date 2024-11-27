import ajaxService from "../services/ajaxService";

export default function listMealsByFirstLetter() {
  const searchInput = document.querySelector("#search-meal-input");
  const dataList = document.querySelector("#meal-options");

  if (searchInput && dataList) {
    searchInput.addEventListener("input", async (event) => {
      const query = event.target.value.trim();

      if (query.length === 1 && /^[a-zA-Z]$/.test(query)) {
        const localStorageKey = `meals-by-letter-${query.toLowerCase()}`;

        const storedData = localStorage.getItem(localStorageKey);

        if (storedData) {
          const mealData = JSON.parse(storedData);
          populateDatalist(mealData, dataList);
        } else {
          try {
            const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
            const mealData = await ajaxService(apiUrl);

            if (mealData && Array.isArray(mealData.meals)) {
              localStorage.setItem(
                localStorageKey,
                JSON.stringify(mealData.meals)
              );

              populateDatalist(mealData.meals, dataList);
            } else {
              clearDatalist(dataList);
            }
          } catch (error) {
            console.error("Error fetching meals by letter:", error);
            clearDatalist(dataList);
          }
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
