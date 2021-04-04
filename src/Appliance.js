import React, { Component } from "react";
import robvac1 from './images/robvac1.PNG';
import potice1 from './images/potice1.PNG';
 
class Appliance extends Component {
  render() {
    return (
      <div>
        <h2>Appliances</h2>
             
          <li>In Stock</li>
          
          <li>Available in 3 weeks</li>
          <li>Available in less then 3 weeks</li>
          <img src={robvac1} alt="Robo Vac 1 img" height={150} width={200} />:&nbsp;
          <img src={potice1} alt="Appliance 1 img" height={150} width={200} />:&nbsp;
          
          
       
      </div>
    );
  }
}
 
export default Appliance;