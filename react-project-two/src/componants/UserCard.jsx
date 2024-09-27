import React from 'react'
import Govind from '../comonants/Govind.jpeg'
import './UserCard.css'

const UserCard = () => {
  return (
    <div className='user_container'>
      <p id='user_name'>Govind Jaiswal</p>
      <img id='user_image' src={Govind} alt="Govind" />
      <p id='user_desc'>Description:- Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default UserCard
