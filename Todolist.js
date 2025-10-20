const list = document.querySelector(".list");
const input = document.querySelector("input");
const button = document.querySelector(".create-btn");

let content = "";

const listItem = (content) => {
  return `<div class= "item"> ${content}
  <button class="delete-btn">Delete</button></div>`;
};
button.addEventListener("click", () => {
  const value = input.value;
  content += listItem(value);
  list.innerHTML = content;
});
