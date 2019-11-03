import axios from 'axios';
import db from '../../../models';

export default  {
    getBooks : () => {
      db.Books.find({},(err,data) =>{
          if (err) {
            
          } else {
            
          }

      })
    },
    deleteBook : (id) => {

    },
    saveBook : (id) => {
        db.Books.insertOne({

        })

    },
    requestBook : (query) => {
         axios.get('https://www.googleapis.com/books/v1/volumes?q='+query+'&key=AIzaSyBYrSwBkmTj5gzN4NObWjt4z7BMmsA6uUk').then((data)=>{
             console.log(data)
         })
    }

}