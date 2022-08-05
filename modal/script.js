const openModal = document.querySelector("#openModal");
const modal = document.querySelector("#modal");

openModal.addEventListener("click",()=>{
    modal.classList.remove("invisible");
})

modal.addEventListener("click",()=>{
    modal.classList.add("invisible");
})

