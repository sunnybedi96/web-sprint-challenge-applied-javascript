
const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const spanDate = document.createElement('span');
  const heading1 = document.createElement('h1');
  const span2 = document.createElement('span');


  headerDiv.classList.add('header');
  spanDate.classList.add('date');
  span2.classList.add('temp');

  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(heading1);
  headerDiv.appendChild(span2);

  heading1.textContent = title;
  spanDate.textContent = date;
  span2.textContent = temp;

return headerDiv

}
const headerAppender = (selector) => {
  const selectorDate = document.querySelector(selector);
  selectorDate.appendChild(Header(
    'Lambda Times', 'December 3, 2021', '32°F'
  ))


}


export { Header, headerAppender }