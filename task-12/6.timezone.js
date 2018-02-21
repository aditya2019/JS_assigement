function timeZoneFormat(data){
var split = data.toString().split(" ");
var timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];
return timeZoneFormatted;
}
dt = new Date(1989, 10, 1);
console.log(timeZoneFormat(dt));
