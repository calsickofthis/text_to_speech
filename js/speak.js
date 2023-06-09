function speak(phrase){

    
    if(phrase == undefined){
        x = document.getElementById('SpeechInput').value
    }else{
        x = phrase
    }


    var msg = new SpeechSynthesisUtterance(x);
    window.speechSynthesis.speak(msg);
}