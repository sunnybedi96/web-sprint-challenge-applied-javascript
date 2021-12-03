axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
    response.data.topics.forEach((item) => {
      divTopics.appendChild(tabs(item));
    });

    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

function tabs(obj) {
  const divTab = document.createElement("div");
  divTab.classList.add("tab");
  divTab.textContent = obj;

  return divTab;
}

const divTopics = document.querySelector("div.topics");