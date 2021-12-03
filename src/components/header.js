
function Header() {
  // creating the variables for this component
  const div = document.createElement("div");
  const span = document.createElement("span");
  const h1 = document.createElement("h1");
  const span2 = document.createElement("span");

  // giving them classes
  div.classList.add("header");
  span.classList.add("date");
  span2.classList.add("temp");

  //passing in data
  span.textContent = "Smarch 28, 2019";
  h1.textContent = "Lambda Times";
  span2.textContent = "98°";

  //appending them
  div.appendChild(span);
  div.appendChild(h1);
  div.appendChild(span2);

  return div;
}

const headerContainer = document.querySelector("div.header-container");

headerContainer.appendChild(Header());