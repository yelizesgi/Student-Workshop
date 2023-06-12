// 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)

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



//!--------------------------------------------//
// 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

// console.log(calFahrenheit(30)) // output: 86




// 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh




// 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?
// const string = 'selles'
// console.log(isPalindrome(string)) // output: true




// 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?(includes)
// console.log(findVowels('hello world')) // output: eoo




// 5- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) // output: 28






// 6- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
// console.log(isPrime(7)) // output: true





// 7- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.
// console.log(factorial(5)) // output: 120




// 8- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.
// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 9




// 9- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 45





// 10-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// console.log(findWordCount('hello world')) // output: 2





// 11- Girilen bir sayının pozitif çarpanlarını bulan bir fonksiyon yazınız
// console.log(findPositiveDivisors(12)) // output: [1, 2, 3, 4, 6, 12]


//!--------------------------------------------------------//
const carData = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      color: 'Silver',
      mileage: 25000,
      engine: {
        type: "V6",
        horsepower: 300,
        cylinders: 6
      }
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Accord',
      year: 2019,
      color: 'White',
      mileage: 20000,
      engine: {
        type: "V4",
        horsepower: 140,
        cylinders: 4
      }
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2018,
      color: 'Red',
      mileage: 15000,
      engine: {
        type: "V8",
        horsepower: 400,
        cylinders: 8
      }
    },
    {
      id: 4,
      make: 'Chevrolet',
      model: 'Camaro',
      year: 2017,
      color: 'Black',
      mileage: 10000,
       engine: {
        type: "V4",
        horsepower: 200,
        cylinders: 4
      }
    },
    {
      id: 5,
      make: 'Dodge',
      model: 'Challenger',
      year: 2016,
      color: 'Blue',
      mileage: 5000,
       engine: {
        type: "V6",
        horsepower: 250,
        cylinders: 6
      }
    },
    {
      id: 6,
      make: 'BMW',
      model: '3 Series',
      year: 2015,
      color: 'Silver',
      mileage: 35000,
       engine: {
        type: "V8",
        horsepower: 400,
        cylinders: 8
      }
    },
    {
      id: 7,
      make: 'Audi',
      model: 'A4',
      year: 2014,
      color: 'Black',
      mileage: 30000,
       engine: {
        type: "V4",
        horsepower: 220,
        cylinders: 4
      }
    },
    {
      id: 8,
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2013,
      color: 'White',
      mileage: 25000,
       engine: {
        type: "V6",
        horsepower: 280,
        cylinders: 6
      }
    },
    {
      id: 9,
      make: 'Volkswagen',
      model: 'Golf',
      year: 2012,
      color: 'Red',
      mileage: 20000,
       engine: {
        type: "V4",
        horsepower: 180,
        cylinders: 4
      }
    },
    {
      id: 10,
      make: 'Tesla',
      model: 'Model S',
      year: 2011,
      color: 'Silver',
      mileage: 15000,
       engine: {
        type: "V4",
        horsepower: 260,
        cylinders: 4
      }
    },
  ]
  
  
  // 1- Rengi gümüş olan arabaları bir listeye ata.
  
  // let result =carData.filter((a)=>a.color =="Silver");
  // console.log(result);
  
  // 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.
  // let result =carData.filter((a)=>a.year > "2015");
  // console.log(result);
  
  // 3- Arabaların ortalama kilometre değerini hesapla.
  
  // let result =carData.reduce((top,a)=> top + a.mileage ,0);
  // console.log(result/carData.length);
  
  // 4- 8 silindirli araçları listele
  
  
  
  //! 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
  
  
  
  
  // keys = ['a', 'b', 'c', 'd']
  // values = [1, 2, 3]
  // createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
  
  
  
  
  
  
  
  //! 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
  //! Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
  //! Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.
  
  
  
  
  
  
  
  
  // ! 7-  Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.
  // ! Not: puanlar her zaman benzersiz olacaktır (bu nedenle yinelenen değerler olmayacaktır)
  
  // let dictionary = {
  //   " Turkish":45,
  //   "English":60,
  //   "German": 75
  // }
  
  // let result = [dictionary].filter((a)=> a."turkish")
  // console.log(result);
  
  
  
  // örnekler
  // {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
  // {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
  // {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
  // let results = {"Java": 10, "Ruby": 80, "Python": 95}
  
  // 8-  Soru: Bir restoranın menüsündeki yemekleri temsil eden bir nesne dizisi olduğunu düşünelim. Her yemek nesnesi, yemek adı ve fiyatı gibi özelliklere sahiptir. Bu nesne dizisini kullanarak menüdeki her yemeğin adını ve fiyatını ekrana yazdıran bir JavaScript kodu nasıl yazılır?
  
  // 9-  Bir alışveriş sepetindeki ürünlerin listesini içeren bir dizi verilmiştir. Her bir ürün bir nesne olarak temsil edilmektedir ve her bir ürünün adı, fiyatı ve stok durumu bilgilerini içermektedir. Aşağıdaki gibi bir dizi verilmiştir:
  // let sepet = [
  //   { ad: 'Kalem', fiyat: 5, stok: 10 },
  //   { ad: 'Defter', fiyat: 10, stok: 5 },
  //   { ad: 'Silgi', fiyat: 2, stok: 3 },
  //   { ad: 'Kalemtraş', fiyat: 3, stok: 2 }
  // ];
  // Bu sepetin içindeki ürünlerin fiyatlarının toplamını bulmak için hangi array methodlarını kullanırsınız?
  
  // 10  Her kitap bir nesne olarak temsil edilmekte ve kitap adı, yazarı ve yayın tarihi gibi özelliklere sahip. Bu kitap koleksiyonunu kullanarak yayın tarihi 1950'dan önce olan kitapların listesini eski tarihten başlayarak sıralayıp ekrana yazdırın?


  //!----------------**********************---------------//
  // ? 1-Sayının Pozitif veya Negatif olduğunu bulma // if else
//? 2-Sayının tek mi çift mi olduğunu bulma //if else
// ? 3-Haftanın gününü yazdırma(if else)
// ? 4-Ehliyet alabiliyor mu? // koşullar yaşın 18'den büyük olması ve araba sürmeyi bilip bilmemesi
// ? 5-Login = Kullanıcı id ve şifre kontrolü // if else
// ? 6-Login = Kullanıcı id ve şifre kontrolü(iç içe koşullar) // id doğru girerse passwordu istesin
// ? 7-Hesap makinesi yapımı if else
// ? 8-Switch case ile haftanın gününü yazdırma

//!----------------***********************-------------------//

