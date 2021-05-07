import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import UserPhoto from "../../../assets/images/8841.jpg"

class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.AddPost = () => {
            this.props.addPost();
        }

        this.onPostChange = (e) => {
            let text = e.target.value;
            this.props.updateNewPostText(text);
        }
    }

    render() {
        this.postsElements = this.props.posts
            .map(p => <Post message={p.message} like={p.likesCount} key={p.id}/>);

        return (
            <div>
                <div>
                    < img className={s.image}
                          src={UserPhoto}
                          alt=" "/>
                </div>
                <div>
                    <div>
                        <div className={s.ithem}>My post</div>
                    </div>
                    <div>
                        <textarea onChange={this.onPostChange} value={this.props.newPostText}> </textarea>
                    </div>
                    <div>
                        <button onClick={this.AddPost}>Add post</button>
                    </div>
                </div>
                {this.postsElements}
            </div>
        )
    }
}

export default MyPosts;
