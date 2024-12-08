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
});

let searchPage=document.querySelector(".search-page");
let searchOption=document.querySelector(".search-option");
let navBar=document.querySelector(".navbar-js");
let foodItem=document.querySelector(".food-items-js");
let topResturent=document.querySelector(".top-restarents-js");
let closeSearch=document.querySelector(".close-icon");
let topResturentWithDelivery=document.querySelector(".top-restarents-onine-food-delivery-js");

searchPage.addEventListener("click" , ()=>{
    searchOption.style.display="block";
    foodItem.style.display="none";
    topResturent.style.display="none";
    topResturentWithDelivery.style.display="none";
});

closeSearch.addEventListener("click" , ()=>{
    searchOption.style.display="none";
    foodItem.style.display="block";
    topResturent.style.display="block";
    topResturentWithDelivery.style.display="block";
});





