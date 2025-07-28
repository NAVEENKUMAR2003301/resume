//header

let more = document.querySelector(".more")
let hum = document.querySelector(".hum")
more.addEventListener("click",()=>{
    setTimeout(()=>{
        hum.classList.add("active");
    },2000)
})






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

//contact page api 

let para = document.querySelector(".para")
setInterval(()=>{
 fetch(`https://dummyjson.com/quotes`)
   .then((response) => {
     return response.json();
   })
   .then((data) => {
       let val = Math.floor(Math.random()*10)
       let allQuotes = data.quotes.slice(10)
       let quotes = allQuotes[val].quote
       para.textContent = quotes
   })
   .catch((error) => {
     console.log(error);
   });
},5000)
