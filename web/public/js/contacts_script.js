let myTable = document.getElementById("contactTable");

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
    updateButton.onclick = function () {
        alert("Update function called.");
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