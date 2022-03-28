window.onload = function() {
    const userAction = async () => {
        console.log("Entered.");
        const response = await fetch('http://localhost:5566/me/contacts');
        const myJson = await response.json();
        console.log("Exited.");
        alert("Received object:" + myJson);
    }

    userAction();
}


let myTable = document.getElementById("contactTable");


//Static rows - test
for (let i = 0; i < 10; i++) {
    let myRow = myTable.insertRow(-1);

    let cell = myRow.insertCell(0);
    cell.appendChild(document.createTextNode(`Test Contact #${i + 1}`));

    cell = myRow.insertCell(1);
    cell.appendChild(document.createTextNode("test-email.com"));

    cell = myRow.insertCell(2);
    cell.appendChild(document.createTextNode("blocked"));

    cell = myRow.insertCell(3);

    let updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    updateButton.value = i + 1;
    updateButton.onclick = function () {
        alert(`Update function called.\nUpdating contact #${updateButton.value}`);
    };
    cell.appendChild(updateButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function () {
        alert("Delete function called.");
    };
    cell.appendChild(deleteButton);
}

function addContact() {
    alert("Add contact function called.");
}