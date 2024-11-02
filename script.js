function appendToDisplay(value){
    document.getElementById("display").value += value;
}
function clearDisplay(){
    document.getElementById("display").value = "";
}
function removeLastCharacter(){
   const remove = document.getElementById("display");
   remove.value = remove.value.slice(0, -1);
}
function calculateResult(){
    try{
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}catch(error) {
document.getElementById("display").value = 'Error';
}
}
