import React from 'react'
import './card-component.style.css'
export default function Card(props) {
    return (
        <div className='card-list'>
            {
                props.users.map((user => (
                    <div key={user.id} className='card-container'>
                        <img src={`https://robohash.org/${user.id}?set=set2&size=180x180`} />
                        <h2 >{user.name}</h2>
                        <p>{user.email}</p>
                    </div>

                )))
            }
        </div>
    )
}
