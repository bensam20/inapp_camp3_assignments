function reset(){
    document.getElementById('resprint').value = "";
}

function btnPress(val){
    document.getElementById("resprint").value += val;
}

function calculate() {
    document.getElementById("resprint").value = eval(resprint.value)
}