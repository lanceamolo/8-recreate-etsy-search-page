console.log(items)

//map and join images, titles, shops, views and prices

const cards = items.results
  .map(function (i) {
    return `<div class="card">
              <img class="cardImg" src="${i.Images[0].url_fullxfull}"/>
              <p class="title">${i.title}</p>
              <p class="shop">Ad by ${i.Shop.shop_name}</p>
              <div class="rating">
              <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              <p class="views">(${i.views})</p>
              </div>
              <div class="priceLine">
              <p class="price">$${i.price}</p>
              <p class="freeShip">FREE shipping</p>
              </div>
            </div>`
  })
  .join("")

document.querySelector("#items-container").innerHTML = `${cards}`

//change .subButton style when .subInput is focused

const subButton = document.getElementById("subButtonId")

const subInput = document.getElementById("subInputId")

subInput.addEventListener("focus", function () {
  subButton.style.backgroundColor = "black"
  subButton.style.color = "white"
})

subInput.addEventListener("blur", function () {
  subButton.style.backgroundColor = "white"
  subButton.style.color = "black"
})
