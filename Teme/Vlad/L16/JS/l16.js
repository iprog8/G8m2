function operations () {
    var list = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    var element1 = document.getElementById("even-numbers");
    var element2 = document.getElementById("multiples-5");
    var element3 = document.getElementById("sum-num-less-50");
    //debugger;
    var evenNumbersList =[];
    var multiplesOf5 = [];
    var sumOf50 = 0;
    if((element1 == null)|| (element2 == null) || (element3 == null)) {
        return false;
    } else {
        for (i in list) {
            if(list[i] % 2 == 0) {
                evenNumbersList.push(list[i])
        }
            if (list[i] % 5 == 0) {
                multiplesOf5.push(list[i])
        }
            if (list[i] < 50){
                sumOf50+=list[i]
        }
    }
}   element1.innerHTML = evenNumbersList;
    element2.innerHTML = multiplesOf5;
    element3.innerHTML = sumOf50;
}

function showClassName() {
    var elements = document.getElementsByTagName('div')
    var spans = document.getElementsByTagName('span')
    var classes = ['blue-text','purple-text']
    //debugger;
    for (i=0;i<elements.length;i++) {
        var divElement = document.getElementById('div'+i)
        var nameOfClass = divElement.className
        console.log(nameOfClass)
        if (classes.includes(nameOfClass)) {
            spans[i].innerHTML = "Numele clasei este :" + ' ' + nameOfClass
        } else {
            spans[i].innerHTML = "Numele clasei este :" + ' ' + "-"
        }
    }   
}

function changeColor() {
    elements = document.getElementsByTagName('div')
    for (i=0;i <elements.length;i++ ) { // for ( i in elements) returneaza eroare Uncaught TypeError: Cannot read property 'add' of undefined at changeColor (l16.js:32)
        elements[i].classList.remove('blue-text','purple-text');
        elements[i].classList.add("red-text")
    }
}