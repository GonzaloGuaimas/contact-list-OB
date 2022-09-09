import React from 'react'
import PropTypes from 'prop-types'
import {Contact} from '../models/contact.class'
import {STATUS} from '../models/status.enum'

export default function ContactComponent({contact, status, remove}) {

    function contactStatus(){
        if(contact.status===STATUS.OFFLINE){
            return <h5 style={{backgroundColor:'red'}} onClick={()=>status(contact)}>{STATUS.OFFLINE}</h5>
        }else{
            return <h5 style={{backgroundColor:'green'}} onClick={()=>status(contact)}>{STATUS.ONLINE}</h5>
        }
    }
  return (
    <tr>
        <th><h4>{contact.name}</h4></th>
        <th>|</th>
        <th>{contactStatus()}</th>
        <th>|</th>
        <th><button style={{backgroundColor:'red', color:'white'}} onClick={()=>remove(contact)}>BORRAR</button></th>
    </tr>
  )
}

ContactComponent.prototypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    status: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired 
}
