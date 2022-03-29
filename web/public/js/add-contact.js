function submitFormData() {
    let newContact = {};
    newContact.firstName = document.getElementById('firstName').value;
    newContact.lastName = document.getElementById('lastName').value;
    newContact.email = document.getElementById('email').value;
    newContact.blocked = document.getElementById('blocked').checked ? true : false;
    if(dataIsValid(newContact)) {
        document.getElementById('invalidData').style.visibility = 'hidden';

        if(emailIsValid(newContact.email)) {
            document.getElementById('invalidEmail').style.visibility = 'hidden';
            console.log('DATA IS VALID, SENDING REQUEST...');
            return;
        }
        
        document.getElementById('invalidEmail').style.visibility = 'visible';
        return;
    }
    console.log('DATA IS INVALID');
    document.getElementById('invalidData').style.visibility = 'visible';
}

function dataIsValid(dataObject) {
    if(dataObject.firstName == '') return false;
    if(dataObject.lastName == '') return false;
    if(dataObject.email == '') return false;

    return true;
}

function emailIsValid(email) {
    if(/^[A-z0-9]+@[A-z0-9]+\.com\.?([a-z]+)?$/.test(email) == false) return false;
    return true;
}