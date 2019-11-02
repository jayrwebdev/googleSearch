import React, { Component } from 'react';
import Holder from './SearchHandler'
import Searchbar from './Searchbar'

class SearchBar extends Component {
    state = {
       name:""
    }
    handleInputChange=(e)=>{
        console.log({[e.target.name]:e.target.value})
        this.setState({[e.target.name]:e.target.value})
    }


    render() {
        return (
            <div className="container">
                <Searchbar/>
                <Holder title image authors description/>
            </div>
           
        )
    }
}

export default SearchBar