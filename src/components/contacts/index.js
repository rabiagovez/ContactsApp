import {useEffect, useState} from 'react'
import List from './List'
import Form from './Form'
import './style.css'

function Contacts() {

    const [contacts, setContacts] = useState([
        {fullName:"Selin",
            phoneNumber:"0123456789"
        },
        {fullName:"Leyla",
            phoneNumber:"9876543210"
        },
        {fullName:"Nazlı",
            phoneNumber:"8640297531"
        }
    ]) 

    useEffect(()=>{
        console.log(contacts)
    },[contacts]);
  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}


export default Contacts