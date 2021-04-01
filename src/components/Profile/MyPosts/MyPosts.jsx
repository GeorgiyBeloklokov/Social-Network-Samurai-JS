import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return <div>
        <div>
            < img className={s.image} src='https://universalnews.org/wp-content/uploads/2020/05/Facebook-Avatar.jpg' alt = " "/>

        </div>
        <div>
            <textarea placeholder={"YOUR TEXT"}> </textarea>
<button>Add</button>
        </div>
            <div className={s.ithem} >my post</div>
            <Post />
            <Post />
            <Post />
            <Post />

        </div>



}
export default MyPosts;