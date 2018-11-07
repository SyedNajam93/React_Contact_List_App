import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from '../context';


class Contact extends Component {
  state ={
    showcontactInfo:false
};

// using arrow function to fix the this problem and passing the event in the arg
onDeleteClick = (id, dispatch) =>{
dispatch({type:'DELETE_CONTACT', payload:id});
}


  render() {
    //we are doing destucturing here all the info is cmg from contact  state from contacts.js when we looped throught contacts array
    const {id ,name , email , phone, location} = this.props.contact;
    const {showcontactInfo} = this.state;
   
   
    return (
      <Consumer>
      {value=>{
       const {dispatch} = value; 
       return(
        <div className='card card-body mb-3' id='card1' align="center">
        <h4>{name} 
        
        <i 
        onClick={()=> this.setState({showcontactInfo:!this.state.showcontactInfo})}
        className="fa fa-sort-down"  style={{cursor:'pointer'}}/>
        

       <i className="fa fa-times" style={{cursor:'pointer', float:'right', color:'red'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}></i>
        </h4>  
        {showcontactInfo ? (<ul className='list-group'>
        <li className='list-group-item'> Email: {email}</li>
        <li className='list-group-item'>Phone : {phone}</li>
        <li className='list-group-item'>Location : {location}</li>
  
        </ul>): null}
        </div>

       );
      }}
</Consumer>
  
    )// end of main return function
  }
}

Contact.prototypes = {
  contact:PropTypes.object.isRequired 

    };
    
export default Contact;
