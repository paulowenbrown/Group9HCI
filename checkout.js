
        
        // Get the modal
        var modal = document.getElementById("payment-modal");
        
        // Get the button that opens the modal
        var btn = document.getElementById("payment-select");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("payment-close")[0];
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

        // Get the modal
        var card_modal = document.getElementById("add-card-modal");

        // Get the button that opens the modal
        var card_btn = document.getElementById("addCard-btn");
        
        // Get the <span> element that closes the modal
        var card_span = document.getElementsByClassName("add-card-close")[0];
        
        // When the user clicks the button, open the modal 
        card_btn.onclick = function() {
            card_modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        card_span.onclick = function() {
            card_modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == card_modal) {
                card_modal.style.display = "none";
            }
        }