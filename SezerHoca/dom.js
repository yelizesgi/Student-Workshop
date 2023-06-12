// const myHeader = document.getElementById("header")

// myHeader.style.color = "red"

// myHeader.style.backgroundColor = "beige"

// const button = document.getElementById("btn")
// button.style.backgroundColor = "hotpink"
// button.style.color = "blueviolet"
// button.style.padding = "6px"

// const list = document.getElementsByTagName("li")
// // console.log(list)
// list[0].style.color = "#bebe"
// list[list.length - 1].style.color = "darkgrey"

// list[3].textContent = "C++"
// console.log(list[2].textContent)
// console.log(list[2].innerHTML)

// list[4].innerHTML += "<li>Java</li>"


const itemList = document.getElementsByClassName("list")
// console.log(itemList)

// const itemListArr = Array.from(itemList)//yukarda array imsi idi burda tam bir array yaptık
// itemListArr.forEach((item) => console.log(item.textContent))
// itemListArr.forEach((item) => console.log(item.style.color = `brown`))


// HTML COLLECTİON => array

// const itemListSpread = [...itemList]
// // console.log(itemListSpread)

// itemListSpread.map((i) => console.log(i.style.color = `darkblue`))


// document.querySelector("li")//tag
// document.querySelector(".add-item")//class
// document.querySelector("#btn")//id

// const lists = document.querySelectorAll("ul li")
// lists.forEach((li) => console.log(li.innerText))


// const list = document.querySelector("li")
// console.log(list.parentElement)//yukarı traversing

// console.log(list.parentNode)//yukarı traversing

// console.log(list.closest("section"))//en yakın section a götürür kısa yol

// const addItem = document.querySelector(".add-item")
// console.log(addItem.children)//asagı yonde traversing parent----->child firstElementChild ilk child, lastElementChild son eleman-child
// addItem.children[0].style.color = "pink"
// addItem.children[1].style.backgroundColor = "pink"


// const ul = document.querySelector("ul")

// const ulChild = ul.children
// console.log(ulChild)

// const js = ulChild[2]
// const a = js.previousElemntSibling//kardeşler arası yukarı yönde sibling e.target(secilen alanı yakalamada kullanılır) ile çok kullanılır
// console.log(a)

// const b = js.nextElementSibling//kardesler arasında asagı yonde sibling
// console.log(b)

// //!CreateNode
// const newP = document.createElement("p")//tag oluştur
// const text = document.createTextNode("Merhaba deneme")//tag icerigi oluşturdu

// newP.appendChild(text)//p tagina baglandı
// const h2 = document.querySelector(".item-list h2")//olusturulan p tagı ni konumlandırmak icin eleman secildi
// // h2.after(newP)//secilen elementin asagisina yerleşir
// // h2.before(newP)//secilen elementin yukarisina yerlesir
// // newP.id = "new-p"
// // newP.className = "new-par"
// //?2 yontem id class
// newP.setAttribute("id", "new-p")
// newP.setAttribute("class", "new-par")

// newP.classList.add("bg-primary", "border-3")//class ekleme
// newP.classList.remove("border-3")//class silme

// if(newP.classList.contains("bg-primary")){
//     console.log("aaaaaaa")
// }else{
//     newP.classList.add("deneme")
// }

// newP.classList.toggle("white")//toggle() içerik varsa sil yoksa ekle

// console.log(newP.getAttribute("class"))
// console.log(newP.getAttribute("id"))
// console.log(newP.getAttribute("name"))
// console.log(newP.getAttribute("type"))



// console.log(newP)

const input = document.getElementById("input")
console.log(input.value)











