var sortJSON = function(data, key, type) {
  if (type == undefined) {
    type = "asc";
  }
  return data.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    if (type == "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    } else if (type == "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }
  });
};

var testData = [{ key: 2 }, { key: 1 }, { key: 3 }, { key: 5 }, { key: 4 }];

console.log(testData);

console.log(sortJSON(testData, "key", "desc"));

console.log(sortJSON(testData, "key", "asc"));
