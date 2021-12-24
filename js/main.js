function crDiv() {
    var a = document.createElement("DIV")
    document.getElementById("footer").appendChild(a)
    a.setAttribute("class", "sty")
}

function crInput() {
    var b = document.createElement("INPUT")
    document.getElementById("main").appendChild(b)
    b.setAttribute("placeholder", "Melumat daxil edin")
    b.setAttribute("style", "margin:5px")
    b.setAttribute("class", "form-control")
}

function crPhotoDiv() {
    var a = document.createElement("DIV")
    document.getElementById("main").appendChild(a)
    a.setAttribute("class", "sert")
}