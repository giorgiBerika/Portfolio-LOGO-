function burgerMenu(){
    var droppedBurgerMenu = document.getElementById("dropped-burger-menu");
    if(droppedBurgerMenu.style.display === "block"){
    droppedBurgerMenu.style.display = "none";
    }
    else{
        droppedBurgerMenu.style.display ="block";
    }
}