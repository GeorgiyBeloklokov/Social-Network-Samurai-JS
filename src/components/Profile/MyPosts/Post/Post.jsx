import React from "react";
import d from "./Post.module.css";

const Post = (props) => {
    return <div>
        <div>
            < img className={d.image}
                  src= 'https://slovami.net/wp-content/uploads/2018/04/11-27.jpg' alt=" "/>
        </div>
        {props.message}

        <div className={d.ithem}>Post</div>
        {props.like}
        <span> Likes </span>

    </div>
}
export default Post;