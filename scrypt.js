
const list = document.querySelector(".hero__content-list");

let selectedItem;

list.onclick = function(event) {
  let listItem = event.target.closest('.hero__content-list-item-content');

  if (!listItem) return;

  if (!list.contains(listItem)) return;

  highlight(listItem);
};

function highlight(listItem) {
  if (selectedItem) {
    selectedItem.classList.remove('highlight');
  }
  selectedItem = listItem;
  selectedItem.classList.add('highlight');
}


const items = document.querySelectorAll(".hero__content-list-item");

items.forEach((item) => {
    item.addEventListener("click", openItem);
});

function openItem(e){
    let currentItem = e.target.closest(".hero__content-list-item-content-img");
    let currentContent = e.target.parentElement.nextElementSibling;
    currentItem.classList.toggle("active");
    if (currentItem.classList.contains("active")){
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    }else{
        currentContent.style.maxHeight = 0;
    }
}