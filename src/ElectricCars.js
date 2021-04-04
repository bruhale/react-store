import React, { Component } from "react";
import ecar1 from './images/Ecar1.PNG';
import ecar2 from './images/Ecar2.PNG';
import ecar3 from './images/Ecar3.PNG';
 
class ElectricCars extends Component {
  render() {
    return (
      <div>
        <h2>Electric Cars</h2>
        
       
          <li>In Stock</li>
          <img src={ecar1} alt="Electric Car 1 img" height={150} width={200} />:&nbsp;
          <li>Available in 3 weeks</li>
          <img src={ecar2} alt="Electric Car 2 img" height={150} width={200} />:&nbsp;
          <img src={ecar3} alt="Electric Car 3 img" height={150} width={200} />:&nbsp;
          <li>Available in less then 3 weeks</li>
          
          
       
      </div>
    );
  }
}
 
export default ElectricCars;