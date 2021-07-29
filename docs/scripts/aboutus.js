import * as mockroblog from './mockroblog.js'

/*
Initialize all components from HTML
*/
const btn = document.querySelector(".mobile-menu-button")
const menu = document.querySelector(".mobile-menu")
const textPost = document.querySelector(".post")
const textDate = document.querySelector(".date")


//Event Listeners 
btn.addEventListener('click', () => {
    menu.classList.toggle("hidden")
})
