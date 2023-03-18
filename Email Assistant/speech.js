   c=-1;
    window.onclick=speech;
    let text="welcome to the website";
      function speech(txt){
        if(typeof txt==='string'){
          c=c+1;
          let sentence=new SpeechSynthesisUtterance();
          let synthesis=speechSynthesis[0];

          sentence.text=txt;
          speechSynthesis.speak(sentence);
          if(c==1){
            setTimeout(speech,10000,"enter the password");
          }
          if(c==0){
            speech("enter the email address");
          }
        }else{
          if(c==-1){
              speech(text);
          }
        }

}
