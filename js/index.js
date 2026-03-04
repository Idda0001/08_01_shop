const grid = document.querySelector(".forside_katagorier");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((categories) => {
    console.log(categories);
    let markup = "";
    categories.forEach(
      (element) =>
        (markup += `
        <a href="productlist.html?category=${element.category}" class="button">${element.category}</a>
`),
    );
    grid.innerHTML = markup;
  });
