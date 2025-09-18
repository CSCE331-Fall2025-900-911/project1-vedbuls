function toggleStyleSheet(){


    let val = document.getElementById("mainStyleSheet");

    
    
   
   let nval = val.getAttribute("href");



    if (nval == "style.css"){
        val.setAttribute("href","style2.css");
        localStorage.setItem("val","style2.css")

    }
    else{
        val.setAttribute("href","style.css");
        localStorage.setItem("val","style.css")

    }


}


window.onload = function() {
    let val = document.getElementById("mainStyleSheet");
    let stored = localStorage.getItem("val");

    if(stored) { 
        val.setAttribute("href", stored);
    }
}
