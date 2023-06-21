console.log("***Welcome my modules***")
export const DERS_SAATİ = 30
export let sinif = 12

let sayac = 0
export const cogalt = (sinif){
    sayac += sinif
    return sayac
}

export const kisitla = (sinif){
    sayac -= sinif
    return sayac
}


export default function(){
    alert("Deneme Modules")
}