
    let text = document.querySelector('.txt');
    let voiceSelect = document.querySelector('select');

    let pitch = document.querySelector('#pitch');
    let pitchValue = document.querySelector('.pitch-value');
    let rate = document.querySelector('#rate');
    let rateValue = document.querySelector('.rate-value');

    let play = document.getElementById("play")
    let stop = document.getElementById("stop")
    let synth = window.speechSynthesis;
    let voices = []
    let utterThis


    play.addEventListener("click",speak)
    stop.addEventListener("click",stopSpeak)

    function speak(){
        if(synth.speaking){
           console.error("正在读取当中")
            return
        }

        if(text === ''){
            alert("请输入文本")
        }else{
            utterThis = new window.SpeechSynthesisUtterance(text.value);
            synth.speak(utterThis)

            utterThis.onend = function (event) {
                console.log('SpeechSynthesisUtterance.onend');
            }
            utterThis.onerror = function (event) {
                console.error('SpeechSynthesisUtterance.onerror');
            }
            console.warn("声音：", voiceSelect.selectedOptions[0])
            let  selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
            for(let i = 0; i < voices.length ; i++) {
                if(voices[i].name === selectedOption) {
                    utterThis.voice = voices[i];
                    break;
                }
            }
            utterThis.pitch = pitch.value;
            utterThis.rate = rate.value;
            synth.speak(utterThis);
        }
    }

    function getSupportVoices() {
        voices = synth.getVoices().sort(function (a, b) {
            let aname = a.name.toUpperCase()
            let bname = b.name.toUpperCase();
            if ( aname < bname ) {
                return -1;
            }else if ( aname == bname ){
                return 0;
            } else {
                return +1;
            }
        });
        let  selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
        voiceSelect.innerHTML = '';
        for(let i = 0; i < voices.length ; i++) {
            let option = document.createElement('option');
            option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
            console.warn("txc:",option.textContent)

            if(voices[i].default) {
                option.textContent += ' -- DEFAULT';
            }

            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            console.warn("voices:",voices)
            voiceSelect.appendChild(option);
            // console.warn("selectedIndex:",selectedIndex)
        }
        voiceSelect.selectedIndex = selectedIndex;
    }

    getSupportVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = getSupportVoices;
    }

    pitch.onchange = function() {
        pitchValue.textContent = pitch.value;
    }

    rate.onchange = function() {
        rateValue.textContent = rate.value;
    }

    voiceSelect.onchange = function(){
        speak();
    }

    function stopSpeak(){
        synth.cancel()
    }






