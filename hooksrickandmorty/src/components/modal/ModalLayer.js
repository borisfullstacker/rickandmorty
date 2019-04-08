import React, {Component} from 'react'
import './Modal.css'
import {connect} from 'react-redux' 

class ModalLayer extends Component{
    constructor(props){
        super(props);
        this.state={
            toggle:false,
            currentSliderState:{},
            currentSliderIndex:0
        }


    this.handleToggle= this.handleToggle.bind(this);
    }

 
render(){
  return(
    <div>
      <div className={this.state.toggle? 'modalLayerShow':'modalLayerHide'} onClick={this.handleToggle}> 
      
      </div>
      <div className={this.state.toggle? "show":"hide"}>

      </div>

      <div  className={this.state.toggle? "modalContent":"hide"}>
            <div id="orangeBox" onClick={()=>{this.toggle()}}>
                <span id="x">X</span>
            </div>
            <div className="modalHead">
                <h3>{this.state.currentSliderState.name}</h3>
                <label>{this.state.currentSliderState.species}</label>
            </div>
            <div className="modalBody">
                   <img className={this.state.toggle? "imgAnimation":"hide"} src={this.state.currentSliderState.image}/>
            </div>

            <div className="arrowLeft"  onClick={()=>{this.previous()}}></div>
            <div className="arrowRight" onClick={()=>{this.next()}}></div>
      </div>
    </div>
  )
}

handleToggle(){
    this.setState({toggle:false})
}

componentWillReceiveProps(nextProps){
    if (nextProps.toggle) {
        this.setState({toggle:nextProps.toggle})
    }
    else if (nextProps.currentSliderIndex>=0) {
        this.setState({currentSliderState:nextProps.fullList[nextProps.currentSliderIndex],
            currentSliderIndex:nextProps.currentSliderIndex})
    }

}

next(){
    
    let index= this.state.currentSliderIndex;
    if (this.state.currentSliderIndex<this.props.fullList.length-1)  index++;

    this.setState({currentSliderIndex:index, currentSliderState:this.props.fullList[index]})
}

previous(){
    let index= this.state.currentSliderIndex;
    if (this.state.currentSliderIndex>0)  index--;

    this.setState({currentSliderIndex:index, currentSliderState:this.props.fullList[index]}) 
}

toggle(){
    this.setState({toggle:false})
}
   
}

const mapStateToProps=(state)=>{
  return {
    fullList:state.fullList
  }
}




export default connect(mapStateToProps)(ModalLayer)