let popupoverlay = document.querySelector(".popup-overlay");
let popupbox = document.querySelector(".popup-box");
let addingbtn = document.querySelector(".adding-btn");

function popupbtn() {
    popupbox.style.display = "block";
    popupoverlay.style.display = "block";
}

function deletethebox(event) {
    event.target.parentElement.remove()
}

function hidetheform(event) {
    event.preventDefault(); 
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
}

let container = document.querySelector(".container")
let booktitleinput = document.getElementById("book-title-input");
let bookdescription = document.getElementById("book-description");
let bookauthorinput = document.getElementById("book-author-input");
let addingnewbtn = document.getElementById("addingnewbtn")


addingnewbtn.addEventListener("click", function(event){
    event.preventDefault()
    let div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
<h5>${bookauthorinput.value}</h5>
<p>${bookdescription.value}</p>
<button onclick="deletethebox(event)">Delete</button>`
    container.append(div)
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
})