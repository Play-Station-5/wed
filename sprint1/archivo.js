function myFunction(){
    var x = document.getElementById("mimenu");
     if (x.className === "menu") { 
     x.className += " responsive";
   }else {
     x.className = "menu";
   }
}
