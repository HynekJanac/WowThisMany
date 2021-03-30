
function redirect(){
    value = document.getElementById("form").value

    if (isNaN(value) == false){
        window.location.replace("https://visualizefollowers.netlify.app/visualization.html?followers=" + String(value));
    }

    else{
        document.getElementById("warning").style.display = "block";
    }

}

function visualization(){
    const followers = new URLSearchParams(window.location.search).get("followers")
    document.getElementById("followers").innerHTML = "You have "+String(followers)+" followers"

}