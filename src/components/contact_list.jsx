import React, { useState } from 'react'
import {Contact} from '../models/contact.class'
import {STATUS} from '../models/status.enum'
import ContactComponent from './contact'
import ContactForm from './contact_form'

export default function ContactListComponent() {
    const contact1 = new Contact('John Dere',STATUS.ONLINE)
    const contact2 = new Contact('Susan Dere',STATUS.OFFLINE)

    const [contacts, setContacts] = useState([contact1, contact2])

    function changeStatus(contact){
        const index = contacts.indexOf(contact)
        const _contacts = [...contacts]
        if(_contacts[index].status === STATUS.OFFLINE){
            _contacts[index].status = STATUS.ONLINE
        }else{
            _contacts[index].status = STATUS.OFFLINE
        }
        setContacts(_contacts)
    }
    function deleteContact(contact){
        const index = contacts.indexOf(contact)
        const _contacts = [...contacts]
        _contacts.splice(index,1)
        setContacts(_contacts)
    }
    function addContact(contact){
        const _contacts = [...contacts]
        _contacts.push(contact)
        setContacts(_contacts)
    }

  return (
    <div style={{ display:'flex',alignItems:'center', width:'80%', justifyContent:'space-around'}}>
        <div>
            <h2>CONTACT LIST</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name Contact</th>
                        <th>|</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map( (contact, index) => {
                        return (<ContactComponent contact={contact} status={changeStatus} remove={deleteContact} key={index}></ContactComponent>)
                    })}
                </tbody>
            </table>
        </div>
        <div>
            <ContactForm add={addContact} remove={deleteContact}></ContactForm>
        </div>
    </div>
  )
}
