import React, { Component } from 'react'

export default class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.match.pramas.name}
            </div>
        )
    }
}

