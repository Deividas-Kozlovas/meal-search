import "./searchFilterComponent.scss";

export default function searchFilterComponent() {
  return `
    <div class="filter-container">
      <form id="filter-form" class="filter" action="#">
        <div class="filter__group">
          <input
            id="ingredient-filter"
            name="ingredient"
            type="text"
            placeholder="Filter by ingredient"
            class="filter__input"
          />
        </div>
        <div class="filter__group">
          <input
            id="category-filter"
            name="category"
            type="text"
            placeholder="Filter by food category"
            class="filter__input"
          />
        </div>
        <div class="filter__group">
          <input
            id="area-filter"
            name="area"
            type="text"
            placeholder="Fillter by location"
            class="filter__input"
          />
        </div>
        <div>
          <button type="submit" class="filter__button">Filter Meals</button>
        </div>
      </form>
      <div class="random-meal-container">
        <button type="submit" class="random-meal" id="random-meal">Random meal</button>
      </div>
    </div>
  `;
}
