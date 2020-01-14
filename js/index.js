const DOMstrings = {
    inputItem: document.querySelector('.input__item'),
    inputItemForm: document.querySelector('form.add__item'),
    groceryList: document.querySelector('#grocery__list'),
    trashButton: document.querySelector('.fa-trash-alt')

}

// Create an empty array
const itemList = [];

// Add item to itemList and UI
const addItem = input => {
    input = DOMstrings.inputItem.value;
    if (input.length > 0) {
        itemList.push(input);
        displayItems();
        clearInput();
    }
};

// Delete item from itemList and UI
const deleteItem = (e) => {
    // get index of item clicked on
    for (var i = 0, len = DOMstrings.groceryList.children.length; i < len; i++) {
        (function (index) {
            DOMstrings.groceryList.children[i].childNodes[1].onclick = function () {
                itemList.splice(index, 1);
                displayItems();
            }
        })(i);
    }
}

// Clear inputfield
const clearInput = () => {
    DOMstrings.inputItem.value = '';
};

// Display items in list
const displayItems = () => {
    DOMstrings.groceryList.innerHTML = '';
    itemList.forEach((el, i) => {
        const markup = `
        <li class="list-item">${el}<i class="fas fa-trash-alt" title="click to delete item"></i></li>
        `;
        DOMstrings.groceryList.insertAdjacentHTML('beforeend', markup);
    });
};

DOMstrings.inputItemForm.addEventListener('submit', addItem);
DOMstrings.groceryList.addEventListener('click', deleteItem);