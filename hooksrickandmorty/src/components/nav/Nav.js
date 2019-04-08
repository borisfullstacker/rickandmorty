import React, {Component} from 'react'
import './nav.css'
import { Link } from "react-router-dom";
import SideBar from '../sidebar/SideBar';



class Nav extends Component  {
constructor(props){
    super(props)
    this.state={
        isMenuOpen:false
     }

    this.toggleMenu= this.toggleMenu.bind(this);
     this.syncToggle= this.syncToggle.bind(this);
}

toggleMenu(){
    this.setState({isMenuOpen:!this.state.isMenuOpen})
}




render(){
    return(
        <nav className="clearfix">
            <div className="sideBarOpener" onClick={this.toggleMenu}>
            </div>
            <SideBar toggle={this.state.isMenuOpen} syncToggle={this.syncToggle}/>
            <div className="sidewbarmenu" >
                <div className={this.state.isMenuOpen?"line1-animated":"line1"}/>
                <div className={this.state.isMenuOpen?"line2-animated":"line2"}/>
                <div className={this.state.isMenuOpen?"line3-animated":"line3"}/>
            </div>
            <div  className="icon">
                <img width={70} src={'http://www.tshirtterrorist.co.za/wp-content/uploads/2016/09/rick-steel-520.jpg?x12834'}/>
            </div>
            <ul className="menu">
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
        </nav>
    )
}

syncToggle(e){
  this.setState({isMenuOpen:e})
}

componentWillReceiveProps(nextProps){
    if (nextProps.sync!==undefined){
        this.setState({isMenuOpen:nextProps.sync})
    }
}


}




export default Nav