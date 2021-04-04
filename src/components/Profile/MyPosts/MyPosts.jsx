import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.head}>

            <div>
                < img className={s.image}
                      src='https://universalnews.org/wp-content/uploads/2020/05/Facebook-Avatar.jpg'
                      alt=" "/>
            </div>

            <div>
                <div>
                    <div className={s.ithem}>My post</div>
                </div>
                <div>
                    <textarea placeholder={"YOUR TEXT"}> </textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <Post message=' Hi, i im funny' Like={20}/>
            <Post message='hello, its my first post' Like={50}/>
        </div>
    )
}
export default MyPosts;
