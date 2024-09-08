import {useState} from 'react'

function List({contacts}) {
    const [filterText, setFilterText] = useState('')
    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=> {
         return   item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase());
        })
    })
    console.log(filtered)
  return (
    <div>
        <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
        <ul className='list'>
            {filtered.map((contact,index) => (
                <li className='contacts-li
                ' key={index}>
                <span>{contact.fullName}</span>
                <span>{contact.phoneNumber}</span></li>
            ))}
        </ul>
        <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List