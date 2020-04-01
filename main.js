// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

Array.from(document.querySelectorAll('.like-glyph')).forEach(function(heart){
  heart.addEventListener('click',function(){
    if(heart.innerHTML == FULL_HEART){
      heart.innerHTML = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
    else {
      mimicServerCall()
        .then(serverMessage => {
          heart.innerHTML = FULL_HEART;
          heart.classList.add('activated-heart');
        })
        .catch(error => {
          let modal = document.getElementById('modal');
          let modalmessage = document.getElementById('modal-message');
          modal.classList.remove('hidden');
          modalmessage.innerHTML = error;
          setTimeout(function(){
            modal.classList.add('hidden');
          }, 5000);
        });
    }

  });
})
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
