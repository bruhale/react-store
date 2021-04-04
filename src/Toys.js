import React, { Component } from "react";
import robot1 from './images/robot1.PNG';
import toyheli1 from './images/toyheli1.PNG';

class Toys extends Component {
  render() {
    return (
      <div>
        <h2>Toys</h2>
        
       
          <li>In Stock</li>
          <img src={robot1} alt="Robot 1 img" height={150} width={200} />:&nbsp; 
          <li>Available in 3 weeks</li>
          <li>Available in less then 3 weeks</li>
          <img src={toyheli1} alt="Heli 1 img" height={150} width={200} />:&nbsp; 
          
          
       
      </div>
    );
  }
}
 
export default Toys;