//about page


setInterval(()=>{
    let allBox = document.querySelectorAll(".box");
    let randomNum = Math.floor(Math.random() * allBox.length);
    let randomBox = allBox[randomNum];

    randomBox.classList.add("animateMe");
setTimeout(()=>{
    randomBox.classList.remove("animateMe");

},4000)

},5000)