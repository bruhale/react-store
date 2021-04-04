import React, { Component } from "react";
import robot1 from './images/robot1.PNG';
import wclock1 from './images/wclock1.PNG';
import ecar1 from './images/Ecar1.PNG';
 
class Home extends Component {
  render() {
    return (
      <div classNmae="content">
      
        
        <h2>In Stock</h2>  
        <h2>
         <img src={robot1} alt="Robot 1 img" height={150} width={200} />&nbsp; 
         <img src={wclock1} alt="Wall Clock 1 img" height={150} width={200} />&nbsp;
         <img src={ecar1} alt="Electric Car 1 img" height={150} width={200} />&nbsp;


         </h2>
      </div>
       
        
      
      
      
      
      
    );
  }
}
 
export default Home;