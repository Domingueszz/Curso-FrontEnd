import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Item 1", "Item 2", "Item 3"])

    const [users, setUsers] = useState([
        {id:1, name:"Pablo", age:20},
        {id:1, name:"Domingues", age:22},
        {id:1, name:"Sanches", age:25}        
    ])
    
    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) =>
        prevUsers.filter((user) => randomNumber !== user.id)
        );
    };

  return (
    <div>
      <ul>
        {list.map((item) => (
            <li>{item}</li>            
        )) }
      </ul>

      <ul>
        {users.map((user) =>(
            <li key={user.id}>
                {user.name} - {user.age} anos
            </li>
        ))}
      </ul>

      {/* Previus State */}
      <button onClick={deleteRandom}>Delete rendom user</button>
    </div>
  )
}

export default ListRender
