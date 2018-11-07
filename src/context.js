import React from 'react';
const Context = React.createContext();

//defining a reducer here
const reducer = (state,action)=>{
    switch(action.type){
    case 'DELETE_CONTACT':
    return {
    ...state,
    contacts:state.contacts.filter(
       contact => contact.id !== action.payload 
    )

    };
    default:
    return state;

    }
};


export default class Provider extends React.Component {


state = {
contacts:[
{id:1,
name:'john cena',
email:'john@gmail.com',
phone:'48946497882',
location:'Bethlehem'
},
{
    id:2,
    name:'mike',
    email:'mike@gmail.com',
    phone:'48946497882',
    location:'New York'
  
},
{
    id:3,
name:'lebron',
email:'lebron@gmail.com',
phone:'48946497882',
location:'London'

}
],// end of state
//decalring dispatch
dispatch:action => this.setState(state => reducer(state,action))



}
  render() {
    return (

        <Context.Provider value={this.state}>
        {this.props.children}
        
        </Context.Provider>
    
    )
  }
}

export const Consumer = Context.Consumer;
