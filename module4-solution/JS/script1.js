(function(window){
	var hello={};
	var speak="hello";
	hello.speaker = function(name) {
    console.log(speak + " " + name);
  }
  window.hello = hello;
})(window);