
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
    
    if (Number(followers) <= 75000){
        if (Number(followers) <= 500){
            document.getElementById("dots").innerHTML ='<p class="dot-big"></p>'.repeat(Number(followers) );

        };

        if (Number(followers) >= 1000){
            document.getElementById("dots").innerHTML ='<p class="dot-middle"></p>'.repeat(Number(followers) );

        };

        if (Number(followers) >= 5000){
            document.getElementById("dots").innerHTML ='<p class="dot-small"></p>'.repeat(Number(followers) );

        };
    }
    
}


