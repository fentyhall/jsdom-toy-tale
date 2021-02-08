let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
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

const toyCollection = document.getElementById('toy-collection');

fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(json => json.forEach(toy => {
    renderToys(toy)
  }))
    
function renderToys(toy) {
  let divCard = document.createElement("div");
  divCard.className = "card";
  
  let newH2 = document.createElement("h2");
  newH2.innerText = toy["name"];

  let newImg = document.createElement("img")
  newImg.className = "toy-avatar";
  newImg.src = toy["image"];

  let newP = document.createElement("p");
  newP.innerText = `${toy["likes"]} likes`;

  let newButton = document.createElement("button");
  newButton.className = "like-btn"; 
  newButton.innerText = "Like ❤️";

  divCard.append(newH2, newImg, newP, newButton);
  toyCollection.append(divCard);
}
  
// const createANewToy = document.getElementsByClassName("add-toy-form");
// createANewToy.addEventListener("submit", (e) => {
//   e.preventDefault();
//   submitData;
//   e.target.reset;
// });

// function submitData(name, image, likes) {
//   return fetch("http://localhost:3000/toys", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json", 
//       "Accept": "application/json"
//     }, 
//     body: JSON.stringify({
//       name, 
//       image, 
//       likes
//     })
//   })
//   .then(response => response.json()) 
//   .then(json => { 
//       newH2.innerText = json["name"];
//       newImg.src = json["image"];
//       newP.innerText = json["likes"];
//       toyCollection.appendChild(divCard);
//     })
//   .catch(error => {
//     console.log(error.message)
//   })
// }


  
