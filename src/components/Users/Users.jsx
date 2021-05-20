import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava1.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.slice(0, 10).map(p => {
                return <button className={props.currentPage === p && styles.selectedPage}
                               onClick={() => {
                                   props.onPageChanged(p);
                               }}>{p}</button>
            })}

        </div>
        {props.users.map(u => <div key={u.id}>
             <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                           alt={' '}/>
                        </NavLink>
                </div>
               <div>
                {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id);
                        return usersAPI.deleteUsers(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.toggleFollow(u.id)
                            }
                            props.toggleFollowingProgress(false, u.id);
                        });

                    }}> Unfollow </button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id);
                        usersAPI.postUsers(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.toggleFollow(u.id)
                            }
                            props.toggleFollowingProgress(false, u.id);
                        });

                    }}> Follow </button>
                }

               </div>
             </span>
            <span>
                 <span>
                   <div>{u.name} </div>
                   <div>{"u.status"}  </div>
                 </span>
                 <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                 </span>
             </span>
        </div>)
        }
    </div>

}
export default Users;
