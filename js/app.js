document.addEventListener("DOMContentLoaded", function () {
    const addItemButton = document.getElementById("addItem");
    const shoppingListContainer = document.getElementById("shoppingListContainer");
    const shoppingListItemInput = document.getElementById("shoppingListItem");

    addItemButton.addEventListener("click", function () {
        const newItem = document.createElement("li");
        newItem.textContent = shoppingListItemInput.value;
        shoppingListContainer.appendChild(newItem);
        shoppingListItemInput.value = ""; 
    });
});