let myLeads = localStorage.getItem("leadsFromLocalStorage") 
? JSON.parse(localStorage.getItem("leadsFromLocalStorage")) 
: []
let listItems = ""
let ulEl = document.getElementById('ul-el')
let inputEl = document.getElementById('input-el')
let button = document.getElementById('input-btn')
let saveButton = document.getElementById('save-btn')
let deleteButton = document.getElementById('delete-btn')

const renderLeads = () => {
  if (myLeads.length === 0) {
    ulEl.innerHTML = ""
    return
  }

  listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += 
      `<li>
        <a href="" target="_blank"> ${myLeads[i]} </a>
      </li>`
    ulEl.innerHTML = listItems
  }
}

if (myLeads.length > 0) {
  renderLeads()
}


console.log(myLeads);

button.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  renderLeads()
  localStorage.setItem("leadsFromLocalStorage", JSON.stringify(myLeads) )
  console.log( localStorage.getItem("leadsFromLocalStorage") )
})

saveButton.addEventListener('click', () => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function 
    (tabs) {
      myLeads.push(tabs[0].url)
      localStorage.setItem("leadsFromLocalStorage", JSON.stringify(myLeads))
      renderLeads()
    });
})

deleteButton.addEventListener('click', () => {
  localStorage.clear()
  myLeads = []
  renderLeads()
  console.log('asd');
  
})





