function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function backgroundcolorchange() {
    var element = document.body;
    //element.className = "white"
    var bkgcolors = ["red-bkg","yellow-bkg","blue-bkg"];
    //var i = 0; 
    if (element != null) {
            //debugger;
            for (i =0; i < bkgcolors.length; i++){
            element.classList.add(bkgcolors[i]);
            //console.log(element.bkgcolors[i]);
            sleep(2000);
            //element.classList.remove(bkgcolors[i]);
            }
    } else {
        console.log("element not found");
    }
}
/*for (i =0; i < bkgcolors.length; i++){
            element.classList.add(bkgcolors[i]);
            console.log(element.className)
            setTimeout(5000)
            element.classList.remove(bkgcolors[i]);
            }
    }
/*
function change_background_color() {
    var element = document.body
    console.log(element);
    if (element == null){
        console.warn('Element not found');
        return false;
    }
    else if (element.classList == "body-background") {
        element.classList.add("red-background");
        element.classList.remove("body-backgrounds");
        }   
    if (element.classList == "red-background") {
        element.classList.remove("red-background");
        element.classList.add("yellow-background");
    if (element.classList == "yellow-background") {
        element.classList.remove("yellow-background");
        element.classList.add("blue-background");
        }
    if (element.classList == "blue-background") {
        element.classList.remove("blue-background");
        element.classList.add("red-background");
        }
    }
}*/
 /* varianta care  merge */
/*function switch_on_off() {
    var bulb = document.getElementById('bulb');
    if(bulb.src.match("bulbon")) {
        bulb.src = "Images/bulboff.png";
    }
    else {
        bulb.src = "Images/bulbon.png";
    }
    console.log(bulb.src)
}  

 /* varianta care NU merge - ramane Aprins
function switch_() {
    var bulb = document.getElementById('bulb2');
    if(bulb.src == "http://127.0.0.1:5500/Teme/Vlad/L13/Images/bulbon.png") { /* '.src' arenevoie de toata calea"
        bulb.src = "Images/bulboff.png";
    }
    else {
        bulb.src = "Images/bulbon.png";
    }
    console.log(bulb.src)
}   */