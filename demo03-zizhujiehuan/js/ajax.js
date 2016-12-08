$(document).ready(function () {

    $.fn.showOnScreenMessage = function (megs) {
        $(this).closest('section').append('<div class="onscreenmessage">' + megs + '</div>');
        $(this).closest('section').find('.onscreenmessage').animate({ opacity: 1.0 }, function () {
            $(this).delay('3000').fadeOut(function () {
                $(this).empty().remove();
            });
        });
    };

    $('.customer').focus(function () {
        $(this).data("initialText", $(this).html());

    });

    var CanContinue = 0;

    window.SelfServiceGoOn = function (Url) {
        if (CanContinue == 0)
            return;

        window.location.href = Url;
    }

    var interval = 1500;   //number of mili seconds between each call
    var refresh = function () {
        $.ajax({
            url: "AjaxSelfService.aspx",

            data: {
                Action: $("#Action").val()
            },

            cache: false,

            success: function (contents) {
                //alert(html);

                if (contents == "@reload") {
                    location.reload();
                    return;
                }

                if (contents.length > 10) {
                    CanContinue = 1;
                    $("#maincontent").html(contents);


                    $(".queding a").animate({
                        opacity: '1',
                        right: '1%',
                    }, 500);

                }



                if (CanContinue == 0) {
                    setTimeout(function () {
                        refresh();
                    }, interval);
                }


            }
        });




    };


    $("#Menu01").click(function () {
        htmlobj = $.ajax({
            url: "AjaxResponses.aspx", async: false
        });
        $("#MainContents").html(htmlobj.responseText);
    });

    window.AjaxResponses = function (MenuArgs) {
        $.ajax({
            url: "AjaxResponses.aspx",

            data: "MenuArgs=" + MenuArgs,


            cache: false,

            success: function (html) {
                //alert(html);

                if (html == "@reload") {
                    location.reload();
                    return;
                }

                var theElement, CommandName, CommandValue;
                var splitString = html.split(",");

                for (var i = 0; i < splitString.length; i++) {
                    var LineText = splitString[i];
                    var pos = LineText.indexOf("=")

                    if (pos > 0) {

                        CommandName = LineText.substring(0, pos);
                        CommandValue = LineText.substring(pos + 1);

                        theElement = document.getElementById(CommandName);

                        if (theElement != null) {

                            if (CommandValue.indexOf("..") > 0) {
                                theElement.innerHTML = CommandValue + "<img src='images/loading.gif'>";

                            }
                            else if (theElement.innerHTML.indexOf("..") > 0) {
                                location.reload();
                                return;
                            }
                            else {
                                theElement.innerHTML = CommandValue;
                            }
                        }
                        else {
                            location.reload();
                        }
                    }
                }


            }
        });

    };

    window.AjaxContents = function (MenuArgs) {
        $.ajax({
            url: "AjaxResponses.aspx",

            data: "MenuArgs=" + MenuArgs,

            cache: false,

            context: document.body,

            success: function (contents) {
                //alert(contents);

                $("#MainContents").html(contents);
            },

            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }

        });

        //$("#MainContents").html(htmlobj.responseText);

    };


    //make it global access
    window.updateErrorMessage = function (msg) {
        $('#error').html(msg).hide().fadeIn(500);
    }

    refresh();

});