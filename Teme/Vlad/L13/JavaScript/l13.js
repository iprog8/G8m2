function change_color_green() {
    document.getElementById("cos-cumparaturi").style.color = "green"
}
function change_color_black() {
    document.getElementById("cos-cumparaturi").style.color = "black"
}
function sum_function() {
    sum = 35 + 41;
    document.getElementById("suma").innerHTML= sum;
}

 /* varianta care  merge */
function switch_on_off() {
    var bulb = document.getElementById('bulb');
    if(bulb.src.match("bulbon")) {
        bulb.src = "Images/bulboff.png";
    }
    else {
        bulb.src = "Images/bulbon.png";
    }
    console.log(bulb.src)
}  

 /* varianta care NU merge - ramane Aprins */
function switch_() {
    var bulb = document.getElementById('bulb2');
    if(bulb.src == "http://127.0.0.1:5500/Teme/Vlad/L13/Images/bulbon.png") { /* '.src' are nevoie de toata calea" */
        bulb.src = "Images/bulboff.png";
    }
    else {
        bulb.src = "Images/bulbon.png";
    }
    console.log(bulb.src)
}   