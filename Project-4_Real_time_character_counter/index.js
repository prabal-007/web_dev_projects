const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const reaminingcounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=> {
    updateCounter()
});

updateCounter();

function updateCounter(){
    totalcounterEl.innerText = textareaEl.value.length;
    reaminingcounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}