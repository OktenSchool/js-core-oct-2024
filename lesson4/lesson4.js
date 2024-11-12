/*demo1*/
// function foobar(){
//     console.log('1');
//     console.log('2');
//     console.log('3');
// }
//
//
// foobar();
// ///
// ///
// ///
// console.log('some actions');
// ///
// ///
// foobar();
// /////
// /////
// /////
// console.log('some actions');
// /////
// /////
// /////
// /////
// foobar();


/*demo2*/
// s = a * a
// s = a * b
// function sSquare(side) {
//     let result = side * side;
//     console.log(result);
// }
//
// sSquare(10);
//
// sSquare(23);
//
//
// function sRect(sideA, sideB) {
//     let result = sideA * sideB
//     console.log(result);
// }
//
// sRect(10, 20);
// sRect(11, 144);


/*demo3*/
// function sRect(a, b) {
//     let result = 200;
//     return 200;
// }
//
// let x = sRect(10,20);


/*demo4*/
// function createTitle(titleText) {
//     // document.write('<h1>' + titleText + '</h1>');
//     document.write(`<h1>${titleText}</h1>`);
//
// }
//
// createTitle('hello world!');
// createTitle('hello okten');
// createTitle('js is cool');

/*demo5*/
//
// function createHTMLElement(tag, text) {
//     document.write(` <${tag}>${text}</${tag}> `);
// }
//
// createHTMLElement('h1', 'hello okten');
// createHTMLElement('p', 'Lorem ipsum dolor sit amet.');
// createHTMLElement('div','sadj hgasjhgd ajhgs ajhg')

// function iterator(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
//     console.log('loop end');
// }
//
// iterator([11, 22, 33]);
// iterator([-1, 'asd', true]);
// iterator([]);


let formulas = {
    sSquare: function (a) {
        return a * a;
    },
    sRect: function (a, b) {
        return a * b;
    },
}


let sSquare = formulas.sSquare(10);
console.log(sSquare);













