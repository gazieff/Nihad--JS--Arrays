/*let a = Number(prompt("a-ni daxil edin: "));
let b = Number(prompt("b-ni daxil edin daxil edin:"));
let c = a + b;
if (a == b) {
    console.log(3 * c);

} else {
    console.log(c);
}*/


function generatePyramid() {
    let n = 5,
        arr;
    for (let i = 0; i < n; i++) {
        arr = [];
        for (let j = 0; j <= i; j++) {
            arr.push(j);

        }
        console.log(arr.join(" "))
    }

}
generatePyramid();
let number = [1, 10, 20, 30, 40, 50, 60, 70]
console.log(number);

//  arrayin en boyuk reqemi:
//  let $number=[200,100,10,300,400,500,700,600]

// console.log(Math.max(...$number));
// console.log(Math.min(...$number));



/* arrayin sonuna 15 ededi elave edin */
/* let _number=[10,100,200,300,400,505,608,705]
let newNumber=_number.push('15')
console.log(_number) */

/* arrayin ilk bumberi silmek
//  */
/* let _number=[16,104,205,306,420,540,680,720] */
// let firstNumber=_number.shift()
// console.log(_number) 

// arrayin sonuncu ededini cap edin

// let $number=[1,10,20,30,40,50,60,70]
// $number.sort()
// let lastElement = $number[$number.length - 1];
// console.log(lastElement)

// foreach ile elementleri cap edin
// let $number=[1,10,20,30,40,50,60,70]
// $number.forEach(element => console.log(element));

// arrayin 3cu ededinden sonraki ededleri cap edin
// let $number=[1,10,20,30,40,50,60,70]
// for (let i = 3; i < $number.length; i++) {
//   console.log($number[i]);
// }


// arrayin 40ci elementinden sonraki elementleri cap edin
// let $number=[1,10,20,30,40,50,60,70]
//  for (let i = 5; i < $number.length; i++) {
//    console.log($number[i]);