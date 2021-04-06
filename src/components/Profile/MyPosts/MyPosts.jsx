import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

 /*   let posts = [
        {id: 1, message: 'Hi, i im funnnnnny', likesCount: 55},
        {id: 2, message: 'hello, its my first post', likesCount: 40},
    ]*/
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
