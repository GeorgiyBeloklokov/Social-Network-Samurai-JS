import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {// чтобы не терять .this применяем стрелочную иначе придёться байндить внизу или наверху
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    OnStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span
                        onDoubleClick={this.activateEditMode}>{this.props.status || "Double click  here for edit Status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.OnStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;