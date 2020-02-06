jQuery(document).ready(function(){
    "use strict"
    $('.fondo').ripples({
        dropRadius: 10,
        perturbance: 0.01,
    
    });
});

function changedisplay(selection){
    document.getElementById(selection).style.display = 'block';
}