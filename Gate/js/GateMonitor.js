$(function () {
    $('#maincontent h2').click(function () {
        $(this).next().slideToggle();
    });
    var inputs = $('#maincontent input');
    inputs.each(function (index) {
        var ID = $(this).attr('value');
        $(this).change(function () {
            if ($(this).is(':checked')) {
                $('#maincontent').find('[id="' + ID + '"]').fadeIn(500);
            } else {
                $('#maincontent').find('[id="' + ID + '"]').fadeOut(500);
            }
        });
    });
});
