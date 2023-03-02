// write your code here
//////////////////////////////////////////////////////////////////
const ramenMenu = document.getElementById("ramen-menu")
const detailImage = document.querySelector(".detail-image")
const detailName = document.querySelector(".name")
const detailRes = document.querySelector(".restaurant")
const detailRating = document.getElementById('rating-display')
const detailComment = document.getElementById('comment-display')
const ramenForm = document.getElementById("new-ramen")
///////////////////////////////////////////////////////////////////

fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(data => data.forEach(ramen => renderRamen(ramen)))

function renderRamen(ramen){
const ramenImg = document.createElement("img")
ramenMenu.append(ramenImg)
ramenImg.src = ramen.image
ramenImg.addEventListener("click", () => showRamen(ramen))
}
function showRamen(ramen){
detailImage.src = ramen.image
detailName.innerText = ramen.name
detailRes.innerText = ramen.restaurant
detailRating.innerText = ramen.rating
detailComment.innerText = ramen.comment
}

ramenForm.addEventListener("submit", (e)=> {
e.preventDefault()
console.log("e.target", e.target)
console.log("ramen form: " ,ramenForm)
const inputName = e.target.name.value
const inputImage = e.target.image.value
const inputRes = e.target.restaurant.value
const inputRating = e.target.rating.value
const inputComment = e.target.newcomment.value
const img = document.createElement("img")
ramenMenu.append(img)
img.src = inputImage
////////////////////////////////////////////////////////
img.addEventListener("click", ()=> {
    detailImage.src = inputImage
    detailName.innerText = inputName
    detailRes.innerText = inputRes
    detailRating.innerText = inputRating
    detailComment.innerText = inputComment
})

})


//! DOM method to get button by its id attribute
const buttonElement = document.getElementById("btn")
const pTag = document.getElementById("show")
buttonElement.addEventListener("click", ()=> {
pTag.innerText = parseInt(pTag.innerText) + 1

})

// console.log(typeof(parseInt(buttonElement.innerText) + 1))