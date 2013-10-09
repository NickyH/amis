$(document).delegate('[data-role="navbar"] a', 'click', function () {
    $(this).addClass('ui-btn-active');
    $('.content_div').hide();
    $('#' + $(this).attr('data-href')).show();
    return false;//stop default behavior of link
});