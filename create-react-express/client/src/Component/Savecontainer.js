import React, { Component } from 'react';

class SaveContainer extends Component {
    render() {
        return (
            <div className="container">
                <button type="button" class="btn btn-primary">View</button>
                <button type="button" class="btn btn-primary">Delete</button><br></br>
                <h3>{this.props.title}</h3>
                <h3>{this.props.authors}</h3>
                <img src={this.props.image} alt={this.props.title} width="200" height="200"/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default SaveContainer