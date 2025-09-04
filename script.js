
const NavBar=document.querySelector('.nav-links');
const Navbtn=document.querySelector('.home-btn');

Navbtn.addEventListener('click',()=>{
    NavBar.classList.toggle('mobile-nav')

})
NavBar.addEventListener('click',()=>{
    NavBar.classList.toggle('mobile-nav')

})

// home page return
function goHome() {
    window.location.href = "index.html"; // replace with your homepage link
  }