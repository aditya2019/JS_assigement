var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
function month_name(date){
var month=date.getMonth();
return monthNames[month];
}
console.log(month_name(new Date("08/11/2009")));
