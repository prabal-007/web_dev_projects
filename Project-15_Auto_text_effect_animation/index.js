const containerEl = document.querySelector(".container")

const careers = ["Developer","Freelenser","Youtuber","Insrructor"]


let careeIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++;
    containerEl.innerHTML = `
<h1>I am ${careers[careeIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careeIndex].slice(0,characterIndex)}</h1>
`;


if (characterIndex === careers[careeIndex].length){
    careeIndex++;
    characterIndex = 0;
}

if(careeIndex === careers.length){
    careeIndex = 0;
}

setTimeout(updateText, 150);
}
