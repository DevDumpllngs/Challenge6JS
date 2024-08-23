document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-button");
    const itemInput = document.getElementById("item-input");
    const shoppingList = document.getElementById("shopping-list");

    addButton.addEventListener("click", addItem);
    itemInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addItem();
        }
    });

    function addItem() {
        const itemValue = itemInput.value.trim();

        if (itemValue !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = itemValue;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("delete");
            deleteButton.addEventListener("click", () => {
                shoppingList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            shoppingList.appendChild(listItem);
            itemInput.value = "";
        }
    }
});
