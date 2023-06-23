let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  fetchData ()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
function fetchData() {
  return fetch ('http://localhost:3000/toys')
  .then (response => response.json())
  .then(data => createToy(data))
 
}
function createToy(data) {
 data.forEach(toy => {
   const toyCollection = document.getElementById('toy-collection')
   const toyContainer = document.createElement('div')
   toyContainer.innerHTML = `<div class = "toy">
   <p>${toy.name}</p>
   <img src = ${toy.image}>
   <p>likes ${toy.likes}</p>
   <button>like</button>
  </div>`
   toyCollection.appendChild(toyContainer)
   //add a new toy
   const form = document.querySelector('.add-toy-form')
   form.addEventListener('submit', (e) => {
    e.preventDefault()
    let toyName = document.querySelector('name').value
    let url = document.querySelector('image')
    console.log(toyName)
   })

  });
}