var contactId = null;

window.onload = function() {
    const userAction = async () => {
      const params = new Proxy(new URLSearchParams(window.location.search), {
          get: (searchParams, prop) => searchParams.get(prop)
      });

      contactId = params.id;

      const response = await fetch(`http://localhost:5566/me/contacts/contact?id=${contactId}`);
      const receivedContact = await response.json();
        if(receivedContact != undefined) {
            document.getElementById('firstName').value = receivedContact.FirstName;
            document.getElementById('lastName').value = receivedContact.LastName;
            document.getElementById('email').value = receivedContact.Email;
            document.getElementById('birthDate').value = receivedContact.BirthDate;
            receivedContact.Blocked ? (document.getElementById('blocked').checked = true) : (document.getElementById('blocked').checked = false);
        }
    }

    userAction();

    // populate fields with returned data.
}

function submitFormData() {
    let contactData = {};
    contactData.FirstName = document.getElementById('firstName').value;
    contactData.LastName = document.getElementById('lastName').value;
    contactData.Email = document.getElementById('email').value;
    contactData.BirthDate = document.getElementById('birthDate').value;
    contactData.Blocked = document.getElementById('blocked').checked ? true : false;
    if(dataIsValid(contactData)) {
        document.getElementById('invalidData').style.visibility = 'hidden';

        if(emailIsValid(contactData.Email)) {
            document.getElementById('invalidEmail').style.visibility = 'hidden';
            console.log('DATA IS VALID, SENDING REQUEST...');
            updateContactOnDatabase(contactId, contactData);
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
    if(/^[A-z0-9_.]+@[A-z0-9]+\.com\.?([a-z]+)?$/.test(email) == false) return false;
    return true;
}

function updateContactOnDatabase(contactId, contactData) {
    fetch(`http://localhost:5566/me/contacts/contact?id=${contactId}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contactData)
    }).then(res => {
        window.location.href = '/contacts';
    }).catch(x => {
        document.getElementById('apiError').style.visibility = 'visible';
    });
}
