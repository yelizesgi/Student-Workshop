//!-----------***CONDİTİONS******--------------------//
//?---***SYNTAX*****------//

//****Tek Koşul*****/

// if(conditions){

// }

//*****İki Koşul****//
//  if(conditions){

//  }else{

//  }

//*****Çok Koşullu*****/

//  if(conditions){

// }if else(conditions){

// }if else(conditions){

//}......
//}else{

//}

//?---********Örnekler*****---//
//*1)Belli bir maaş üzerindeki kişilere Kredi veren bir banka hesabı oluşturun.
// let maas = +prompt("Lütfen aldığınız maası giriniz");
// if(maas >= 13000){
//     console.log(`${maas} tl olan maasınız banka kredisi için uygundur.`);
// }else{
// console.log(`Üzgünüz kredi alamazsınız`)
// }

//*2) 1-100 arasında girilen bir sayının 5 ile tam bölünüp bölünmediğini hesaplayan bir hesaplayıcı oluşturun//
let sayi = +prompt("Lütfen 1-100 arasında bir sayı giriniz")
while(sayi<0 || sayi>100){
    console.log("Not 0'dan küçük veya 100 den büyük olamaz")
     sayi = prompt("Lütfen 0-100 arasinda bir not giriniz:")
     if( sayi % 5 == 0){
        console.log(`Girilen ${sayi} sayısı 5 ile tam bölünür`)
    }else{
        console.log(`Girilen ${sayi} sayısı 5 ile tam bölünmez`)}
}



// for(;sayi<0 || sayi>100;){
//     console.log("Not 0'dan küçük veya 100 den büyük olamaz")
//     sayi = +prompt("Lütfen 1-100 arasında bir sayı giriniz")
// if( sayi % 5 == 0){
//         console.log(`Girilen ${sayi} sayısı 5 ile tam bölünür`)
// }else{
// console.log(`Girilen ${sayi} sayısı 5 ile tam bölünmez`)}}






// if( sayi % 5 == 0){
//     console.log(`Girilen ${sayi} sayısı 5 ile tam bölünür`)
// }else{
//     console.log(`Girilen ${sayi} sayısı 5 ile tam bölünmez`)
// }

//*3) Sınav dan alınnan puanlara göre derse geçme notunu hesaplayan bir hesaplıyıcı oluşturunuz//

// let vize = +prompt("Lütfen vize notunuzu giriniz");
// let final = +prompt("Lütfen final notunuzu giriniz");
// const sonuc1 = vize* 0.30
// const sonuc2 = final * 0.70
// const gecmeNotu = sonuc1 + sonuc2
// if( gecmeNotu >= 50){
//     console.log(`Notunuz: ${gecmeNotu} dersden geçtiniz`)
// }else{
//     console.log(`Notunuz: ${gecmeNotu} dersden kaldınız`)
// }

// ? 1-Sayının Pozitif veya Negatif olduğunu bulma // if else
// let sayi2 = +prompt("Lütfen bir sayi giriniz")
// if(sayi2 > 0){
//     console.log(`Girilen sayi: ${sayi2} sayınız pozitif`)
// }else if(sayi2 == 0){
//     console.log(`Girilen sayi: ${sayi2} sayınız nötr`)
// }else{
//     console.log(`Girilen sayi: ${sayi2} sayınız negatif`)
// }

//? 2-Sayının tek mi çift mi olduğunu bulma //if else
// let sayi3 = +prompt("Lütfen bir sayi giriniz:")
// if(sayi3 % 2 == 0){
//     console.log("Girdiğiniz sayi çift")
// }else{
//     console.log("Girdiğiniz sayi tek")
// }

// ? 3-Haftanın gününü yazdırma(if else)
// let günler = +prompt("Lütfen 1-7 arası bir sayi giriniz")
// if(günler == 1){
//     console.log("pzt")
// }else if(günler == 2){
//     console.log("salı")
// }
// else if(günler == 3){
//     console.log("çarşamba")
// }
// else if(günler == 4){
//     console.log("perşembe")
// }
// else if(günler == 5){
//     console.log("Cuma")
// }
// else if(günler == 6){
//     console.log("C.tesi")
// }else{
//     console.log("Pazar")
// }

// ? 4-Ehliyet alabiliyor mu? // koşullar yaşın 18'den büyük olması ve araba sürmeyi bilip bilmemesi
// let carKnow = prompt("Arabıyı sürmeyi biliyor musunuz e/h").toLowerCase()
// let age = +prompt("Lütfen yasinizi giriniz")
// if(carKnow == "e"){
//     if(age >= 18){
//         console.log("ehliyet alabilirsiniz")
//     }else{
//         console.log(`${age} yasınız 18 ' den küçük olduğu için alamazsınız`)
//     }
// }else{
//     console.log("arabayı sürmeyi bilmediğiniz için ehliyet alamazsınız")
// }

// ? 5-Hesap makinesi yapımı if else
// let sayi1 = +prompt("Lütfen bir sayı yaziniz")
// let sayi2 = +prompt("Lütfen bir sayi giriniz")
// let islem = prompt("Lütfen bir islem giriniz")
// if(islem == "+"){
//     console.log(sayi1 + sayi2)
// }else if(islem == "-"){
//     console.log(sayi1 - sayi2)
// }else if(islem == "*"){
//     console.log(sayi1 * sayi2)
// }else if(islem == "/"){
//     console.log(sayi1 / sayi2)
// }else{
//     console.log("yanlış işlem girdiniz")
// }

// ? 6-Switch case ile haftanın gününü yazdırma
// let gun = +prompt("Lütfen 0-6 arasi bir sayi giriniz")
// switch (gun) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
// console.log(day)

//1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)
// const age = +prompt("Lütfen yasinizi giriniz")
// const mesaj = age >= 18 ? "Oy kullanabilirsiniz" : "Oy kullanamaz"
// console.log(mesaj)
// 2- Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?
//  Not:
//  90'dan büyükse AA.
// - 80'den büyük yada 90'a eşitse AB,
// - 70'den büyük yada 80'a eşitse BB,
// - 60'den büyük yada 70'a eşitse BC,
// - 50'den büyük yada 60'a eşitse CC,
// - 40'den büyük yada 50'a eşitse CD,
// - 30'den büyük yada 40'a eşitse DD,
// - 30'dan küçük yada eşitse FF ,

// 3- Artık yıl sorusu
// Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

// Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

// Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.

// let yıl = +prompt("Lütfen yıl griniz")
// if(yıl % 4 == 0){
//     if(yıl % 100 != 0){
//         console.log("Girdiğiniz yıl artık yıldır")
//     }else{
//         console.log("Girdiğiniz yıl artık yıl değildir")
//     }
// }else{
//     console.log("Girdiğiniz yıl artık yıl değildir")
// }

// const age = +prompt("Lütfen yasinizi giriniz")

// let description = ""
// //? if-else
// if (age >= 18) {
//   description = "Adult"
// }
// console.log(description)

//!----------LOOPS---------*//
//?------SYNTAX---------//

//*100 adet cikti veren kodu yaziniz//
// for (let i = 0; i <= 100; i++){
//     console.log(`${i}-FS14`)
// }

//* *****1 den n kadar sayilari toplayan kodu yaziniz.//
// const sayi = prompt("Lütfen bir sayi giriniz");
// let sum = 0;
// for (let i = 0; i <= sayi; i++) {
//   sum += i
 //   console.log(`SUM: ${sum}`); // Burda yazdırırsak degerler tek tek yazdırır
// }
// console.log(`SUM: ${sum}`);20 // toplam degeri direk verir
//* 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//* for dongusu ile yaziniz..
//* Math.random() => 0 - 1 arasinda rasgele bir sayi üretir.

// const adet = prompt("Lütfen üretmek istediğiniz adedi giriniz")
// for(let kontrol = 1; kontrol <= adet; kontrol++){
//      üret = Math.round(Math.random() * 100)
//     console.log(`${kontrol}.sayınız sayiniz : ${üret}`)
// }




//! NOT:
//! Math.floor() =>en yakin alt tamsayiya yuvarlar
//! Math.ceil() =>en yaki ust tamsayiya yuvarlar
//! Math.round() => degerine gore yuvarlar.
//! Math.trunc() => kesirli sayinin tam kismini alir.

//* ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//* for dongulerini kullanarak yaziniz.

//? NOT:
//? 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//? Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//? break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.


// let asal = prompt("Lütfen 2 den büyük bir sayi giriniz")
// for (let j = 2; j < asal; j++){
//     if(asal % j == 0){
//        console.log("Girdiğiniz sayi asal değildir")
//        break
//     }else{
//         console.log("girdiğiniz sayi asaldır")
//     }
// }


// const number=+prompt("lütfen bir sayi giriniz: ")
// for(let i=2; i<number; i++){
//     if(number%i==0){   
//     console.log(`${number} sayisi asal sayi degildir`);
//     break
//     }
//     else{
//         console.log(`${number} sayisi asal sayidir`);
// }}


// //!WHİLE//

// let number = prompt("Lütfen 0-100 arasinda bir not giriniz:")
// while(number <= 0 || number > 100 ){
//     console.log("Not 0'dan küçük veya 100 den büyük olamaz")
//     number = prompt("Lütfen 0-100 arasinda bir not giriniz:")
// }
// console.log("Notunuz:", number)

