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


//age

let age = document.getElementById("age")


setInterval(()=>{
let dob = new Date("2003-01-30T09:00:00");
let now = new Date();
function getAge(dob, now) {
  let age = new Date(now - dob);
  return {
    year: age.getUTCFullYear() - 1970,
    months: age.getUTCMonth(),
    days: age.getUTCDate() - 1,
    hours: age.getUTCHours(),
    minutes: age.getUTCMinutes(),
    seconds: age.getUTCSeconds(),
  };
}

let ExactAge = getAge(dob, now);


age.textContent = `${ExactAge.year} ${ExactAge.months} ${ExactAge.days} ${ExactAge.minutes} ${ExactAge.seconds}`;

},1000)









