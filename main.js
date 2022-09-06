const checkbox = document.getElementById("checkbox");
const title = document.querySelectorAll(".title");
const info = document.querySelectorAll(".info")


checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

for(let i = 0; i < title.length; i++){
    title[i].addEventListener("click", function(){
        info[i].classList.toggle("active")
    })
}
