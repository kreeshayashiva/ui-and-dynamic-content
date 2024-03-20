var itemInput = document.getElementById("item");
var addBtn= document.getElementById("add-button");
var errorMessage= document.getElementById("feedback");
var itemList= document.getElementById("item-list");

function addItem(){

    var listItem= document.createElement("li");
    
    if(itemInput.value.trim() !== ""){
        listItem.textContent = itemInput.value;
        itemList.appendChild(listItem);
        errorMessage.textContent="";
        itemInput.value="";
        itemInput.focus();
    }
    else{
        errorMessage.textContent= "Please add a list item!";
    }
}

addBtn.addEventListener("click", addItem);