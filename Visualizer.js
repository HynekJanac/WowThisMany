
function visualize(){
    value = document.getElementById("form").value

    if (isNaN(value) == false){
        document.getElementById("menu").style.display = "none";
        document.getElementById("preloader").style.display = "block";
        document.getElementById("vis").style.display = "block";
        document.getElementById("followers").innerHTML = "You have " + String(value) + " followers";
    }

    else{
        document.getElementById("warning").style.display = "block";
    }

}