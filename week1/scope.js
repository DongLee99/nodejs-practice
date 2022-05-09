if (true) {
    var x = 'var';
}
console.log(`var: ${x}`);

if (true) {
    let y = 'let';
}
// console.log(`let: ${y}`); 에러

function foo () {
    if (true) {
        var variable = 'hello';
        console.log('if block - ', variable);
    }
    console.log('function block - ', variable);
 }

 //console.log('global - ', variable);

 let numArr = [1, 2, 3];
 const newArr = numArr.map(x => x * 2);

 console.log(newArr);