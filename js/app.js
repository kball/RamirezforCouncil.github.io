$(document).foundation();


$(document).ready(function() {
  var handler = function(event) {
    var link = $('#nav-magellan a.active');
    var menu = $(link).parents('.submenu');
    if(!(menu.is(':visible'))) {
      $(menu).siblings('a').click();
    }
  };
  var throttledHandler = _.throttle(handler, 200);

  $('#nav-magellan').on('update.zf.magellan', throttledHandler);
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
