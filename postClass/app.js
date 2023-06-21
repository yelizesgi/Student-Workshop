console.log("***HELLO OOP****")


const kuramlar = {
    title : "BDT",
    instructor : "Hakan Türkçapar",
    year: 2023,
    baslangic: function (){
        return `${this.title} eğitimi ${this.instructor} tarafından ${this.year} yilinda planlanmaktadir.`
    }

}

console.log(kuramlar)
console.log(kuramlar.baslangic())

console.log("*****CLASSESS****")

class Kuramlar {
    constructor(title,instructor,year){
        this.title = title
        this.instructor = instructor
        this.year = year
    }
    baslangic() {
        return `${this.title} eğitimi ${this.instructor} tarafından ${this.year} yilinda planlanmaktadir.`
    }
    // Fiyat(para) {
    //     const kdv = 1.1
    //     this.kdv = Math.trunc(para * kdv)
    // }
    Fiyat(para, kdv=1.2){
        this.para = para * kdv
    }
    baslangicAta(){
        return super.baslangic()
    }
}

const kuramlar1 = new Kuramlar("Masal Terapisi", "İ.Bengü Aksekili", "2024")
console.log(kuramlar1)
console.log(kuramlar1.baslangic())

//*Sub-Class
class ekoller extends Kuramlar{
    constructor(title,instructor,year,month){
        super(title,instructor,year)
        this.month = month
    }
    baslangic() {
        return `${this.title} eğitimi ${this.instructor} tarafından ${this.year} yilinin ${this.month} ayında planlanmaktadir.`
    }
}

//!Overrided(içerik değişikliği)
const ekol = new ekoller("Kısa Süreli Çözüm Odaklı Terapi", "Pınar Hocaoğlu", "2023", "Ağustos")
console.log(ekol)
console.log(ekol.baslangic())

//!Overloading(Parametre de değişiklik)
ekol.Fiyat(250)
console.log(ekol)

const ekol2 = new Kuramlar("Çatışma Çözme Becerileri", "Fatih Kılıçarslan", 2023, "Eylül")
ekol2.Fiyat(90,1.5)
console.log(ekol2)


