var contactsModal = document.getElementById('contactsModal');

var btn = document.getElementById("sticker-contacts");

var close = document.getElementById("close-contacts-pop-up");

// open the pop-up when the user clicks the button
btn.addEventListener('click', function(event) {
    contactsModal.style.display = "block";
     }
 );

// close the pop-up when the user clicks on (x)
close.onclick = function(event) {
    contactsModal.style.display = "none";
}

// close the pop-up when the user clicks anywhere outside it
window.onclick = function(event) {
   if (event.target == contactsModal) {
    contactsModal.style.display = "none";
    }
}

