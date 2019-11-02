import React, { Component } from 'react'
import SaveContainer from './Savecontainer';

class Booksaver extends Component {
    render() {
        return (
            <div className="fluid-container">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">GOOGLE BOOK SAVER</h1>
                    </div>
                </div>
                <SaveContainer />
            </div>
        )
    }
}
export default Booksaver