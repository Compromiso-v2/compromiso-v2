var boton = document.querySelector(".header_icono")

var menu = document.querySelector(".header__navigation")

var link = document.querySelectorAll(".navigation__link");

var cont = 0


boton.onclick = function () {
  if (cont % 2 == 0) {
    menu.classList.add("header__navigation--active")
    menu.classList.remove("header__navigation--disabled")
  }

  else {
    menu.classList.remove("header__navigation--active")
    menu.classList.add("header__navigation--disabled")
  }
  cont++
}

for (let i = 0; i < link.length; i++) {
  link[i].onclick = function () {
    menu.classList.remove("header__navigation--active")
    menu.classList.add("header__navigation--disabled")
  }  
}




