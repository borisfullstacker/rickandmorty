import React, {Component} from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'

class SideBar extends Component{

 constructor(props){
     
    super(props)
     
     this.state={
         isMenuOpen:false
     }

     this.setToggle= this.setToggle.bind(this);

 }
 



 render(){
    return(
        <div>
          <div className={this.state.isMenuOpen?"sideBar":"sideBarHide"}>
          <ul className="sideMenu"  onClick={this.setToggle}>
               <li>
                <Link to="/">
                    Welcome </Link>
                </li>
                
                <li>
                <Link to="/content/all">
                    All </Link>
                </li>
                
                <li>
                <Link to="/content/Alien">
                Alien </Link>
                </li>
                             
                <li>
                <Link to="/content/Human">
                Human </Link>
                </li>
                <li>
                <Link to="/content/Poopybutthole">
                Poopybutthole </Link>
                </li>
            </ul>
          </div>
        </div>
    )
}


componentWillReceiveProps(nextProps){
   if (nextProps.toggle!==undefined){
        this.setState({isMenuOpen:nextProps.toggle},()=>console.log(this.state)) 
    }

}

setToggle(){
    this.setState({isMenuOpen:!this.state.isMenuOpen})
    this.props.syncToggle(!this.state.isMenuOpen)
}



}



export default SideBar