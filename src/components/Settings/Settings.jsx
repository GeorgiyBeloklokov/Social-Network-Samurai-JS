import React from "react";
import f from "./Settings.module.css";

const Settings = () => {
let textSetting = React.createRef();
let Add = () => {
    let text = textSetting.current.value;
    alert(text);
}
    return (
        <div>
    <div className={f.img}> Settings </div>
    <div> <textarea ref={textSetting} placeholder={'text'}> </textarea></div>
    <div> <button onClick={Add}>Add</button> </div>
        </div>
)
}
export default Settings;