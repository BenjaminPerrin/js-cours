// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
// function add(nb1, nb2) {
//   if (typeof nb1 === typeof nb2 && typeof nb1 === 'string') {
//     return Number(nb1) + Number(nb2);
//   } else if (typeof nb1 === typeof nb2 && typeof nb1 === 'number') {
//     return nb1.toString() + nb2.toString();
//   } else {
//     return null;
//   }
// }

// console.log(add('2', '3'));
// console.log(add(2, 3));
// console.log(add(2, '3'));
//--------------------------------------------------------------------------------------------------
// function prodImp(args) {
//   let result = args.filter((arg) => arg % 2 != 0);
//   result = result.reduce(function (a, b) {
//     return a * b;
//   });
//   return result;
// }
// console.log(prodImp([1, 2, 3, 4])); //3
// console.log(prodImp([3, 6, 8, 5, 5, 7])); //525
// console.log(prodImp([1, 0, 1, 0, 1, 0])); //1

//--------------------------------------------------------------------------------------------------

// function repeatChr(str, nb) {
//   if (nb === 1) {
//     return str;
//   }
//   let newStr = [];
//   newStr = str
//     .split('')
//     .map((char) => char.repeat(nb))
//     .join('');
//   return newStr;
// }

// console.log(repeatChr('alex', 3)); // "aallleeexxx"
// console.log(repeatChr('waytolearnx', 1)); // "waytolearnx"
// console.log(repeatChr('bob', 2)); //('bboobb');

//--------------------------------------------------------------------------------------------------
// function filterWords(args) {
//   let result = args.filter((arg) => arg.charAt(0) != 'Z');

//   return result;
// }
// console.log(filterWords(['bob', 'Alex', 'Zoello'])); // ["bob","Alex"]
// console.log(filterWords(['Lion', 'Zebra', 'Gazelle'])); // ["Lion","Zebra"]
// console.log(filterWords(['Mercedes', 'Bmx', 'Audi'])); // ["Mercedes","Bmx","Audi"]

//--------------------------------------------------------------------------------------------------
// function getInt(args) {
//   let result = args.filter((arg) => typeof arg === 'number' && arg.isInteger());

//   return result;
// }

// console.log(getInt([1, 2, '3', '4', '5', 6.5])); //
// console.log(getInt(['Vache', 20, 'Cheval', 1, 'Pioule', 50])); //

//--------------------------------------------------------------------------------------------------
// function convert(arr, arr2) {
//   let result = arr.map((item, index) => [item, arr2[index]]);

//   return result;
// }

// console.log(convert([0, 2, 5], [8, 6, 9])); //

//--------------------------------------------------------------------------------------------------
// function replaceVpyel(str, replace) {
//   return str.replace(/^[aeiou]$/i, replace);
// }

// console.log(replaceVpyel('voyelle', '$')); //
//--------------------------------------------------------------------------------------------------

// function getExtension(arr) {
//   let newArr = [];
//   arr.forEach((element) => newArr.push(element.split('.').pop()));
//   return newArr;
// }
// console.log(getExtension(['file.html', 'file.js'])); //

//--------------------------------------------------------------------------------------------------

function somme(arr) {
  return arr.length === 0 ? 0 : arr.pop() + somme(arr);
}
console.log(somme([1, 2, 3])); //
console.log(somme([1, 2])); //
console.log(somme([])); //
