const btnNextEl = document.querySelector(".next");
const imgContainerEl = document.querySelector(".image-container");
const btnPrevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll("img");
let currentImg = 1;
let timeout;

// for (let index = 1; index < 8; index++) {
//     const imgsEl = document.createElement("img");
//     imgsEl.src = `https://picsum.photos/id/${index}/500/300`;
//     imgContainerEl.appendChild(imgsEl);
// }


updateImg()

btnNextEl.addEventListener("click",()=>{
    currentImg++
    clearTimeout(timeout);
    updateImg()
});

btnPrevEl.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg()
})

function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }
    if(currentImg < 0){
        currentImg = imgsEl.length;
    }
    imgContainerEl.style.transform = `translate(-${(currentImg - 1) * 500}px)`
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();
    },3000);
}