$(function() {
  $('.list__expander')
    .removeClass('list__expander')
    .wrap('<button class="list__expander">')
    .parent()
    .on('click', function(evt) {
      $(this)
        .toggleClass('is-expanded')
        .siblings('ul')
        .toggleClass('is-collapsed');
  });
});
