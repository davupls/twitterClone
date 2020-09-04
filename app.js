const btnPost = document.querySelector(".btn-post");
let inputContent = document.querySelector(".content");
const display = document.querySelector(".posted")

btnPost.addEventListener("click", post);

function post(){
    const content = inputContent.value;
    console.log(content);

    // let s = document.createElement("SECTION");
    let p = document.createElement("p")
    p.textContent = content;
    display.appendChild(p)
}
