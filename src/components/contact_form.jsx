import React, { useRef } from 'react'
import {STATUS} from '../models/status.enum'
import {Contact} from '../models/contact.class'
import PropTypes from 'prop-types'

export default function ContactForm({add}) {
    const nameRef = useRef('')
    const statusRef = useRef(STATUS.ONLINE)
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(statusRef.current.value)
        add(new Contact(nameRef.current.value, statusRef.current.value))
    }} style={{ display:'grid', flexDirection:'column', rowGap:'10px' }}>
        <input id='inputName' ref={nameRef} type={'text'} placeholder={'Name of Contact'} required autoFocus />
        <select id='selectStatus' ref={statusRef}>
            <option value={STATUS.ONLINE}>OnLine</option>
            <option value={STATUS.OFFLINE}>OffLine</option>
        </select>
        <button type='submit'>Add Contact</button>
    </form>
  )
}

ContactForm.proptype = {
    add: PropTypes.func.isRequired
}