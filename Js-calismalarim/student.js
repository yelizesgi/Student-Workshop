// let x = true + true + true * 5;
// console.log(x); // 7

// let x = 1;
// let y = 0;
// while (x < 4) {
//   x++;
//   y += x * 3;
//   console.log(y);
// } // 6 15 27

// let a;
// const b = 25;
// let c = "Text";
// console.log(a && b && c); // undifend

// const x = 6 % 2;
// const y = x ? "One" : "Two";

// //? REVERSE STRİNG
// let tersdenYaz = "Javascript öğreniyorum";
// console.log(reverseText(tersdenYaz));
// function reverseText(tersdenYaz) {
//   let newText = "";

//   for (let i = tersdenYaz.length - 1; i >= 0; i--) {
//     newText += tersdenYaz[i];
//   }
//   return newText;
// }
// let sentence = prompt(‘Write your sentence, please:’)
// console.log(sentence.length);
//  for(let i=sentence.length-1;i>=0;i--){
//      a[counter] = sentence[i]
//      counter++
//  }
//  console.log(a.join(“”));
// let sentence = prompt(‘Write your sentence, please:’)
// let a = sentence.trim().split(” “)
// let b = []
// let sayac = 0
// for(let i=a.length;i>=0;i--){
//     //console.log(a[i]);
//     b[sayac]=a[i]
//     sayac++
// }
// console.log(b.join(' '));

//! REVERSE WORD
let tersHarf = function (string) {
  return string.split("").reverse().join("");
};
tersHarf("Beni tersden yaz");
