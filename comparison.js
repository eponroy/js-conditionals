console.log(5 > 10);
console.log(5 < 10);
console.log(5 == 10);
console.log(10 == 10);

console.log(15 >= 10);
console.log(5 >= 10);
console.log(5 <= 10);
console.log(15 <= 10);

console.log(10 == 10);

// ---------------------------

var peyaraPrice = 40;
var applePrice = 250;

console.log(peyaraPrice > applePrice);
console.log(peyaraPrice < applePrice);
console.log(applePrice < peyaraPrice);

/*
 *== (man taake compare kore, kon type data ta dekhe na)
 *=== (man + type check kore result dey)
 *
 *
 *
 */

console.log(10 == "10");
console.log(10 === "10");

console.log(120 === "tomato");

// -------------------------------------------

console.log(10 != "10");

console.log(10 !== "10");

// | অপারেটর | কী চেক করে?  | Type coercion করে? | উদাহরণ        | রেজাল্ট |
// | ------- | ------------ | ------------------ | ------------- | ------- |
// | `==`    | Value        | করে                | `10 == "10"`  | ✅ true  |
// | `===`   | Value + Type | করে না             | `10 === "10"` | ❌ false |
// | `!=`    | Value        | করে                | `10 != "10"`  | ❌ false |
// | `!==`   | Value + Type | করে না             | `10 !== "10"` | ✅ true  |
