const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick () {
    const clickedClass = "clicked";

// 방법 1)
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }

// 방법 2)
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }

// 방법 3)
    h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleTitleClick);