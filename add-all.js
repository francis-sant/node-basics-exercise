let typed = process.argv.slice(2);
let sum = 0;

for (let one in typed) {
  sum += Number(one);
}

console.log(sum);
