var spanClose = $(".close");

// Hides all modals
function closeModal() {
    $(".modal").hide()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.className == "modal") {
        closeModal()
    }
}

spanClose.click(function() {
    closeModal()
});