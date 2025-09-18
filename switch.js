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


window.onload = function(){
    let val = document.getElementById("mainStyleSheet");
    var a = localStorage.getItem("val")
    
    val.setAttribute("href",a);

    

    
}

