var owlHtml;

$(function(){
  insert_map();
  $('#form-page').on('pageinit', show_first_form);
  create_layers_carousel();
  $("#layers-button").on('click', layers_qtip);
  $("#search-by-address-button").on('click', searchByAddress_qtip);
  $(".tab-bar .tab").on('click', show_active_tab);
  $("#details-link").on('click', show_active_tab);
  $('[data-role="navbar"] a').on('click', change_tab_content);
  $("#show-tab").on('click', show_active_tab);
  $("#show-tab").trigger('click'); //triggers click to show content on first tab on page load
  $(".top-bar-icons").on('click', insert_form);
});

function create_layers_carousel()
{
  owlHtml = $("#owl-example").owlCarousel({

    // Most important owl features
    items : 5,
    // itemsDesktop : [1199,4],
    // itemsDesktopSmall : [980,3],
    // itemsTablet: [768,2],
    // itemsTabletSmall: false,
    // itemsMobile : [479,1],
    // singleItem : false,

    //Basic Speeds
    slideSpeed : 200,

    //Autoplay
    autoPlay : false,

    // Navigation
    navigation : true,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,

    //Pagination
    pagination : true,
    paginationNumbers: false,

    // Responsive
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,

    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",

    //Transitions
    transitionStyle : false,
    })
}


function layers_qtip()
{
  $(this).qtip({
      content: {
        text: $('.my-owl-wrapper'),
        button: 'Close'
      },
      show: {
          modal: {
              on: true,
              solo: true
          },

          ready: true,
          event: 'click',
          effect: function (offset) {
              $(this).slideDown(300);
          }
      },
      events: {
        show: function(event, api) {
        }
      },
      style: {
          classes: 'qtip-layers-panel qtip-rounded qtip-shadow qtip-light',
          tip: {
            corner: 'center left',
            width: 100,
            height: 100,
            offset: 100
        }
      },
      hide: {
          event: 'click',
          effect: function () {
              $(this).slideUp(300);
          }
      },
      overwrite: false,
      position: {
          my: 'center left',
          at: 'top right',
          target: $(this),
          adjust: {
            scroll: true // Can be ommited (e.g. default behaviour)
        }
      },
      api: {
          onContentLoaded: $('.item').each(function () {
              $(this).attr('style', 'width: 250px; height: 250px;');
          })
      }
  });
}

function searchByAddress_qtip()
{
  $(this).qtip({
      content: {
        text: '<div data-role="fieldcontain" style="margin-top: 40px;">' +
              '<input type="search" name="search-2" id="search-2" value="" style="width: 200px; margin-left:30px;" /></div>' +
              '<input type="submit" value="Search Address" class="form-button save-button"' +
              'data-role="button" style="background-color: #2584cd; border-radius: 20px;' +
              'width: 200px; height: 25px; font: 16px arial, sans serif; margin-top: 20px;' +
              'margin-right: auto; margin-left: 30px;" />',
        button: 'Close'
      },
      render: function (event, api) {
          // Grab the content
          var content = api.elements.content;
          // Now it's is rendered, we can...
          content.otherPlugin(); // ...Call our other plugins to act on its contents
          $(this, content).otherPlugin(); // ...or a subset of it's contents!
      },
      show: {
          modal: {
              on: true,
              solo: true
          },

          ready: true,
          event: 'click',
          effect: function (offset) {
              $(this).slideDown(300);
          }
      },
      events: {
        show: function(event, api) {
        }
      },
      style: {
          classes: 'qtip-address-panel qtip-rounded qtip-shadow qtip-light',
          tip: {
            corner: 'center left',
            width: 100,
            height: 100,
            offset: 100,
            x: 100,
            y: 200
        }
      },
      hide: {
          event: 'click',
          effect: function () {
              $(this).slideUp(300);
          }
      },
      overwrite: false,
      position: {
          my: 'top right',
          at: 'bottom left',
          target: $('#search-by-address-button'),
          adjust: {
            scroll: true, // Can be ommited (e.g. default behaviour)
            x: 20,
            y: 20
        }
      }
  });
  $('#address-search-panel').removeClass('invisible');
}

$(function(){
  $("#map-link").on('click', refresh_map);
});

// add tab-active class to tab on click
function show_active_tab()
{
  $(this).addClass("tab-active");
  event.stopPropagation();
  $(this).siblings().removeClass("tab-active");
  show_first_form();
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

// inserts the first form into the form page on initial load of details page
function show_first_form()
{
  $.get('forms/form_0.html', function(data) {
    $('#insert-form').html(data);
    });
  $('#insert-form').trigger('create');
}

function refresh_map()
{
  window.location = ('index.html');
}

// inserts the relevant form into the form page
function insert_form()
{
  var link_index = $('.top-bar-icons').index(this);
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