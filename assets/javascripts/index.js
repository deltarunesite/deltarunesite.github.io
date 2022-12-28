$(function() {
  // guaranteed stars
  // right side
  appendStar(Math.floor(Math.random() * 10) + 400, Math.floor(Math.random() * 10) + 10, false);
  appendStar(Math.floor(Math.random() * 10) + 280, Math.floor(Math.random() * 5) + 15, false);
  appendStar(Math.floor(Math.random() * 10) + 440, Math.floor(Math.random() * 10) + 100, false);
  appendStar(Math.floor(Math.random() * 10) + 460, Math.floor(Math.random() * 10) + 300, false);
  // left side
  appendStar(0 - (Math.floor(Math.random() * 10) + 400), Math.floor(Math.random() * 10) + 10, false);
  appendStar(0 - (Math.floor(Math.random() * 10) + 280), Math.floor(Math.random() * 5) + 15, false);
  appendStar(0 - (Math.floor(Math.random() * 10) + 440), Math.floor(Math.random() * 10) + 100, false);
  appendStar(0 - (Math.floor(Math.random() * 10) + 460), Math.floor(Math.random() * 10) + 275, false);

  // random stars
  var star_count = Math.floor(Math.random() * 10) + 15;
  for (i = 0; i < star_count; i++) {
    var x = Math.floor(Math.random() * 300) + 450 + (i * 10);
    var y = Math.floor(Math.random() * 375) + 5 + (i * 10);
    var big = false;
    if (i < 2) {
      big = true;
    }
    if (i % 2 == 0) {
      x = 0 - x - 20;
    }
    appendStar(x, y, big);
  }
});

function appendStar(x, y, big) {
  var star = 6;
  if (!big) {
    star = Math.floor(Math.random() * 5) + 1;
  }
  var delay = Math.floor(Math.random() * 6) + 1;
  $("#stars").append("<img alt='Star' aria-hidden='true' src='/assets/images/star" + star + ".png' style='margin-left: " + x + "px; margin-top: " + y + "px; animation-delay: -" + delay + "s' />");
}
