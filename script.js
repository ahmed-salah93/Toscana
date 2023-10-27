

 let search = document.getElementById("Search");
 let dd = document.getElementById("dd");


  dd.onclick = function (){
    search.style.display = "inline-block";
    search.style.scrollBehavior = "smooth"
 }

  function hideBox() {
    search.style.display = "none";
 }


//  swipper _________________\
var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;
upArrow.onclick = function(){
  if(x > "-1200"){

      x = x - 300;
  slide.style.top = x + "px";
  }

}
downArrow.onclick = function(){
  if(x < "0"){

      x = x + 300;
  slide.style.top = x + "px";
  }

}