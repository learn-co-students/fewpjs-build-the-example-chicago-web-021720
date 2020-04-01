// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function() {

  let likes = Array.from(document.getElementsByClassName("like"))
  
  likes.forEach(function(element) {
    element.addEventListener("click", function(event) {
      mimicServerCall()
      .then(resp => {
        let span = element.children[0]
        if (span.className === "like-glyph") {
          span.innerHTML = FULL_HEART
          span.className = "activated-heart"
        } else {
          span.innerHTML = EMPTY_HEART
          span.className = "like-glyph"
        }
      })
      .catch(error => {
        let modal = document.getElementById("modal")
        modal.className = ""
        let message = document.getElementById("modal-message")
        message.innerHTML = error
        setTimeout(function() {
          modal.className = "hidden"
        }, 5000)
      })
    })
  })
  
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
