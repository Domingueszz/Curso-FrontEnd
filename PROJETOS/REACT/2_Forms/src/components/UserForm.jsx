import React from 'react'

const UserForm = () => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input 
        type="text"
        name="text"
        id='name'
        placeholder='Digite o sue nome:'
        required 
      />
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input 
        type="text"
        name="text"
        id='email'
        placeholder='Digite o sue e-mail:'
        required 
      />
      </div>
    </div>
  )
}

export default UserForm
