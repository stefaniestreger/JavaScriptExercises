"use strict";

const scores = [];
const scoresString = [];

const displayScores = (scores, scoresString) => {

    let total = 0;
    for (let x = 0; x < scores.length; ++x) {
        total += scores[x];
    }
    let avg = total/scores.length;
    $("#average_score").text(avg);

    $("#scores").text(scoresString.join("\n"));
};

$(document).ready( () => {
    $("#add_button").click( () => {

        scoresString.push($("#last_name").val() + ", " + $("#first_name").val() + " : " + $("#score").val());

        scores.push(parseInt(($("#score").val())));

        displayScores(scores, scoresString);
        
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    });
    
    $("#clear_button").click( () => {

        scores.length = 0;
        scoresString.length = 0;

        $("#average_score").val( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); 
       
    $("#sort_button").click( () => {

        const sortedStudents = scoresString.sort();
        $("#scores").text(sortedStudents.join("\n"));
    });
    
    $("#first_name").focus();
});
