require("jsdom").env("", function(err, window) {
  if (err) {
    console.error(err);
    return;
  }

  var $ = require("jquery")(window);
});

var a = {
  a: 1,
  b: 2
};

var b = {
  a: 2,
  b: ""
};

var c = $.extend(a, b);

console.log(c);
