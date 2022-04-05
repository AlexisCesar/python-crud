window.onload = function() {
    const userAction = async () => {
        document.getElementById('loading').style.visibility = 'visible';
        const response = await fetch('http://localhost:5566/me/contacts');
        const receivedContacts = await response.json();
        if(receivedContacts != undefined) {
            populateContactTable(receivedContacts);
        }
        document.getElementById('loading').style.visibility = 'hidden';
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
        cell.appendChild(document.createTextNode(jsonObject[i].BirthDate));

        cell = myRow.insertCell(3);
        cell.appendChild(document.createTextNode(jsonObject[i].Blocked ? "Blocked" : "Unblocked"));

        cell = myRow.insertCell(4);

        let updateButton = document.createElement("button");
        updateButton.innerHTML = "Update";
        updateButton.value = jsonObject[i].Id;
        updateButton.onclick = function () {
            window.location.href = `/contacts/update?id=${updateButton.value}`
        };
        updateButton.setAttribute("class", "btn btn-primary");
        cell.appendChild(updateButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            if(confirm(`Do you really want to delete this contact?\nContact: ${jsonObject[i].FirstName} ${jsonObject[i].LastName}`))
            {
                let contactId =  updateButton.value;
                fetch(`http://localhost:5566/me/contacts/contact?id=${contactId}`, {
                    method: "DELETE",
                    headers: {'Content-Type': 'application/json'}
                }).then(res => {
                    window.location.reload();
                }).catch(x => {
                    alert("An error occured during contact exclusion!");
                });
            }
        };
        deleteButton.setAttribute("class", "btn btn-primary ms-2");
        cell.appendChild(deleteButton);
    }
}