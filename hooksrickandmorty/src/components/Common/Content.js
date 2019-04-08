import React,{useState} from 'react';
import {connect} from 'react-redux'
import {getAllFromApi,getContentByCategory,getContentByName, getContentById} from '../../api requests/FetchRequests'
import {useEffect} from 'react'
import ModalLayer from '../modal/ModalLayer'
import './content.css'
import NotFound from './NotFound';


function Content(props){

    const [toggle,setToggle]= useState(false);
    const [index,setIndex]= useState(0);
    const [found, setFound]= useState(false)

    const category= props.match.params.category;
    const id= props.match.params.id
    

    useEffect(()=>{
        if (category==="all") {props.getAll(); return}
        props.getByCategory(category);
    },[category])
  
    useEffect(()=>{
        setToggle({toggle:false})
        
    },[toggle.toggle])

    useEffect(()=>{
        setFound(props.status)
    },[props.status])

    useEffect(()=>{
         props.getById(id);
    },[id])


    const toggleModal=(index)=>{
        setIndex({index:index})
        setToggle({toggle:true})
    }

    if(found && category!="all"){
            return(
                <NotFound/>
            )
        
    }

    const content=props.fullList.map((val,index)=>{
    return(

     <div key={index} className="inner">
         <h3>{val.name}</h3>
         <label>{val.species}</label>
         <img src={val.image}/>
         <button onClick={()=>toggleModal(index)}>Click</button>
     </div>

    )})

    return(
     <div> 
        <div className="searchCont">
        <form>
            <input type="text" onChange={props.handleChange} value={props.searchInput} placeholder="search character"/>
            <button type="button" onClick={()=>props.search(props.searchInput)}> Search </button>    
        </form> 
        <p className="errCont">
            <label >{props.error}</label>
        </p>

       </div>
       <div style={{position:"relative"}}>
          <ModalLayer toggle={toggle.toggle} currentSliderIndex={index.index} />
       </div>
       <div className='mainCont'>
           {content}
      </div>
     </div>
    )

}

const mapDispatchToProps=(dispatch)=>{
   return{
            getAll:()=>{dispatch(getAllFromApi())},
            getByCategory:(category)=>{dispatch(getContentByCategory(category))},
            handleChange:(e)=>{
                {dispatch({type:"FOLLOW_CHANGE",payload:e.target.value})}},
            search:(name)=>{dispatch(getContentByName(name))},
            getById:(id)=>{dispatch(getContentById(id))}
       } 
}

const mapStateToProps=(state)=>{
    return{
        fullList:state.fullList,  
        searchInput:state.searchInput,
        error:state.error,
        status:state.status
    }


}


export default connect(mapStateToProps,mapDispatchToProps)(Content)


