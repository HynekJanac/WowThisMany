//Redirects to visualization page, adds data to URL and chekcs if data is a number.
function redirect(){
    value = document.getElementById("form").value

    if (isNaN(value) == false){
        window.location.replace("https://wowthismany.netlify.app/visualization.html?followers=" + String(value));
    }

    else{
        document.getElementById("warning").style.display = "block";
    }

}

function visualization(){
    const followersinput = new URLSearchParams(window.location.search).get("followers")
    var followers = Math.round(Number(followersinput))
    
    // Grammar check
    if (followers == 1){
        document.getElementById("followers").innerHTML = "You have "+String(followers)+" follower"
    }
    else{
    document.getElementById("followers").innerHTML = "You have "+String(followers)+" followers"
    }

    //Dots rendering
    var dots = document.getElementById("dots");
    if (followers <= 100000){
        if (followers <= 500){
            dots.className = "bunchofdots-big";
            dots.innerHTML ='<p></p>'.repeat(followers);

        };

        if (followers >= 501){
            dots.className = "bunchofdots-middle";
            dots.innerHTML ='<p></p>'.repeat(followers);

        };

        if (followers >= 5000){
            dots.className = "bunchofdots-small";
            dots.innerHTML ='<p></p>'.repeat(followers);

        };
    }
    else{
        document.getElementById("dots-comparasion").style.display ="none";
    }

    //Image render
    //Json file pasted as a variable because I don't know how to acces it.
    var json = JSON.parse('{ "42":{"path": "Img/Vis/42.jpg", "description":"Answer to the Ultimate Question of Life, the Universe, and Everything","alt":"42","credit":"Douglas Noel Adams"}, "50":{"path": "Img/Vis/50.jpg", "description":"this many people.","alt":"room of 50 people","credit":" "}, "69":{"path": "Img/Vis/nice1.jpg", "description":"NICE","alt":"NICE","credit":" "}, "100":{"path": "Img/Vis/100.jpg", "description":"this many people","alt":"Picture of 100 people","credit":"https://i.imgur.com/JbaLU6B.jpg"}, "250":{"path": "Img/Vis/250.jpg", "description":"this many people","alt":"Picture of 250 people","credit":" "}, "500":{"path": "Img/Vis/500.jpg", "description":"This many people","alt":"Crowd of 500 people","credit":" "}, "1000":{"path": "Img/Vis/1000.webp", "description":"this many people","alt":"Image of 1000 people","credit":"https://www.newsweekpakistan.com/wp-content/uploads/2016/07/edhi-funeral-karachi.jpg 600w, https://www.newsweekpakistan.com/wp-content/uploads/2016/07/edhi-funeral-karachi-300x200.jpg 300w"}, "1500":{"path": "Img/Vis/1500.jpg", "description":"capacity of the Aotea Centre in Auckland","alt":"Aotea Centre in Auckland","credit":"Autor: Auckland Live RFA – Vlastní dílo, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=97193882"}, "4000":{"path": "Img/Vis/4000.jpg", "description":"number of people attending TEDxSydney 2017","alt":"Crowd of 4000 people","credit":"https://www.iccsydney.com.au/ICCSydney/media/ICCSydney/news/large/tedxsydney-header-1700x580.jpg?ext=.jpg Autor: Jean-Jacques Halans "}, "5000":{"path": "Img/Vis/5000.jpg", "description":"capacity of Center Court Hengqin International Tennis Center","alt":"Picture of full tennis stadium","credit":"Autor: Chinyen Lu – Vlastní dílo, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=74840074"}, "6969":{"path": "Img/Vis/nice2.jpg", "description":"NICE","alt":"NICE","credit":" "}, "10000":{"path": "Img/Vis/10000.jpg", "description":"capacity of Hisense Arena in Melbourne","alt":"Picture of tennis stadium","credit":"Autor: globalite – https://www.flickr.com/photos/globalite/5400777875/in/photostream/, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=14726050"}, "70000":{"path": "Img/Vis/70000.jpg", "description":"number of people who attended Burning Man in 2018","alt":"Black Rock City","credit":"Autor: Kyle Harmon from Oakland, CA, USA – Burning ManUploaded by PDTillman, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=13296939"}, "100000":{"path": "Img/Vis/100000.jpg", "description":"capacity of Bryant-Denny Stadium","alt":"Photo of full stadium","credit":"Autor: Matthew Tosh – Flickr: Bryant-Denny 10-22-11, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=18906584"}, "250000":{"path": "Img/Vis/250000.jpg", "description":"capacity of St Peter’s Square in Rome","alt":"full St Peter s Square in Rome","credit":"Elisabetta Villa/Getty Images"}, "500000":{"path": "Img/Vis/500000.jpg", "description":"population of Atlanta","alt":"Atlanta","credit":"Autor: ericstokley – https://pixabay.com/photos/atlanta-skyline-georgia-downtown-4829076/, CC0, https://commons.wikimedia.org/w/index.php?curid=94193306"}, "696969":{"path": "Img/Vis/nice3.jpg", "description":"NICE","alt":"NICE","credit":" "}, "1000000":{"path": "Img/Vis/1000000.jpg", "description":"number of people who attended Love Parade in 2007 in Essen","alt":"Love Parade","credit":""}, "6969696":{"path": "Img/Vis/nice1.jpg", "description":"NICE","alt":"NICE","credit":" "}, "10000000":{"path": "Img/Vis/10000000.jpg", "description":"population of Czech republic","alt":"Map of Czech republic","credit":"Autor: NuclearVacuum – File:Location European nation states.svg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=8105100"}, "50000000":{"path": "Img/Vis/50000000.jpg", "description":"number of people who attended Kumbh Mela in 2019","alt":"Kumbh Mela","credit":"Autor: Původně soubor načetl Devinasch na projektu Wikipedie v jazyce angličtina – Na Commons přenesl z en.wikipedia uživatel Trengarasu., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3564854"}, "100000000":{"path": "Img/Vis/100000000.jpg", "description":"population of Egypt","alt":"Map of Egypt","credit":"Autor: Addicted04 – Vlastní dílo with Natural Earth Data  Tento vektorový obrázek byl vytvořen programem Inkscape ., CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=20230908"}, "1000000000":{"path": "Img/Vis/1000000000.jpg", "description":"number of people living on Earht in 1804 (Napolen became Emperor of the French)","alt":"Coronation of Napoleon","credit":"Autor: Jacques-Louis David – The Yorck Project (2002) 10.000 Meisterwerke der Malerei (DVD-ROM), distributed by DIRECTMEDIA Publishing GmbH. ISBN: 3936122202., Volné dílo, https://commons.wikimedia.org/w/index.php?curid=150004"}, "6969696969":{"path": "Img/Vis/nice3.jpg", "description":"NICE","alt":"NICE","credit":" "}, "7000000000":{"path": "Img/Vis/7000000000.jpg", "description":"number of people living on Earth in 2011 ","alt":"Image of Earth","credit":"Autor: NASA/Apollo 17 crew; taken by either Harrison Schmitt or Ron Evans – https://web.archive.org/web/20160112123725/http://grin.hq.nasa.gov/ABSTRACTS/GPN-2000-001138.html (image link); see also https://www.nasa.gov/multimedia/imagegallery/image_feature_329.html, Volné dílo, https://commons.wikimedia.org/w/index.php?curid=43894484"} }')

    //Too small numbers do not get an image
    if (followers <= 41){
        document.getElementById("imgvis").style.display = "none";
        document.getElementById("comparasion1").style.display = "none";
    }

    else{
    //List of all the numbers for which I have Images and other coparrasion

    var numbers = [42 ,50, 69, 100, 250, 500, 1000, 1500, 5000, 6969, 10000, 70000, 100000, 250000, 500000, 696969, 1000000, 6969696, 10000000, 50000000, 100000000, 500000000, 1000000000, 6969696969, 7000000000]
      
    var closest = numbers.reduce(function(prev, curr) {
        return (Math.abs(curr - followers) < Math.abs(prev - followers) ? curr : prev);
      });

    
    
    
    //Adds all the data
    //Adds quatifier
    var Quatifier = followers/closest
    var intro = "That is "
    tag = String(closest)
    if (followers <= 100000){
        intro = "Or "
    }

    if (Quatifier >= 0.5 && Quatifier < 0.7){
            times = "half of "
        }

    if (Quatifier >= 0.7 && Quatifier < 0.9){
        times = "almost "
    }
 //x >= 0.001 && x <= 0.009
    if (Quatifier >= 0.9 && Quatifier == 1){
        times = " "
    }

    if (Quatifier > 1){
        times = String(Math.round(Quatifier * 100) / 100) + " times "
    }
    

  

    document.getElementById("comparasion1").innerHTML = intro + times + String(json[tag].description)
    document.getElementById("imgvis").src = json[tag].path
    document.getElementById("imgvis").alt = json[tag].alt
    document.getElementById("imagesource").innerHTML = json[tag].credit
    
    
    }
   
   
}