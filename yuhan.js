
        
        // Get the modal
        var modal = document.getElementById("payment_modal");
        
        // Get the button that opens the modal
        var btn = document.getElementById("payment_select");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("payment_close")[0];
        
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
        var card_modal = document.getElementById("cardInfo_modal");

        // Get the button that opens the modal
        var card_btn = document.getElementById("addCard_bnt");
        
        // Get the <span> element that closes the modal
        var card_span = document.getElementsByClassName("cardInfo_close")[0];
        
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