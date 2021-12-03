const Card = (article) => {
  const divCard = document.createElement('div');
  const headlineSection = document.createElement('div');
  const author = document.createElement('div');
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  const spanName = document.createElement('span');

  divCard.classList.add('card');
  headlineSection.classList.add('headline');
  author.classList.add('author');
  divImg.classList.add('img-container')

  headlineSection.textContent = article.headline;
  img.src = article.authorPhoto;
  spanName.textContent = `By ${article.authorName}`;

  divCard.appendChild(headlineSection);
  divCard.appendChild(author);
  author.appendChild(divImg);
  divImg.appendChild(img);
  author.appendChild(spanName);

  divCard.addEventListener('click', () => {
    console.log(article.headline);
  })
  return divCard
}
const cardAppender = (selector) => {
  const selected = document.querySelector(selector)
  axios.get('http://localhost:5000/api/articles').then(resp => {
  const bootstrap = resp.data.articles.bootstrap
  bootstrap.forEach(elem => {
    selected.appendChild(Card(elem))
  })
  const javascript = resp.data.articles.javascript
  javascript.forEach(elem => {
    selected.appendChild(Card(elem))
  })
  const technology = resp.data.articles.technology
  technology.forEach(elem => {
    selected.appendChild(Card(elem))
  })
  const jquery = resp.data.articles.jquery
  jquery.forEach(elem => {
    selected.appendChild(Card(elem))
  })
  const node = resp.data.articles.node
  node.forEach(elem => {
    selected.appendChild(Card(elem))
  })
})
.catch(err => {
  console.error(err)
})
}

export { Card, cardAppender }