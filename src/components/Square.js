import React, { Component } from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}
>
                {this.props.value}
            </button>
        );
    }

    renderSquare(i) {
        return <Square value={i} />;
    }
}

export default Square;