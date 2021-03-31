function CopyLink() {
    document.getElementById("Copy").style.display = "block";
    //select the text in the text box
    document.getElementById("Copy").select();
    //copy the text to the clipboard
    document.execCommand("copy");
    document.getElementById("Copy").style.display = "none";
    
    document.getElementById("Copy_Info").style.opacity = "1";
  }
