let darkmood = localStorage.getItem('darkmood');
const controlTheme = document.querySelector("#control");
const day = document.querySelector(".day");
const night = document.querySelector(".night");
const logoOne = document.querySelector(".logo");
const logoTwo = document.querySelector(".logo2");




const enableDarkmode = () => {
    document.body.classList.add('darkmood');
    localStorage.setItem('darkmood', 'active');  
}

const disableDarkmood = () => {
    document.body.classList.remove('darkmood');
    localStorage.setItem('darkmood', null);
}

if(darkmood === "active") enableDarkmode()

controlTheme.addEventListener("click", () => {

    darkmood = localStorage.getItem('darkmood')
    darkmood !== "active" ? enableDarkmode() : disableDarkmood()
});
// ------------------------------------------------------------------------
night.addEventListener('click', () => {
    logoOne.style.display = "block";
    logoTwo.style.display = "none";

});
day.addEventListener('click', () => {
    logoOne.style.display = "none";
    logoTwo.style.display = "block";

});
// --------------------------------------------------------------------------
function techTabAll(a,b,c){
    //tabpanel + for loop
    const techContent = document.getElementsByClassName("content");
    for(let i = 0; i< techContent.length; i++){
        techContent[i].style.display = "none";
    }
  
    document.getElementById(a).style.display = "flex";
    b.style.backgroundColor = c;
}
document.querySelector(".tech-key-active").click();

// ---------------------------btn active--------------------------------------

 const techKey = document.querySelectorAll('.tech-key');


techKey.forEach( (btn) => {
    btn.addEventListener("click", () => {
        techKey.forEach( (i) => i.classList.remove('tech-key-active'));
        btn.classList.add('tech-key-active');
    });
});
