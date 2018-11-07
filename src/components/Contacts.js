import React from 'react';
import Contact from '../components/Contact';
import {Consumer} from '../context';

class Contacts extends React.Component {
// This is a method that changes the state 
 

render(){
  return(
    <Consumer>
    {value => {
      const { contacts } = value;
      return (
        <React.Fragment>
          <h1 className="display-4 mb-2">
            <span className="text-danger">Contact</span> List
          </h1>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </React.Fragment>
      );
    }}
  </Consumer>
);
}

}// end of class 

export default Contacts;
