$(function(){

  $(".tab-bar .tab").on('click', show_active_tab);
  $("#details-link").on('click', show_active_tab);
  $('[data-role="navbar"] a').on('click', change_tab_content);
  $("#show-tab").on('click', show_active_tab);
  $("#show-tab").trigger('click'); //triggers click to show content on first tab on page load
  insert_map();
  $(".top-bar-icons").on('click', insert_form);

});


$(function(){
  $("#map-link").on('click', refresh_map);
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
  $.get('map_openlayer.html', function(data) {
    $('#insert-map').html(data);
    });
}

function refresh_map()
{
  window.location = ('index.html');
}

// inserts the relevant form into the form page
function insert_form()
{
  var link_index = $('.top-bar-icons').index(this);
  console.log(link_index);
  $.get('forms/form_' + link_index + '.html', function(data) {
    $('#insert-form').html(data);
    // $.mobile.loadPage( "forms/form_" + link_index + ".html", {
    //   pageContainer: $('#insert-form')
    });
  $('#insert-form').trigger('create');
}

function refresh_form()
{
  window.location = ('form.html');
}
