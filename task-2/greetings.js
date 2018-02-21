var happiness = {
  "merry":      "god",
  "christmas":  "jul",
  "and":        "och",
  "happy":      "gott",
  "new":        "nytt",
  "year":       "ar"
  };
var swedeen = "";
function translate(word) {
for (var name in happiness) {
 if (happiness.hasOwnProperty(name)) {
  var sentence = word.split(/\s/);
   for (var i = 0; i <= sentence.length; i++) {
 if (sentence[i] === name) {
   swedeen += happiness[name] + " ";
 }
 }
 }
 }
  swedeen = swedeen.trim();
  swedeen = swedeen += "!";
  return swedeen[0].toUpperCase() + swedeen.slice(1);
}
console.log(translate("merry christmas and happy new year"));