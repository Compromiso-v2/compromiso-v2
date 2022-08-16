var boton=document.querySelector(".header_icono")
var menu=document.querySelector(".header__navigation")
var cont=0
console.log(boton)
boton.onclick =function(){
  if(cont%2==0){
  menu.classList.add("header__navigation--active")
  menu.classList.remove("header__navigation--disabled")
}

else{
    menu.classList.remove("header__navigation--active")
    menu.classList.add("header__navigation--disabled")
  }
  cont ++
  }
console.log(boton)
