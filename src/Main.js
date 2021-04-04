import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import ATV from "./ATV";
import Drones from "./Drones";
import ElectricCars from "./ElectricCars";
import Toys from "./Toys";
import Appliance from "./Appliance";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h4>We are the biggest supplier's of Electronics in Sweden.  From Drones to Electric Cars and Toys!</h4>
            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/ATV">ATV</NavLink></li>
            <li><NavLink to="/Drones">Drones</NavLink></li>
            <li><NavLink to="/ElectricCars">Electric Cars</NavLink></li>
            <li><NavLink to="/Toys">Toys</NavLink></li>
            <li><NavLink to="/Appliance">Appliances</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/ATV" component={ATV}/>
            <Route path="/Drones" component={Drones}/>
            <Route path="/ElectricCars" component={ElectricCars}/>
            <Route path="/Toys" component={Toys}/>
            <Route path="/Appliance" component={Appliance}/>
               
            </div>
          </div>
          </HashRouter>
      );
    }
  }
   
  export default Main;