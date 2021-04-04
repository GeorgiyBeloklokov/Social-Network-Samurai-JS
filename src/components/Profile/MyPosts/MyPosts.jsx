import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, i im funnnnnny', likesCount: 55},
        {id: 2, message: 'hello, its my first post', likesCount: 40},
    ]


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
            <Post message={postData[0].message} like={postData[0].likesCount}/>
            <Post message={postData[1].message} like={postData[1].likesCount}/>
        </div>
    )
}
export default MyPosts;
