import React from 'react';
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';


import './form.scss';

const Home = () => {
   return (
     <>
       <Header />
    
      <PizzaApp />
       <Footer />
     </>
   );
 };
 
 export default Home;




export class PizzaApp extends React.Component {
      state = {
      size: 'medium',
      glutenFree: false,
      dDew: false,
      topping: '',
      instructions: '',
      pizzaName: null,
      email: null,
      date: '',
      
      errors: {
      pizzaName: '',
      email: '',
     
      }
      };
 setSize = event => {
 this.setState({
 size: event.target.value
 });
 };
 setGlutenFree = event => {
 this.setState({
 glutenFree: event.target.value
 });
 };
 setdDew = event => {
  this.setState({
  dDew: event.target.value
  });
  };
 setInstructions = event => {
 this.setState({
 instructions: event.target.value
 });
 };
 setTopping = event => {
 this.setState({
 topping: event.target.value
 });
}


 setDate = event => {
  this.setState({
  date: event.target.value
  });
  }
 
   


 handleSubmit = event => {
 event.preventDefault();
 const {
 size,
 glutenFree,
 topping,
 instructions,
 dDew,
 date
 } = this.setState;
 alert(
  
  `
  Your order has been submitted!

 Appointment to pickup your Dragon Pal is set for ${ date }
 Please arrive with your Jewel of Valencia to pay for your Dragon Pal and Items. 
 No Other Payment Options Available!
 

`);
 };

 render() {
 const {
 size,
 glutenFree,
 instructions,
 topping,
 dDew,
 date
 } = this.setState;
 return (

    <div className="wrapper">
 <div className="form-wrapper">
 <h1>Order Your Dragon Pal</h1>
 <form onSubmit={this.handleSubmit}>
 <div className="pizzaName">
 <label>Name</label>
 <input type="text"
 name="pizzaName"
 onChange={this.handleChange}
 />
 </div>
 <div className="email">
 <label>Email</label>
 <input type="email"
 name="email"
 onChange={this.handleChange}
 />
 </div>
 <div className="dDew">
 <label>
 <input type="checkbox"
 checked={dDew}
 onChange={this.dDew} />
 Do you want extra special D-Dew defense added?
 </label>

 <p>What size would you like your Dragon Pal?</p>

 </div>
 <label>
   
 <input
 type="radio"
 value="small"
 checked={size === 'small'}
 onChange={this.setSize}
 />
 Small
 </label>
 <label>
 <input
 type="radio"
 value="medium"
 checked={size === 'medium'}
 onChange={this.setSize}
 />
 Medium
 </label>
 <label>
 <input
 type="radio"
 value="large"
 checked={size === 'large'}
 onChange={this.setSize}
 />
 Large
 </label>
 <br />
 <br />
 <div className="topping">
 <label>
 Morph Colors
 <br />
 <select onChange={this.setTopping} value={topping}>
 <option value="">- Pick Your Dragon Pal's Color -</option>
 <option value="pepperoni">Standard</option>
 <option value="peppers+onions">Red
</option>
 <option value="pineapple">Orange</option>
 <option value="black">Black</option>
 <option value="white">Albine-White</option>
 </select>
 </label>
 </div>
 <br />
 <br />
 <label>
 <input type="checkbox"
 checked={glutenFree}
 onChange={this.setGlutenFree} />
 Do you Super Believe in your Dragon Pal?
 </label>
 <br />
 <br />
 <div className="instructions">
 <label>
 Special instructions:
 <br />
 <textarea
 value={instructions}
 onChange={this.setInstructions}
 />
 </label>
 </div>
 
 <br />

<div>
  <Form>
 <Form.Group>
 <Form.Label>Schedule Appointment</Form.Label>
 <Form.Control type="date" value={date} onChange={this.setDate} />
</Form.Group>
</Form>

</div>  

 <br />
 <button type="submit"> Complete Order Request </button>
 </form>
 </div>
 </div>
 );
 };
}
