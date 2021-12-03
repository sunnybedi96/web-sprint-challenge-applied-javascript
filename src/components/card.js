const cardContainer = document.querySelector("div.cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    let articleCard = response.data.articles;
    console.log(articleCard);
    Object.entries(articleCard).forEach((articleloop) => {
      console.log(articleloop[1]);
      articleloop[1].forEach((articles) =>
        cardContainer.appendChild(articleMaker(articles))
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

function articleMaker(article) {
  const card = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  card.append(headLine, author);
  author.append(imgContainer, authorName);
  imgContainer.appendChild(image);

  headLine.textContent = article.headline;
  authorName.textContent = article.authorName;
  image.src = article.authorPhoto;

  return card;
}
