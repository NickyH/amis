$(function(){

  $(".tab-bar .tab").on('click', show_active_tab);
  $('[data-role="navbar"] a').on('click', change_tab_content);
  $("#show-tab").on('click', show_active_tab);
  $("#show-tab").trigger('click');

});

// add tab-active class to tab on click
function show_active_tab()
{
  $(this).addClass("tab-active");
  event.stopPropagation();
  $(this).siblings().removeClass("tab-active");
}

// change content on tab click
function change_tab_content()
{
  console.log('content');
  $(this).addClass('ui-btn-active');
  $('.content_div').hide();
  $('#' + $(this).attr('data-href')).show();
  return false;//stop default behavior of link
}




