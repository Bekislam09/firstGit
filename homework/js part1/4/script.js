
document.getElementById("click").onclick = function() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    
    document.getElementById("input1").value = input2;
    document.getElementById("input2").value = input1;
};