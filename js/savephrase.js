function savePhrase(){

    phrase = document.getElementById('SpeechInput').value

    if(phrase != ''){
        console.log(phrase)

        newPhraseItem = document.createElement("li")
        
        newPhrase = document.createElement("input")
        newPhrase.setAttribute('type','submit')
        newPhrase.setAttribute('onclick','speak("' + phrase + '")')
        newPhrase.value = phrase

        newPhraseItem.appendChild(newPhrase)
        document.getElementById('phrases').appendChild(newPhraseItem)//newPhrase)
    }else{
        alert('No phrase in input box')
    }
}