import React, { Component } from 'react';
import Holder from './SearchHandler'
import Searchbar from './Searchbar'
import API from '../utils/Api'

class SearchBar extends Component {
    state = {
       name:""
    }
    handleInputChange=(e)=>{
        console.log({[e.target.name]:e.target.value})
        this.setState({[e.target.name]:e.target.value})
    }
    saveClick = (id) => {

    }
    viewClick = (id) => {

    }
    getBooks = (query) => {
        API.requestBook(query)
    }

    render() {
        return (
            <div className="container">
                <Searchbar onClick={this.getBooks(this.state.name)} />
                <Holder onClick={this.saveClick()} key alt id title image authors description/>
            </div>
           
        )
    }
}

export default SearchBar