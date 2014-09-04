$('.js-selectAll').on('click', function(){
  $(this).parent().find('input').prop('checked', true);
})
$('.js-deselectAll').on('click', function(){
  $(this).parent().find('input').prop('checked', false);
})
