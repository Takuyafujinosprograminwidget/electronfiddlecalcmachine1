// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function calcButton(){
    switch(operator.value)
    {
        case('+'):total = Number(num1.value) + Number(num2.value) ;break;
        case('-'):total = Number(num1.value) - Number(num2.value) ;break;
        case('×'):total = Number(num1.value) * Number(num2.value) ;break;
        case('÷'):total = Number(num1.value) / Number(num2.value) ;break;
        default:
    }
    document.getElementById('answer-label').innerHTML = total ;
}
function sendButton(){
    /*
    let btn = document.getElementById('send-btn');

    btn.addEventListener(
        'click',
        document.getElementById('send-label').innerHTML = total +"\n",
        { once: true }
    );
    */
    document.getElementById('send-label').innerHTML += total +"\n" ;
}