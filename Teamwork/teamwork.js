// A = [12, 14, 16]; 
// B = [11, 13, 17];
// const concat = [...A, ...B];
// console.log(concat.sort());

// let krediTalepMiktarı = prompt("Lütfen istediğiniz kredi miktarını giriniz:");
// let maas = prompt("Maasinizi giriniz:");

// if(maas > 20000) {
//     krediTalepMiktarı = Math.round(krediTalepMiktarı * 1.2);
//     console.log(`Verilebilecek Tutar: ${krediTalepMiktarı}`);
// }else {
//     console.log("Uzgunuz kredi talebiniz maaşınıza uygun değildir");
// }


// let bolum = (prompt("Lütfen mezun olduğunuz bolumu giriniz")).toLowerCase();
// const uygunBolumler = ["Psikoloji", "PDR", "Sosyal Hizmet", "Hemşirelik", "Çocuk Gelişimi"];
// let eslesme = true
// for( let i = 0; i < uygunBolumler.length; i++){
//     if(bolum == uygunBolumler[i].toLowerCase()){
//         eslesme = true 
//         console.log("Oyun Terapisi Eğitimini alabilirsiniz");
//         break    
//     } else {
//       eslesme = false
//     console.log("Uzgunuz mezun olduğunuz bolum eğitim icin gerekli bolumler içerisinde değil");
//     }
// }

//! İkinci Çözüm
// const bolum = prompt("Lütfen mezun olduğunuz bolumu giriniz").toLowerCase();
// const uygunBolumler = ["Psikoloji", "PDR", "Sosyal Hizmet", "Hemşirelik", "Çocuk Gelişimi"];
// let sonuç = true
// for(let i=0; i < uygunBolumler.length; i++){
//     if(bolum == uygunBolumler[i].toLowerCase()){
//         sonuç=true
//         break
//     } else {
//         sonuç = false
//     }
// }
// console.log(sonuç ? "Oyun Terapisi Eğitimini alabilirsiniz" :"Uzgunuz mezun olduğunuz bolum eğitim icin gerekli bolumler içerisinde değil");

// //? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
// //? for dongulerini kullanarak yaziniz.
// const sayi = prompt("Lutfen bir sayi giriniz");
// let girilenSayi = sayi;
// for(i=0; girilenSayi[i]; i++){
//     if(girilensayi/girilenSayi == 0){
//         console.log(``)
//     }
// }

// İki farklı dizinin ortak elemanlarını bulan bir JavaScript programı nasıl yazılır?
// const arr1 = [1,2,3,4,5]
// const arr2 = [4,5,6,7,8]
// let same = []
// for (let i = 0; i < arr1.length; i++) {
//     // let isSame = arr1[i]
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] ==arr2[j]) {
//             same.push(arr1[i])
//         }
//     }
// }
// console.log(same);


// //! İkinci Çözüm
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// const result= arr1.filter((num,i)=>{
//     if(arr1.includes(arr2[i])){
//      console.log(arr2[i]);

//     }
// })

// 1- İç içe for döngüsü kurarak çarpım tablosunu yazdırma
// 2- Armstrong sayı hesaplama (Basamaklarının küpleri toplamı kendisine eşit olan sayılara Armstrong sayı denir .)
// 3-Promp ile kullanıcıdan sayı istenecek. Daha sonra while döngüsüyle bu sayının 0'dan küçük olması veya 100'den büyük olması durumunda yeniden sayı istenecek. Kullanıcı 0-100 arasında sayı girene kadar döngü devam edecek.
// 4-Klavyeden Q vey q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde 0 ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.
// 5- Döngüler ile login check yapma. (Kullanıcı önce id girer, id yanlış ise tekrar id girilmesi istenir, id doğru ise parola istenir, parola için de aynı döngü devam eder. doğru bilmek için 3 hakkı vardır)



// let cat = { name: 'Athena' };
// function swap(feline) {
// feline.name = 'Wild';
// feline = { name: 'Tabby' };
// }
// swap(cat);
// console.log(cat.name);

// const myFunc = () => {
//     const a = 2;
//     return () => console.log('a is ' + a);
//     };
//     const a = 1;
//     const test = myFunc();
//     test();
    

//     const obj1 = { first: 20, second: 30, first: 50 };
// console.log(obj1);

// function sum(num1, num2 = 2, num3 = 3) {
//   return num1 + num2 + num3;
//   }
//   let values = [1, 5];
//   let total = sum(4, ...values);
  


// const textArea = document.getElementById("textarea");
// const btn = document.getElementById("btn")

// function countVowels(){
//   const sentence = textArea.value.toLowerCase();
//   const vowels =["a","e","ı","i","o","ö","u","ü"]
//   let count = 0
//   for(const letter of sentence){
//     if (vowels.includes(letter)){
//       count++;
//     }
//   }
//   document.getElementById("result").innerHTML = `There are ${count} vowels in ${sentence}`
// }
// btn.onclick = countVowels;


// let daltones = ['joe', 'Jack', 'Willam', 'Averell']
// daltones.shift()
// daltones.pop()
// console.log(daltones)

// let daltones = ['joe', 'Jack', 'Willam', 'Averell']
// for(let i =0; i< daltones.length; i++){
// if(i == 1){
// continue;
// }
// console.log(daltones[i]);
// }


// let avengers = ['Iron Man', 'Captain America', 'Black Widow', 'Hulk']
// console.log(avengers.splice(2,1,'Thor', 'Hawkeye'));

// let fullStack = {
//   languages: ["JavaScript", "React", "HTML"],
//   jira: true,
//   gitHub: true,
//   difficulty: 8,
//   }
// console.log(Object.keys(fullStack));
// let dön = fullStack.languages; 
// for(i = 0; i < dön.length; i++){
//   console.log(dön[i])
// } 


const myCar = {
  make : 'ford',
  model : 'Mustang',
  year : 1965,
  color : 'Black'
  }
let carAge = myCar.year
let today = new Date()
let age = today.getFullYear() - carAge
console.log(age)
