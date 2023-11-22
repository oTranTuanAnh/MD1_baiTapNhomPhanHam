

function increase(n) {
    return (n+1);
}

function cacul() {
    let num = +document.getElementById("inputNum").value;
    document.getElementById("result").innerHTML =  increase(num);
}