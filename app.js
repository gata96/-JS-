const title = document.querySelector("div.hello:first-child h1"); //element 선택

console.dir(title);

function handleTitleClick() { //함수 실행버튼
    title.style.color = "blue"; //실행 결과
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


