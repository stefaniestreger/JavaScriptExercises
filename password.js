"use strict";

const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();
		random = Math.floor(random * max);
		random = random + 1;
	}
	return random;
};

$(document).ready( () => {
    $("#generate").click( () => {
        $("#password").val( "" );
    
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";

        var start, stop, char;

        let userInput = $("#num").val();
        userInput = parseInt(userInput);
        let password = "";

        if (isNaN(userInput)) {
            alert("Please enter a valid number");
            return;
        } 
        
        for (let i = 0; i < userInput; i++) {
            start = getRandomNumber(chars.length);
            stop = start + 1;
            char = chars.substring(start, stop);
            password = password.concat(char);
        }

        $("#password").val(password);
        
    });
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    });
    
    $("#num").focus();
});
