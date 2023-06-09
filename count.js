'use strict'
const buttonm = document.querySelector(".minus")
const buttonp = document.querySelector(".plus")
const countN = document.querySelector(".count")

buttonp.addEventListener("click", function () {
    countN.textContent ++
})
buttonm.addEventListener("click", function () {
    countN.textContent --
})

