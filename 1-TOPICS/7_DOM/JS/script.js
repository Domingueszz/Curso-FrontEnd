/* Movendo-se pelo DOM */

console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

/* selecionado por tag */
const listItens = document.getElementsByTagName("li");
console.log(listItens);

/* selecionado por id */
const title = document.getElementById("title");
console.log(title);

/* selecionado por classe */
const products = document.getElementsByClassName("product")
console.log(products);

/* selecionado por css */
const productQuery = document.querySelectorAll(".product");
console.log(productQuery);


// InsertBefore -------------------- (add anterior)
const p = document.createElement("p");

const header = title.parentElement

header.insertBefore(p, title);
console.log(header)

// InsertBefore -------------------- (add no conjunto)
const navLinks = document.querySelector ("nav ul");
const li = document.createElement("li")

navLinks.appendChild(li);

// Replacechild -------------------- (trocar elemento)
const h2 = document.createElement("h2");
h2.textContent = "My new Title!";

header.replaceChild(h2, title);


// Atributos ------------------------------------------
const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com", "_blank");
console.log(firstLink.getAttribute("href"));


// altura e largura ------------------------------------------
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

