/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/

import contactsArr from './contactsData.js'

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

function renderContact(contactObj) {
    console.log(contactObj)
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    
    let name = document.createElement("p")
    name.textContent = contactObj.name
    contactCard.appendChild(name)
    
    let email = document.createElement("p")
    email.textContent = contactObj.email
    contactCard.appendChild(email)
    
    let phone = document.createElement("p")
    phone.textContent = contactObj.phone
    contactCard.appendChild(phone)
    
    contactDisplay.appendChild(contactCard)
    
/*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
}

function searchContact(e) {
    contactDisplay.replaceChildren()
    let contactName = e.target.value
    for (let i = 0; i < contactsArr.length; i++){
        
        if (contactsArr[i].name.toLowerCase().includes(contactName)) {
            renderContact(contactsArr[i])
        }
    }
}

patternSearchInput.addEventListener('input', searchContact)
patternSearchSubmit.addEventListener('submit', searchContact)
