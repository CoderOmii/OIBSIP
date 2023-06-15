// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display Number
function addNum(value) 
{
    document.getElementById("result").value += value;
}
// This function display Symbol
function addSym(value) 
{
    var res=document.getElementById("result").value;
    var lastchar = res.slice(-1);
    if(lastchar!="+" && lastchar!="-" && lastchar!="*" && lastchar!="%" && lastchar!="/")
    {
        document.getElementById("result").value += value;
    }
    
}
// This function Cut List Value
function cut() 
{
 
  var result =  document.getElementById("result").value;
  document.getElementById("result").value=result.slice(0,-1);
}
 
// This function evaluates the expression and returns result
function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}