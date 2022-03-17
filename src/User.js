import React, {Component} from "react";

export default class User extends Component {
    constructor(props) {
        super();
        console.log(props);
        this.state = {
            txt:''
        }
    }
    changeHandler(val) {

        this.setState({txt: val.target.value});
    }
    render() {
        return (
            <div>
                <p>{this.props.name} {this.state.txt}</p>
                <input type="text" onChange={(val) => this.changeHandler(val)} />
            </div>
        )
    }
}