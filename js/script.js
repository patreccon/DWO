window.onload = init
let menu
let ipad
function init(){
   menu  = document.querySelector('.menu')
   ipad  = window.matchMedia('screen and (max-width:767px)')

   ipad.addListener(validateCondition)


  //
  // document.getElementById("burger-menu").addEventListener('click',function(){
  //   menu.classList.toggle('is-active')
  //})
}
function validateCondition(event){
  console.log(event)
  if(event.matches)
  {
    document.getElementById("burger-menu").addEventListener('click',hideShow)
  }else{
    document.getElementById("burger-menu").removeEventListener('click',hideShow)
  }
}
function hideShow(){
  menu.classList.toggle('is-active')
}
