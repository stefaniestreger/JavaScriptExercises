"use strict";
$(document).ready(function()
{
    $("#jdom a").click(evt => {

        const currentLink = evt.currentTarget;
        evt.preventDefault();
        
        $(currentLink).toggleClass("hide");
        if ($(currentLink).attr("class") !== "hide") {
            $(currentLink).prev().hide()
            $(currentLink).text("Show more");
        } else {
            $(currentLink).prev().show();
            $(currentLink).text("Show less");
        }
    });
});