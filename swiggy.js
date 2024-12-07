let sideMenu=document.querySelector(".sign-in-menu");
let loginMenu=document.querySelector(".login-side-menu");
let closeMenu=document.querySelector(".corss-icon");

sideMenu.addEventListener("click", ()=>{
    loginMenu.style.transform="translateX(0)";
});

closeMenu.addEventListener("click",()=>{
    loginMenu.style.transform="translateX(101%)";

});
// login closed
// place search
let placeSearch=document.querySelector(".place-search");
let placeSearchicon=document.querySelector(".corss-icon-for-place-search");
let locationPlace=document.querySelector(".loction-place");

locationPlace.addEventListener("click",()=>{
    placeSearch.style.transform="translateX(0)"
});
placeSearchicon.addEventListener("click",()=>{
    placeSearch.style.transform="translateX(-101%)"
})



