var modal = document.getElementById('addPlaceModal');

var btn = document.getElementById("sticker-add");

var close = document.getElementById("close-pop-up");

// open the pop-up when the user clicks the button
btn.addEventListener('click', function(event) {
    modal.style.display = "block";
    }
);

// close the pop-up when the user clicks on (x)
close.onclick = function(event) {
    modal.style.display = "none";
    event.stopPropagation();
}

// close the pop-up when the user clicks anywhere outside it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

