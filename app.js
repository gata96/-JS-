const h1 = document.querySelector("div.hello:first-child h1"); //element 선택

// function handleTitleClick() {
//     if(h1.style.color === "blue") {
//         h1.style.color = "tomato";
//     } else {
//         h1.style.color = "blue";
//     } 
// }

// h1.style.color를 변수에 담기

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
