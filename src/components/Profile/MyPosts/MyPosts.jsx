import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import UserPhoto from "../../../assets/images/8841.jpg"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FornControls/FormsControls";

const maxLength10 =  maxLengthCreator(10);

class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.newAddPosTextArea = (values) => {
            this.props.addPost(values.profileTextArea);
        }
    }

    render() {
        console.log("RENDER");

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
                        <AddProfilePageFormRedux onSubmit={this.newAddPosTextArea} />
                    </div>
                </div>
                {this.postsElements}
            </div>
        )
    }
}
let textProfilePage = (props) => {
    return (
         <form onSubmit={props.handleSubmit}>
             <div>
                 <Field component={Textarea} name="profileTextArea" placeholder="Your text" validate={[required,maxLength10]}/>
             </div>
             <div><button>Add</button> </div>
         </form>
        )
}

const AddProfilePageFormRedux = reduxForm ({form: "addProfileTextArea"}) (textProfilePage)

export default MyPosts;
