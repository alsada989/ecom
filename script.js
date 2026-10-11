// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(
  tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
);
//////////////////////////////////////

// Mobile menu toggle
document.getElementById('gen-ham').addEventListener('click', function() {
  var nav = document.getElementById('gen-nav');
  var menu = document.getElementById('gen-menu');
  var isOpen = menu.classList.toggle('open');
  nav.classList.toggle('mobile-open', isOpen);
});
 
// Close menu when clicking outside
document.addEventListener('click', function(e) {
  var nav = document.getElementById('gen-nav');
  var menu = document.getElementById('gen-menu');
  if (!nav.contains(e.target) && menu.classList.contains('open')) {
    menu.classList.remove('open');
    nav.classList.remove('mobile-open');
  }
});
//////////////////////////
const backToTopBtn=document.getElementById('backToTopBtn');
const showButtonAfterScroll=100;
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // var btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop >showButtonAfterScroll || document.documentElement.scrollTop > showButtonAfterScroll) {
        backToTopBtn.style.display = "block";
    } else {
         backToTopBtn.style.display = "none";
    }
}
 backToTopBtn.onclick=function(){
  topFunction();
 }
 
 function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
////////////////////////////////////////
let label=document.getElementById('label');
let lang=document.getElementById('dropdownMenu');
label.addEventListener('click',function(){
lang.classList.add(show);
});
