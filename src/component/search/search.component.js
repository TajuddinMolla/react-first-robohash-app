import React from 'react'
import './search-component.style.css'
export default function Search({handleMethod}) {
    return (
        <div>
            <input className='search' type='search' placeholder='Sreach Users' onChange={handleMethod} />
        </div>
    )
}
