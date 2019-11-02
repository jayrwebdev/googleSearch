import React, { Component } from 'react'

class Searchbar extends Component {

    render() {
        return (
            <div className="input-group mb-3">
                <input name={this.props.name} value={this.props.name} type="text" class="form-control" placeholder="Search Book" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"  type="button" id="button-addon2">Search</button>
                </div>
            </div>
        )
    }
}
export default Searchbar