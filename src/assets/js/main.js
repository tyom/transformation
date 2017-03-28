$(function() {
  function handleExpanderClick() {
    $(this)
      .toggleClass('is-expanded')
      .siblings('ul')
      .toggleClass('is-collapsed');
  }

  $('.list__expander')
    .on('click', handleExpanderClick)
    .on('keypress', function(evt) {
      if (evt.which === 13 || evt.which === 32) {
        $(this).click();
        evt.preventDefault();
      }
    });
});
