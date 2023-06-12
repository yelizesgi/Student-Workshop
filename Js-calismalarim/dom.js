// Delete button 

const deleteButton = document.querySelector("#del-btn")
const input = document.querySelector("#input")
deleteButton.addEventListener("click", () => {
  ul.children.length === 0 ?
    alert("There is no comment to delete") :
    ul.removeChild(ul.lastElementChild);
  input.focus();
});

input.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "Delete") {
    deleteButton.click();
  }
});


// Delete button 

const deleteButton = document.querySelector("#del-btn")
const input = document.querySelector("#input")
deleteButton.addEventListener("click", () => {
  ul.children.length === 0 ?
    alert("There is no comment to delete") :
    ul.removeChild(ul.lastElementChild);
  input.focus();
});

input.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "Delete") {
    deleteButton.click();
  }
});

<section class="add-item">
        <h2>ADD NEW ITEM</h2>
        <input id="input" type="text" name="languages" />
        <input id="btn" type="button" value="ADD" />
        <input id="del-btn" type="button" value="DELETE" />
      </section>