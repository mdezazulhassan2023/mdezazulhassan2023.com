
// ======== /primary-color ============
// ======== theme-color ============

let theme = document.getElementById('theme');
let body = document.body;


theme.onclick = () =>{
  theme.classList.toggle('active');
  if(theme.classList.contains('active')){
    body.classList.add('active');
  }else{
    body.classList.remove('active');
  }
};

// ======== /theme-color ============


// slide up down button
let slideAutoDown = document.getElementById('slide_auto_down');
let slideAutoUp = document.getElementById('slide_auto_up');

// window screen lenth

window.addEventListener('scroll', () =>{
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = window.scrollY;

  if(Math.ceil(scrolled) === scrollable){
    slideAutoDown.classList.remove('active')
    slideAutoUp.classList.add('active')
  }
  else{
    slideAutoDown.classList.add('active')
    slideAutoUp.classList.remove('active')
  }
})




// scroll hide
setTimeout(() =>{
  window.onscroll = () => {
    body.classList.add('scroll');
    if(body.classList.contains('scroll')){
      // console.log("hide me");
      slideAutoDown.classList.remove('show');
      slideAutoUp.classList.remove('show')
    }
  };
}, 1000);

setInterval(() => {
  // console.log("show me");
  body.classList.remove('scroll');
  slideAutoDown.classList.add('show');
  slideAutoUp.classList.add('show')
},1000);



// window screen lenth
// ========== animation

let heroSection = document.getElementById('hero_section');
let tasksSection = document.getElementById('tasks_section');
let clientsSection = document.getElementById('clients_section');
let projectsSection = document.getElementById('projects_section');
let pricingSection = document.getElementById('pricing_section');
let cardsSection = document.getElementById('cards_section');
let mapSection = document.getElementById('map_section');
let linksSection = document.getElementById('links_section');


// hero_section
window.addEventListener('scroll', () => {
  if(window.scrollY > 360){
    heroSection.classList.remove('scrolled')
  }
  else{
    heroSection.classList.add('scrolled')
  }
});

// tasks_section
window.addEventListener('scroll', () => {
  if(window.scrollY >= 850 && window.scrollY <= 1680){
    tasksSection.classList.add('scrolled')
  }
  else{
    tasksSection.classList.remove('scrolled')
  }
});

// clients_section
window.addEventListener('scroll', () => {
  if(window.scrollY >= 1760 && window.scrollY <= 2720){
    clientsSection.classList.add('scrolled')
  }
  else{
    clientsSection.classList.remove('scrolled')
  }
});

// projects_section
window.addEventListener('scroll', () => {
  if(window.scrollY >= 2895 && window.scrollY <= 4000){
    projectsSection.classList.add('scrolled')
  }
  else{
    projectsSection.classList.remove('scrolled')
  };
});



