$(document).foundation();

$(document).ready(function() {
  var lastLink;
  $('#nav-magellan').on('update.zf.magellan', function(event, link) {
    // slightly expensive, so only fire once per change in link
    if(link[0] !== lastLink) {
      lastLink = link[0];
      var menu = $(link).parents('.submenu');
      if(!(menu.is(':visible'))) {
        $(menu).siblings('a').click();
      }
    }
  });
});
$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
