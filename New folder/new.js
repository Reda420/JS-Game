var enterButton = document.getElementById('enterButton');
var againButton = document.getElementById('againButton');
var output = document.getElementById('outputText');
 
var randomNumber = Math.ceil(Math.random()*100);

function checkNumber(){
  
  var input = document.getElementById('userInput').value;
      if(input == randomNumber){
        output.innerHTML="You Geussed Correct!"+ ", "+ " it was "+ randomNumber;
        output.style.color="green";
      }
      else if(input>randomNumber && input<101){
        output.innerHTML="You Guessed Too High!";
      }
      else if(input<randomNumber && input>0){
        output.innerHTML="You Guessed Too Low!";
      }
      else if(input<1){
        output.innerHTML="I Said Between 1 and 100 -_-";
      }
      else if(isNaN(input)){
        output.innerHTML="That's Not A Number -_-";
      }
      
    }
 
    enterButton.addEventListener('click', checkNumber);
    againButton.addEventListener('click', function(){
      location.reload();
    })
