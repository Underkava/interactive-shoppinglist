
let shoppingList = [];

const addItemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const listContainer = document.getElementById('list-container');

addBtn.addEventListener('click', addNewItem);
clearBtn.addEventListener('click', clearList);

function addNewItem() {
    const newItem = addItemInput.value.trim();
    if (newItem) {
        shoppingList.push({ item: newItem});
        addItemInput.value = '';
        renderList();
    }
}

function renderList() {
    listContainer.innerHTML = '';
    shoppingList.forEach((item) => {
        const listItem = document.createElement('li');

        const itemText = document.createElement('span');
        itemText.textContent = item.item;
        if (item.purchased) {
            itemText.classList.add('purchased');
        }
        
        const markPurchasedBtn = document.createElement('button');
        markPurchasedBtn.textContent = item.purchased ? 'Unmark' : 'Mark Purchased';
        markPurchasedBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            item.purchased = !item.purchased;
            renderList();
        });

        listItem.appendChild(itemText);
        listItem.appendChild(markPurchasedBtn);
        listContainer.appendChild(listItem);
    });
}

function clearList() {
    shoppingList = [];
    renderList();
}

renderList();
