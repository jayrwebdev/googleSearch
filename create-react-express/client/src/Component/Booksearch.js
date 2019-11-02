import React,{Component} from 'react';
import Jumbotron from './Jumbotron.js';
import SearchBar from './Searchsection.js'
class Booksearch extends Component {

  render() {
     return (
       <div>
         <Jumbotron/>
         <SearchBar/>
       </div> 
     )  
  }
}

export default Booksearch