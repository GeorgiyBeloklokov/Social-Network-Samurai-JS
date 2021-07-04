import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava1.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {Button} from "@material-ui/core";

let Users = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
             <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                      <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                           alt={' '}/>
                        </NavLink>
                </div>
               <div>
                {u.followed ? <Button variant="contained" disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id);
                        return usersAPI.deleteUsers(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.toggleFollow(u.id)
                            }
                            props.toggleFollowingProgress(false, u.id);
                        });

                    }}> Unfollow </Button>
                    : <Button  variant="contained" disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id);
                        usersAPI.postUsers(u.id).then(data => {
                            if (data.resultCode === 0) {
                                props.toggleFollow(u.id)
                            }
                            props.toggleFollowingProgress(false, u.id);
                        });

                    }}> Follow </Button>
                }

               </div>
             </span>
            <span>
                 <span>
                   <div>Name: {u.name} </div>
                   <div>{"Status"} </div>
                 </span>
                 <span>
                    <div>{"Location.country"}</div>
                    <div>{"Location.city"}</div>
                 </span>
             </span>
        </div>)
        }
    </div>

}
export default Users;
