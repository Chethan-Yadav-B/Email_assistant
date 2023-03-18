
var count=-1;
function val(clas,sel){
  count++;
  if(count<2){
    let speech = true;
    window.SpeechRecognition = window.SpeechRecognition
                    || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    const words = document.querySelector('.word');
    words.appendChild(sel);

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)

        document.getElementById(clas).value = transcript;
        console.log(transcript);
        let time=setTimeout(val,4000,"p",q);
    });


         if (speech == true) {
             recognition.start();
             recognition.addEventListener('end');
         }
       }

}
val("q",p);
