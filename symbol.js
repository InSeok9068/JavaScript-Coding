const a = Symbol("A");
const b = Symbol("A");

if (a === b) {
  console.log("같음");
} else {
  console.log("다름");
}
