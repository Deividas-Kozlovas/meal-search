export default async function getSixMeals() {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const mealPromises = [];
  const storedMeals = localStorage.getItem("sixMeals");

  if (storedMeals) {
    return JSON.parse(storedMeals);
  }

  for (let i = 0; i < 6; i++) {
    mealPromises.push(fetch(API_URL).then((response) => response.json()));
  }

  try {
    const meals = await Promise.all(mealPromises);
    const fetchedMeals = meals.map((mealData) => mealData.meals[0]);
    localStorage.setItem("sixMeals", JSON.stringify(fetchedMeals));
    return fetchedMeals;
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}
