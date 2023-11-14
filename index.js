const optionBtn = document.querySelectorAll(".opt-btn");
const variantBtn = document.querySelectorAll(".var-btn");


optionBtn.forEach((btn) => {

    btn.addEventListener('click', () => {
        optionBtn.forEach((item) => item.classList.remove("active-opt-btn"))
        btn.classList.add("active-opt-btn")
    })

})

variantBtn.forEach((btn) => {

    btn.addEventListener('click', () => {
        variantBtn.forEach((item) => item.classList.remove("active-var-btn"))
        btn.classList.add("active-var-btn")
    })

})


// order button alert
const orderBtn = document.querySelectorAll(".order-btn");
orderBtn[0].addEventListener('click', () => {
    alert("Added To Cart")
})

orderBtn[1].addEventListener('click', () => {
    alert("Thanks For Shopping")
})

// main image js
const allImages = ["./images/img1.png", "./images/img2.png", "./images/img3.png", "./images/img4.png"]

const mainImage = document.querySelector(".big-img");
const smallImage = document.querySelectorAll(".item-img");

console.log(mainImage)
smallImage.forEach((img, index) => {
    img.addEventListener("click", () => {
        smallImage.forEach((item) => item.classList.remove("img-active"))
        img.classList.add("img-active")
        mainImage.setAttribute('src', allImages[index])

    })
})

