var currentDate = new Date();

var yy = currentDate.getFullYear();
var mm = currentDate.getMonth() + 1;
var dd = currentDate.getDate();
var thh = currentDate.getHours();
var tmm = currentDate.getMinutes();

var printedDate = `${yy}/${mm}/${dd} ${thh}:${tmm}`;

console.log(printedDate);
