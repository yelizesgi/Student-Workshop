const deneme = document.getElementById("body")
console.log(deneme)

deneme.style.backgroundColor = "#fef"

const test = document.getElementById("cont1")
console.log(test)

test.style.textAlign = "center"
test.style.listStyleType = "none"

//*h1
const h1 = document.getElementById("h1")
console.log(h1)
h1.textContent = "DOM Introduction"
console.log(h1.textContent)

//*GETELEMENTBYTAGENAME*//

const myDiv = document.getElementsByTagName("h2")
console.log(myDiv)
console.log(document.getElementsByTagName("h2")[0])
const myDivArr = [...myDiv]
myDivArr.forEach((h2) => (h2.style.fontSize = "1rem")) 

//*GETELEMENTBYCLASSNAME()*//

const project = document.getElementsByClassName("list2")
console.log(project)
project.textContent = `<h2>MYPROJECT</h2>`

const traversing = document.querySelector(".container1")
console.log(traversing)
console.log(traversing.parentElement)
console.log(traversing.parentNode)
console.log(traversing.firstChild)

const sibling = traversing.previousElementSibling.nextElementSibling
console.log(sibling.innerHTML)

const createP = document.querySelector("h2")//seç//
const newP = document.createElement("p")//oluştur//
const text = document.createTextNode(createP.value)//text tabanlı ise text düğümünü oluştur//
newP.appendChild(text)//text dugumunu yeni oluşturulan elemente bagla//
// console.log(newP)
const body = document.querySelector("body")//Dom tree ye bağlanacak elemnti seç//
body.appendChild(newP)//body nin en sonuna ekler

//newP elementine id ve class ekleme//
newP.setAttribute("id", "new-id")
newP.setAttribute("class", "new-class")
newP.setAttribute("name", "new-class")

newP.classList.add("bg-primary", "border")//add ekleme

if(newP.classList.contains("border")){
    newP.classList.add("border-success", "border-4")
}

if(newP.classList.contains("new-class")){
    newP.classList.remove("new-class")
}//contains() output true-false parantez içerisindeki varsa-yoksa//

newP.classList.toggle("bg-danger")//toggle() parantez içerisindeki varsa siler yoksa ekler//

//INNERHTML

const ul = document.querySelector("ul")

ul.innerHTML +=`
<h2 class="par-center">Languages</h2>
<li>C++</li>
<li>java</li>
<li>C</li>
`

//Events//
const eventDiv = document.querySelector(".container2")

eventDiv.onmouseover = function (){
    eventDiv.style.backgroundColor = "hotpink"
}

const color = [, "#3C9EE7", "#E7993C",
			"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".container3").addEventListener(
	"mouseover", function () {

		document.querySelector(".container3").style.background
			= color[(Math.floor(Math.random() * color.length))];
	})

const eventEkle = document.querySelector(".container1")
eventEkle.addEventListener("mouseover", function(){
    eventEkle.style.fontSize = "2rem"
})







