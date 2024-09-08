import { useState } from 'react';
import React from 'react'


const initialFormValues = {fullName: "", phoneNumber: ""};

function Form({addContacts,contacts}) {
    const [form, setForm] = useState(initialFormValues);


    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : [e.target.value] })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullName === '' || form.phoneNumber === '' ){
            return false;
        }
        addContacts([...contacts, form])
        setForm(initialFormValues)
    }

  return (
    <form className='form' onSubmit={onSubmit}>
        <div><input name="fullName" placeholder='Full Name' onChange={onChangeInput} value={form.fullName}/></div>
        
        <div><input name="phoneNumber" placeholder='Phone Number' onChange={onChangeInput} value={form.phoneNumber}/></div>
        <div className='btn'><button >Add</button></div>
    </form>
  )
}

export default Form;