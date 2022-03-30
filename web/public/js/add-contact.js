function submitFormData() {
    let newContact = {};
    newContact.FirstName = document.getElementById('firstName').value;
    newContact.LastName = document.getElementById('lastName').value;
    newContact.Email = document.getElementById('email').value;
    newContact.BirthDate = document.getElementById('birthDate').value;
    newContact.Blocked = document.getElementById('blocked').checked ? true : false;
    if(dataIsValid(newContact)) {
        document.getElementById('invalidData').style.visibility = 'hidden';

        if(emailIsValid(newContact.Email)) {
            document.getElementById('invalidEmail').style.visibility = 'hidden';
            console.log('DATA IS VALID, SENDING REQUEST...');
            insertContactOnDatabase(newContact);
            return;
        }
        
        document.getElementById('invalidEmail').style.visibility = 'visible';
        return;
    }
    console.log('DATA IS INVALID');
    document.getElementById('invalidData').style.visibility = 'visible';
}

function dataIsValid(dataObject) {
    if(dataObject.FirstName == '') return false;
    if(dataObject.LastName == '') return false;
    if(dataObject.Email == '') return false;
    if(dataObject.BirthDate == '') return false;

    return true;
}

function emailIsValid(email) {
    if(/^[A-z0-9]+@[A-z0-9]+\.com\.?([a-z]+)?$/.test(email) == false) return false;
    return true;
}

function insertContactOnDatabase(contact) {
    fetch("http://localhost:5566/me/contacts", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contact)
    }).then(res => {
        window.location.href = '/contacts';
    }).catch(x => {
        document.getElementById('apiError').style.visibility = 'visible';
    });
    
}