const number = 10;
    // parseInt(prompt('Enter the number of terms: '));
let n1 = 0;
let n2 = 1;
let next;

console.log('Fibonacci Series:');
var sum = 0;
for (let i = 1; i <= number; i++) {
    console.log(n1);
    sum+=n1;
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}
console.log('Fibonacci sum:');
console.log(sum);