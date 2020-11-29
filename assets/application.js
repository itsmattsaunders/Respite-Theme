console.log('JS HAS LOADED')


//Sticky Navigation
const navbar = document.getElementById("nav-bar");
const stick = navbar.offsetTop;

function sticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = ()=> {sticky()};
