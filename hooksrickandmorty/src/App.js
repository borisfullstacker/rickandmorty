import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Content from  './components/Common/Content'
import Welcome from  './components/Common/Welcome'
import SideBar from './components/sidebar/SideBar'
import NotFound from './components/Common/NotFound'

class App extends Component {
 constructor(props){
   super(props);
 
    this.state={
      isSideMenuOpen:false
    }

    this.toggleSideMenu= this.toggleSideMenu.bind(this)
 
 }
  render() {
    return (
    <Router>
      <div>
          <Nav sync={this.state.isSideMenuOpen}/>
          <SideBar toggle={this.state.isSideMenuOpen}/>
          <div onClick={this.toggleSideMenu}>
           <Switch>
             <Route path="/" exact component={Welcome}/>
             <Route path="/content/:category" exact component={Content}/>     
             <Route path="/content/character/:id" exact component={Content}/>     
             <Route path='*' component={NotFound} />
           </Switch>
         </div>
      </div>
    </Router>
    );
  }



  toggleSideMenu(){
     this.setState({isSideMenuOpen:false})
  }

}

export default App;
