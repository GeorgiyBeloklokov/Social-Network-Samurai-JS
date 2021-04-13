import React from "react";
import f from "./News.module.css";

const News = () => {
let newsTextarea = React.createRef();
let Add = () => {
let text = newsTextarea.current.value;
alert(text);
}

    return (
        <div>
    <div className={f.img}> News </div>
    <div> <textarea ref={newsTextarea}> </textarea></div>
    <div> <button onClick={Add}>Add</button> </div>

        </div>
    )
}

export default News;