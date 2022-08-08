function reset(){
    document.getElementById('resprint').value = "";
}

function btnPress(val){
    document.getElementById("resprint").value += val;
}

function calculate() {
    let result = eval(document.getElementById("resprint").value);
    document.getElementById("resprint").value = result;
}
