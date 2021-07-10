import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css"
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {setStatus(props.status);},[props.status]
    );


    const activateEditMode = () => {
        setEditMode(true);
    }

        const deactivateEditMode =() => {
            setEditMode(false);
        props.updateStatus(status);
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }



    return (
        <div  >
            {!editMode &&
            <div> <b>My Status: </b>
                    <span className={s.statusPoiner}
                        onDoubleClick={activateEditMode}>{props.status || "Double click  here for edit "} </span>
            </div>
            }
            {editMode &&
            <div>
                <input maxlength="80" onChange={OnStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;