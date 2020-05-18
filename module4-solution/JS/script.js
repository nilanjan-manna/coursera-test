(function(window) {
  var names = ["Nilanjan","Manna","Yaakov", "John", "Jen","Paul","Peater","Jack","jonny","Rahul"];
  for(name in names) {
  	var firstletter=names[name].toLowerCase().charAt(0);
  if (firstletter === 'j') {
      bye.speaker(names[name]);
    } 
    else {
      hello.speaker(names[name]);
    }
  }
})(window);