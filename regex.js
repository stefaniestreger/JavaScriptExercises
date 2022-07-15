"use strict";

$(document).ready( () => {
    $("#validate").click( () => {
        const phone = $("#phone").val();
        // const pattern = /^\d{3}-\d{3}-\d{4}$/;   // 999-999-9999
        // const pattern = /^(1-)?\d{3}-\d{3}-\d{4}$/;   // optional 1- at phone prefix
        // const pattern = /^(1)?[-\.]?\d{3}[-\.]\d{3}[-\.]\d{4}$/;   // allow . or - between spaces
        const pattern = /^(1)?[-\.\s]?\(?(\d{3})\)?[-\.]\d{3}[-\.]\d{4}$/;   // optional whitespace and () around area code

        const isValid = pattern.test(phone);

        $("#message").text( (isValid) ? "Valid phone number" : "Invalid phone number" );
        $("#phone").focus();
    }); // end click()
    
    $("#phone").val("123-456-7890");             // set default phone number
    $("#phone").focus();                         // set focus on initial load
    
}); // end ready()
