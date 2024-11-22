export default function searchMeals() {
  const searchInput = document.querySelector("#search-input");

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      const query = event.target.value.trim();

      if (event.key === "Enter" && query) {
        const currentUrl = window.location.pathname;
        const newUrl = `/meals`;

        if (currentUrl !== newUrl) {
          window.history.pushState({ query }, "", newUrl);

          window.location.pathname = newUrl;
        }
      }
    });
  }
}
