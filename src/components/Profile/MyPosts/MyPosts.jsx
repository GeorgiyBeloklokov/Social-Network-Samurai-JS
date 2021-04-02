import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return <div>
        <div>
            <img className={s.image1}
                 src='https://fainaidea.com/wp-content/uploads/2020/05/f8a4c90d00ce2e5684c3bf47c4a6ce17.jpg' alt=" "/>

        </div>

        <div>
            < img className={s.img1profile}
                  src='https://universalnews.org/wp-content/uploads/2020/05/Facebook-Avatar.jpg' alt=" "/>

        </div>

        <div>
            < img className={s.image} src='https://universalnews.org/wp-content/uploads/2020/05/Facebook-Avatar.jpg'
                  alt=" "/>

        </div>

        <div>
            <textarea placeholder={"YOUR TEXT"}> </textarea>
            <button>Add</button>
        </div>
        <div className={s.ithem}>my post</div>
        <Post message=' Hi, i im funny' Like={20}/>
        <Post message='hello, its my first post' Like={50}/>

    </div>


}
export default MyPosts;
