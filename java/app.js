// const header = document.querySelector(".width-100");
// window.addEventListener ("scroll", function() {
//    header.classList.toggle ("sticky", window.scrollY > 100);
// } );
window.addEventListener("scroll", callOnScroll)

const navBar = ()=>{
    let oldNav = document.querySelector(".navbar");
    oldNav.classList.toggle("large-navbar");
}



let value = document.querySelectorAll(".count-text");
let interval = 10;

function callOnScroll(){
    value.forEach((displayValue)=>{
        let startValue = 0;
        let endValue = parseInt(displayValue.getAttribute("data-val"));
        // console.log(endValue)
        let duration = Math.floor((interval / endValue));
        let counter = setInterval(function(){
            startValue += 500;
           displayValue.innerHTML = startValue;
           if(startValue == endValue){
            clearInterval(counter)
           }
        },duration)
    })
};




let slides = document.querySelectorAll(".big-card");
var counter = 0;

slides.forEach((slide, index) =>{
    //  console.log(slide, index)
    slide.style.top = `${index * 100}%`
})

const nextBtn = ()=>{
    if (counter == slides.length - 1) {
        counter = 0;
        slider();
    } else {
        counter++;
        slider();
    }};

const prevBtn = ()=>{ 
    if (counter == 0) {
    counter = slides.length - 1;
    slider();
} else {
    counter--;
    slider();
}};

const slider = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateY(-${counter * 100}%)`
    })
}