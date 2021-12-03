const Tabs = (topics) => {
  const topicDiv = document.createElement('div');
  topicDiv.classList.add('topics')
  topics.forEach(item => {
    const tabs = document.createElement('div')
    tabs.textContent = item
    tabs.classList.add('tab')
    topicDiv.appendChild(tabs)
  })
  return topicDiv

}
const tabsAppender = (selector) => {
  axios.get(`http://localhost:5000/api/topics`).then(res => {
    console.log(res)
    const tabHolder = document.querySelector(selector);
    const topic = res.data.topics;
    const newTab = Tabs(topic);
    tabHolder.appendChild(newTab)
  })
  .catch(err => {
    console.error(err)
  })
  .finally(()=> console.log)
}

export { Tabs, tabsAppender }