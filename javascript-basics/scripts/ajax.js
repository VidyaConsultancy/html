const apiUrl = "https://fakestoreapi.com/products";

function fetchProducts() {
  const req = new XMLHttpRequest();
  req.addEventListener("readystatechange", function (e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const res = e.target.responseText;
      const response = JSON.parse(res);
      const products = document.createElement("div");
      products.classList.add("products");
      response.forEach((obj) => {
        const product = document.createElement("div");
        product.classList.add("product");
        const title = document.createElement("h3");
        title.classList.add("product__title");
        title.innerHTML = obj.title;
        product.appendChild(title);
        products.appendChild(product);
      });
      document.body.append(products);
    }
  });
  req.open("GET", apiUrl);
  req.send();

  // HTTP Methods GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
  // HTTP response codes 200, 300, 303, 201, 400, 401, 404, 500
}

function fetchProductsNew() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const products = document.createElement("div");
      products.classList.add("products");
      response.forEach((obj) => {
        const product = document.createElement("div");
        product.classList.add("product");
        const title = document.createElement("h3");
        title.classList.add("product__title");
        title.innerHTML = obj.title;
        product.appendChild(title);
        products.appendChild(product);
      });
      document.body.append(products);
    })
    .catch((err) => console.error(err));
}
