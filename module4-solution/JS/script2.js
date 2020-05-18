(function(window) {
  var bye = {};
  var speak = "Goodbye";
  bye.speaker = function(name) {
    console.log(speak + " " + name);
  }
  window.bye = bye;
})(window);