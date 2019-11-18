window.addEventListener('DOMContentLoaded',function(){ 
  var modal = $('.destroybtn-page'),
        modalContent = $('.destroybtn-box'),
        btnOpen = $(".destroyitembtn"),
        btnClose = $(".btn-close");
 
  $(btnOpen).on('click', function() {
    modal.show();
  });
 
  $(modal).on('click', function(event) {
    if(!($(event.target).closest(modalContent).length)||($(event.target).closest(btnClose).length)){
      modal.hide();
    }
  });
});