import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.posts
        .map(p => <Post message={p.message} like={p.likesCount}/>);

     let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);

        newPostElement.current.value = {onPostChange};
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

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
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;
