import React from 'react'
import './PeopleList.css'

const PeopleList = ({people}) =>{
  return (
    <ul>
      {people.map(({first_name, last_name, email}, i) => (
        <li key={i}>
          <h1>{first_name} {last_name}</h1>
          <h2>{email}</h2>
          <p>λ</p>
        </li>
      ))}
    </ul>
  )
}

export default PeopleList
