//
document.getElementById("accessoriesShow").onmouseover = function () {
  document.getElementById("dropC2Hide").style.visibility = "visible"
}

document.getElementById("jewelryAnchor").onmouseover = function () {
  document.getElementById("dropC2Hide").style.visibility = "visible"
}

document.getElementById("firstAnchor").onmouseover = function () {
  document.getElementById("dropC2Hide").style.visibility = "visible"
}

document.getElementById("accessoriesShow").onmouseout = function () {
  document.getElementById("dropC2Hide").style.visibility = "hidden"
}

document.getElementById("bagsShow").onmouseover = function () {
  document.getElementById("dropC3").style.visibility = "visible"
}

document.getElementById("bagsShow").onmouseout = function () {
  document.getElementById("dropC3").style.visibility = "hidden"
}

document.getElementById("necklacesShow").onmouseover = function () {
  document.getElementById("dropC4").style.visibility = "visible"
}

document.getElementById("necklacesShow").onmouseout = function () {
  document.getElementById("dropC4").style.visibility = "hidden"
}

document.getElementById("ringsShow").onmouseover = function () {
  document.getElementById("dropC5").style.visibility = "visible"
}

document.getElementById("ringsShow").onmouseout = function () {
  document.getElementById("dropC5").style.visibility = "hidden"
}

document.getElementById("ear-rings").onmouseover = function () {
  document.getElementById("dropC6").style.visibility = "visible"
}

document.getElementById("ear-rings").onmouseout = function () {
  document.getElementById("dropC6").style.visibility = "hidden"
}

document.getElementById("braceletShow").onmouseover = function () {
  document.getElementById("dropC7").style.visibility = "visible"
}

document.getElementById("braceletShow").onmouseout = function () {
  document.getElementById("dropC7").style.visibility = "hidden"
}
document.getElementById("bodyj").onmouseover = function () {
  document.getElementById("dropC8").style.visibility = "visible"
}

document.getElementById("bodyj").onmouseout = function () {
  document.getElementById("dropC8").style.visibility = "hidden"
}


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



