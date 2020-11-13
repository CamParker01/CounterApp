import React, { Component } from 'react'

 class CustomInput extends Component {
    state = {
        count: ''
    }
    handleChange = (e) => {
        this.setState ({
            count: e.target.value
        })
    }
    handleSubmit = (e) => {
            e.preventDefault();
            this.props.customInput(this.state.count)
            this.setState({count: ''})


    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default CustomInput