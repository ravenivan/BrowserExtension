let myLeads = []
let listItems = ""
let ulEl = document.getElementById('ul-el')
let inputEl = document.getElementById('input-el')
let button = document.getElementById('input-btn')

button.addEventListener('click', () => {
  myLeads.push('www...')
  renderLeads()
})

const renderLeads = () => {
  listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += 
      `<li>
        <a href="" target="_blank"> ${myLeads[i]} </a>
      </li>`
    ulEl.innerHTML = listItems
  }
}
