// const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

// const isimler = ['sezer', 'ali', 'hasan', 'ayse'];

// const ogrenciler = [
//     {id : 12, isim : "sezer", yas : 30},
//     {id : 22, isim : "hasan", yas : 15},
//     {id : 32, isim : "fatma", yas : 55},
//     {id : 13, isim : "nuriye", yas : 19},
//     {id : 92, isim : "kemal", yas : 45},
//     {id : 15, isim : "mustafa", yas : 75},
//     {id : 44, isim : "ceren", yas : 30}
// ];

// let a = sayilar.shift();
// console.log(a)
// console.log(sayilar);

// let b = isimler.shift();
// console.log(b);
// console.log(isimler);

// let c = ogrenciler.shift()
// console.log(c);
// console.log(ogrenciler);

// let d = sayilar.unshift(100);
// console.log(d);

// let e = isimler.unshift('Noah');
// console.log(e);
// console.log(isimler);

// let f = ogrenciler.unshift({id:34, isim:"zeynep", yas: 54});
// console.log(e);
// console.log(ogrenciler);

// let g = sayilar.pop();
// console.log(g);
// console.log(sayilar);

// let h = isimler.pop();
// console.log(h);
// console.log(isimler);

// let ı = ogrenciler.pop();
// console.log(ı);
// console.log(ogrenciler);

// let i = sayilar.push(9);
// console.log(i);
// console.log(sayilar);

// let j = isimler.push("Okan");
// console.log(j);
// console.log(isimler);

// let k = ogrenciler.push({id: 57, isim: Number, yas: 23});
// console.log(k);
// console.log(ogrenciler);

// let l = sayilar.slice(1,5);
// console.log(l);
// console.log(sayilar);

// let m = isimler.slice(1,3);
// console.log(m);
// console.log(isimler);

// let n = sayilar.splice(2,4);
// console.log(n);
// console.log(sayilar);

// let o = sayilar.splice(3,0,100,200);
// console.log(o);
// console.log(sayilar)

// let p = ogrenciler.find((item) => item.id === 32);
// console.log(p);
// console.log(ogrenciler);

// let r = ogrenciler.find((y) => y.isim === "mustafa");
// console.log(r);
// console.log(ogrenciler);

// let s = sayilar.every((item) => item < 85);
// console.log(s);
// console.log(sayilar);

// let t = sayilar.some((item) => item < 10);
// console.log(t);
// console.log(sayilar);


// let u = isimler.includes('ali');
// console.log(u);
// console.log(isimler);

// let v = sayilar.forEach((sayi) => console.log(sayi * 2));
// console.log(sayilar);


// let y = ogrenciler.filter((ogr) => ogr.id % 2 === 1);
// console.log(y);
// console.log(ogrenciler);

// let yas = ogrenciler.filter((y) => y.yas > 30);
// console.log(yas);
// console.log(ogrenciler);

// let odd = ogrenciler.filter((o) => o.yas > 20 && o.yas < 50);
// console.log(odd);
// console.log(ogrenciler);


// let z = sayilar.concat(isimler);
// console.log(z);

// let q = sayilar.map((item) => item * 3);
// console.log(q);
// console.log(sayilar);



const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const isimler = ['sezer', 'ali', 'hasan', 'ayse'];

const ogrenciler = [
    {id : 12, isim : "sezer", yas : 30},
    {id : 22, isim : "hasan", yas : 15},
    {id : 32, isim : "fatma", yas : 55},
    {id : 13, isim : "nuriye", yas : 19},
    {id : 92, isim : "kemal", yas : 45},
    {id : 15, isim : "mustafa", yas : 75},
    {id : 44, isim : "ceren", yas : 30}
];


// let a = Array.of(5,2)
let a1 = Array.of(5)
let b1 = Array.of(sayilar, 5)
console.log(a1)
console.log(b1)

let c1 = isimler.toString()
console.log(c1)
console.log(isimler)

let d1 = isimler.join()
let d2 = isimler.join(" ")
let d3 = isimler.join("-")
console.log(d3)
console.log(d2)
console.log(d1)
console.log(isimler)


let e1 = sayilar.sort()
console.log(e1)
console.log(sayilar)

let e2 = sayilar.sort((a,b) => a-b)
console.log(e2)

let e3 = sayilar.sort((a,b) => b-a)
console.log(e3)

let e4 = isimler.sort()
console.log(e4)

let e5 = isimler.sort().reverse()
console.log(e5)


let f1 = sayilar.reverse()
console.log(f1)
console.log(sayilar)


let g1 = sayilar.reduce((a,b) => (a*b), 1)
console.log(g1)
let g2 = sayilar.reduce((a,b) => (a + b), 0)
console.log(g2)

let g3 = ogrenciler.map((x) => x.yas).reduce((x,y)=> x+y) / (ogrenciler.length)
console.log(g3);

// let g4 = ogrenciler.reduce((i.v) => i + v.yas, 0)
// let yas = ogrenciler.reduce((i, v) => i + v.yas,0);
// console.log(yas);


// const tam = ogrenciler2
//   .filter((x) => x.id % 2 === 0 && x.yas > 40)
//   .reduce((x, y) => x + y.maas, 0);
// console.log(tam);

//const maas2 = ogrenciler2.filter((x)=>x.yas >=40 && x.id %2==0).map((m)=>`${m.isim.padEnd(10, " ")} = ${m.maas}`); //padEnd arada boşluk bırakır

// console.log(maas2.join("\n"));

