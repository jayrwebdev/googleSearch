import React,{Component} from 'react';

class Holder extends Component {
   
    render() {
        return (
            <div className="container">
                <div id={this.props.id} row="col-11"/>
                     <h3>{this.props.title}</h3><br/>
                     <h3>{this.props.authors}</h3>
                     <img src={this.props.image} alt={this.props.title} width="200" height="200"/>
                     <p>{this.props.description}</p>
                     <button class="btn btn-primary" type="submit">View</button>
                     <button onClick={this.props.onClick} class="btn btn-primary" type="submit">Save</button>
            </div>
        ) 
    }

}
export default Holder

