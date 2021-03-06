import React from 'react';
import Header from "../parts/Header";
import Footer from "../parts/Footer";



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
 glutenFree,
 topping,
 instructions,
 dDew,

 } = this.setState;
 alert(
  
  `
  Your order has been submitted!

 We will email you to schedule an Appointment to pickup your Dragon Pal.
 Please arrive with your Jewel of Valencia to pay for your Dragon Pal and Items. 
 No Other Payment Options Available!
 

`);
 };

 render() {
 const {

 glutenFree,
 instructions,
 topping,
 dDew,

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

</div>  
</div>

 <br />
 <button type="submit"> Complete Order Request </button>
 </form>
 
 </div>
 </div>
 
 );
 };
}
