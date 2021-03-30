//Script used to find url for sharing
var currenturl = window.location.href
var windowname = document.title

var facebookshare = "https://www.facebook.com/sharer/sharer.php?u=" + currenturl
var twittershare = "https://twitter.com/intent/tweet?text=" + windowname +"%20" + currenturl

document.getElementById("Copy").value = currenturl
document.getElementById("twitter_share").href = twittershare
document.getElementById("facebook_share").href = facebookshare
