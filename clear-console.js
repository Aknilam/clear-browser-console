(function(keycode) {
  var lastPressed = null;
  document.addEventListener('keyup', function(e) {
    if (e.keyCode === lastPressed && lastPressed === keycode) {
      console.clear();
    } else {
      lastPressed = e.keyCode;
      setTimeout(function() {
        lastPressed = null;
      }, 300);
    }
  });
})(67);
