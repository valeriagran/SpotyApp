/*let titulo=document.getElementById("titulo");
titulo.textContent="BUENAS TARDES";*/

window.addEventListener("scroll",cambiarcolor);
function cambiarcolor(){
    console.log("hola");
    let menu=document.getElementById("menu");
    console.log(menu);
    if(document.body.scrollTop||document.documentElement.scrollTop==0){
        menu.classList.add("bg-dark");
        menu.classList.remove("fondo2");
    }
    else{
        menu.classList.add("fondo2");
        menu.classList.remove("bg-dark");
    }
}