let header = document.getElementById("header");

let scrolltop = 0;

addEventListener("scroll", () => {

    if(scrolltop >= 200){
        scrolltop = window.pageYOffset;
        header.classList.add("header--scroll")
        document.getElementById("logo").src="Public/images/LOGO COMPROMISO DIGITAL 1.png";
    }else{
        document.getElementById("logo").src="Public/images/compromiso-digital-logo-2.svg";
       
        console.log(scrolltop) 
        scrolltop = window.pageYOffset;
        header.classList.remove("header--scroll")
    }
})