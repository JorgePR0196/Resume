jQuery(document).ready(function(){
    "use strict"
    $('.fondo').ripples({
        dropRadius: 10,
        perturbance: 0.01,
    
    });
});

function changedisplay(selection){
    switch(selection) {
        case "one":
            document.getElementById(selection).style.display="block";
            document.getElementById("two").style.display="none";
            document.getElementById("three").style.display="none";
        
          break;
        case "two":
            document.getElementById(selection).style.display="block";
            document.getElementById("one").style.display="none";
            document.getElementById("three").style.display="none";
        
          break;
          case "three":
            document.getElementById(selection).style.display="block";
            document.getElementById("two").style.display="none";
            document.getElementById("one").style.display="none";
              break;
        default:
          // code block
      }
    
}