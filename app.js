let btnTranslate = document.querySelector("#btn-translate");

let InputTxt = document.querySelector("#Input-Txt");
let outputDiv = document.querySelector("#output");

// var serverURL = "http://127.0.0.1:5500/index.html?= I am sant surat"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}
 function clickEventHandler() {
let InputText = InputTxt.value;//Input

fetch(getTranslationURL(InputText))//processing
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText; // output
   })
.catch(errorHandler)
 }


document.body.style.backgroundColor = "lightblue";
btnTranslate.addEventListener("click", clickEventHandler );

