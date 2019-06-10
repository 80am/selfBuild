import React, { Component } from 'react';
import './builder.css'

class Builder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wallHeight: '',
            wallWidth: ''
        }


    }
    handleHeight(e) {
        this.setState({ wallHeight: e.target.value })
    }


    render() {
        console.log(this.state.wallHeight);
        return (
            <div className="main">

                <div>
                   Wall Height <input placeholder='0' type="text" onChange={(e) => this.handleHeight(e)}></input>inches
                </div>

                <div>
                   Wall Width <input placeholder='0' type="text" onChange={(e) => this.wallWidth(e)}></input>inches
                </div>
            </div>
        )
    }
}
export default Builder