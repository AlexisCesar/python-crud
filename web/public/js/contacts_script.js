function showAlert() {
    alert('function called!')
}

let myTable = document.getElementById("contactTable");

for (let i = 0; i < 10; i++) {
    let myRow = myTable.insertRow(-1);

    let cell = myRow.insertCell(0);
    cell.appendChild(document.createTextNode("Test Contact"));

    cell = myRow.insertCell(1);
    cell.appendChild(document.createTextNode("test-email.com"));

    cell = myRow.insertCell(2);
    cell.appendChild(document.createTextNode("blocked"));

    cell = myRow.insertCell(3);
    cell.appendChild(document.createTextNode("UPDATE | DELETE | BLOCK"));
}