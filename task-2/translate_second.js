var greetings = {
  "merry":      "god",
  "christmas":  "jul",
  "and":        "och",
  "happy":      "gott",
  "new":        "nytt",
  "year":       "ar"
  };
var swedish = "";
function translate(phase) {
  for (var name in greetings) {
    if (greetings.hasOwnProperty(name)) {
      var sentence = phase.split(/\s/);
      for (var i = 0; i <= sentence.length; i++) {
        if (sentence[i] === name) {
          swedish += greetings[name] + " ";
        }
      }
    }
  }
  swedish = swedish.trim();
  swedish = swedish += "!";
  return swedish[0].toUpperCase() + swedish.slice(1);
}
console.log(translate("merry christmas and happy new year"));