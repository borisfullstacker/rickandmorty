import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    fullList: [{
        name: "",
        species: "",
        url: ""
    }],
    error:"",
    sliderIndex:"",
    searchInput:""
    
}

const reducer = (state = initialState, action) => {
    console.log("reducer", action.payload);

    switch (action.type) {
        case "ADD_FULL_LIST":
            return Object.assign({},state,{fullList:[...action.payload.results],status:false})
        case "FOLLOW_CHANGE":             
            return Object.assign({},state,{searchInput:action.payload})
        case "SHOW_SEARCH_RESULT":
        
          if (action.payload.error){
                  return Object.assign({},state,{error:"No search results"})
          }else{
                  let newArr=[]
                  if (action.payload.results!==undefined){
                       newArr=action.payload.results.slice()
                  }else{
                       newArr=action.payload.slice();
                  }
                  return Object.assign({},state,{fullList:newArr,error:"",searchInput:"",status:false})
             }

        case "NOT_FOUND":
           return Object.assign({},state,{status:true})
        
        default:

            return state;
    }


}

const Store = createStore(reducer, applyMiddleware(thunk))


export default Store;