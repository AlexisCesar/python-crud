window.onload = function() {
    const userAction = async () => {
        const response = await fetch('http://localhost:5566/me/contacts');
        const receivedContacts = await response.json();
        if(receivedContacts != undefined) {
            populateContactTable(receivedContacts);
        }
    }

    userAction();
}

function populateContactTable(jsonObject) {
    let myTable = document.getElementById("contactTable");

    for (let i = 0; i < jsonObject.length; i++) {
        let myRow = myTable.insertRow(-1);

        let cell = myRow.insertCell(0);
        cell.appendChild(document.createTextNode(`${jsonObject[i].FirstName} ${jsonObject[i].LastName}`));

        cell = myRow.insertCell(1);
        cell.appendChild(document.createTextNode(jsonObject[i].Email));

        cell = myRow.insertCell(2);
        cell.appendChild(document.createTextNode(jsonObject[i].Blocked ? "Blocked" : "Unblocked"));

        cell = myRow.insertCell(3);

        let updateButton = document.createElement("button");
        updateButton.innerHTML = "Update";
        updateButton.value = jsonObject[i].Id;
        updateButton.onclick = function () {
            alert(`Update function called.\nUpdating contact of id: ${updateButton.value}`);
        };
        cell.appendChild(updateButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            alert("Delete function called.");
        };
        
        cell.appendChild(deleteButton);
    }
}

function addContact() {
    alert("Add contact function called.");
}