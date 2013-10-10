$(function(){

  $(".tab-bar .tab").on('click', show_active_tab);
  $("#details-link").on('click', show_active_tab);
  $('[data-role="navbar"] a').on('click', change_tab_content);
  $("#show-tab").on('click', show_active_tab);
  $("#show-tab").trigger('click');
  insert_map();
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
  $(this).addClass('ui-btn-active');
  $('.content_div').hide();
  $('#' + $(this).attr('data-href')).show();
  return false;//stop default behavior of link
}

function insert_map()
{
  console.log('map!!!!');
  $.get('map_openlayer.html', function(data) {
    $('#insert-map').html(data);
    });
}