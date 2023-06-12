let btn = document.querySelector("button");
let inpt = document.querySelector("input");
btn.addEventListener("click", countVowels);
inpt.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btn.click();
  }
});
function countVowels() {
  let inputValue = inpt.value;
  if (inputValue != "") {
    let vowels = "aeiou";
    let vowelSum = 0;
    for (i of inputValue.toLowerCase()) {
      if (vowels.includes(i)) {
        vowelSum++;
      } else continue;
    }
    document.querySelector(
      ".alert"
    ).innerText = `There are ${vowelSum} vowels in the string of ${inputValue}`;
    inpt.value = "";
  } else {
    document.querySelector(".alert").innerText = "You must enter a text";
  }
}
