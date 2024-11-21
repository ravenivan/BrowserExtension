let myLeads = localStorage.getItem("leadsFromLocalStorage") ? 
(JSON.parse(localStorage.getItem("leadsFromLocalStorage")), renderLeads()) : 
[]
let listItems = ""
let ulEl = document.getElementById('ul-el')
let inputEl = document.getElementById('input-el')
let button = document.getElementById('input-btn')

console.log(myLeads);


button.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  renderLeads()
  localStorage.setItem("leadsFromLocalStorage", JSON.stringify(myLeads) )
  console.log( localStorage.getItem("leadsFromLocalStorage") )
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




