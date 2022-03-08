var number = 10;
// parseInt(prompt('Enter the number of terms: '));
var n1 = 0;
var n2 = 1;
var next;
console.log('Fibonacci Series:');
var sum = 0;
for (var i = 1; i <= number; i++) {
    console.log(n1);
    sum += n1;
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}
console.log('Fibonacci sum:');
console.log(sum);
