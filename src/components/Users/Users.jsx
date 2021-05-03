import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {


 if (props.users.length ===0) {
  props.setUsers([{
       id: 1,
       photoURL: 'https://i.pinimg.com/originals/fb/69/f5/fb69f585a76222761c2c7103f386c1fb.jpg',
       followed: false,
       Name: 'Sergey',
       status: 'I am a mayor',
       location: {city: 'Minsk', country: 'Belarus'}
      },
       {
        id: 2,
        photoURL: 'https://i.pinimg.com/originals/fb/69/f5/fb69f585a76222761c2c7103f386c1fb.jpg',
        followed: true,
        Name: 'Jhon',
        status: 'I am a worker',
        location: {city: 'NY', country: 'USA'}
       },
       {
        id: 3,
        photoURL: 'https://i.pinimg.com/originals/fb/69/f5/fb69f585a76222761c2c7103f386c1fb.jpg',
        followed: false,
        Name: 'Michael',
        status: 'I am a driver',
        location: {city: 'London', country: 'UK'}
       },
       {
        id: 4,
        photoURL: 'https://i.pinimg.com/originals/fb/69/f5/fb69f585a76222761c2c7103f386c1fb.jpg',
        followed: true,
        Name: 'Antony',
        status: 'I am a master',
        location: {city: 'Jersey', country: 'USA'}
       },
      ]
  )
 }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
             <span>
                <div>
                      <img src={u.photoURL} className={styles.photoUser} alt={' '}/>
                </div>
               <div>
                { u.followed ? <button onClick={ () => {props.toggleFollow(u.id)}}> Unfollow  </button>
                    : <button onClick={ () => {props.toggleFollow(u.id)}}> Follow  </button>}

               </div>
             </span>
                <span>
                 <span>
                   <div>{u.fullName} </div>
                   <div>{u.status}  </div>
                 </span>
                 <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                 </span>
             </span>
            </div>)
        }
    </div>
}
export default Users;