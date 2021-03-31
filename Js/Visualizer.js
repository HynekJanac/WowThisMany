
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
    const followersinput = new URLSearchParams(window.location.search).get("followers")
    var followers = Math.round(Number(followersinput))

    

    if (followers == 1){
        document.getElementById("followers").innerHTML = "You have "+String(followers)+" follower"
    }
    else{
    document.getElementById("followers").innerHTML = "You have "+String(followers)+" followers"
    }
    if (followers <= 100000){
        if (followers <= 500){
            document.getElementById("dots").className = "bunchofdots-big";
            document.getElementById("dots").innerHTML ='<p></p>'.repeat(followers);

        };

        if (followers >= 501){
            document.getElementById("dots").className = "bunchofdots-middle";
            document.getElementById("dots").innerHTML ='<p></p>'.repeat(followers);

        };

        if (followers >= 5000){
            document.getElementById("dots").className = "bunchofdots-small";
            document.getElementById("dots").innerHTML ='<p></p>'.repeat(followers);

        };
    }
    
}



