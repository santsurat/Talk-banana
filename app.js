let btnTranslate = document.querySelector("#btn-translate");

let txtInput = document.querySelector("#txt-input");
console.log(txtInput)

 function clickEventHandler() {
console.log("clicked!");
console.log("input", txtInput.value)
 }


document.body.style.backgroundColor = "orange";
btnTranslate.addEventListener("click", clickEventHandler )
