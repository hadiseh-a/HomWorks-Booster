/*
John and his family went on a holiday and visited three different restaurants. The bills were: $124, $48, $268
To tip the waiter a fair amount, John created a simple tip calculator as a function. He likes to tip:
 - 20% of the bill when the bill is less than $50
 - 15% when the bill is between $50 and $200
 - 10% if the bill is more than $200
In the end, John would like to have two arrays:

An array containing all three tips (one for each bill).
An array containing all three final paid amounts (bill + tip).
*/

function calculateTip(bill) {
  if (bill <= 50) return bill / 5;
  else if (bill <= 200) return (bill / 20) * 3;
  else if (bill > 200) return bill / 10;
}
let bills = [124, 48, 268];
let tips = bills.map((number) => calculateTip(number));
let totalPaid = tips.map((tip) => bills[tips.indexOf(tip)] + tip);
console.log(bills);
console.log(tips);
console.log(totalPaid);
