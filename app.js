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



