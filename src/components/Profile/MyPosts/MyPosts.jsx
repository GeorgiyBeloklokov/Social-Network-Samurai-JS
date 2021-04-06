import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

let postsElements = props.posts
    .map(p => <Post message={p.message} like={p.likesCount}/>);

    return (
        <div>
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
            {postsElements}
        </div>
    )
}
export default MyPosts;
