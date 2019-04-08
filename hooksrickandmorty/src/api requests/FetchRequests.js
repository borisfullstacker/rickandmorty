
export function getAllFromApi(){
    return function(dispatch){
        fetch("https://rickandmortyapi.com/api/character/")
        .then((res)=>res.json())
        .then((data)=>dispatch({type:"ADD_FULL_LIST",payload:data}));
    }
}

export function getContentByCategory(category){
    return function(dispatch){
        fetch(`https://rickandmortyapi.com/api/character/?species=${category}`)
        .then((res)=>res.json())
        .then((data)=>{
            debugger
            if (data.results)  dispatch({type:"ADD_FULL_LIST",payload:data})
            else if (data.error)  dispatch ({type:"NOT_FOUND"})
        })
    }
}

export function getContentByName(name){
     return function(dispatch){
         fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
         .then((res)=>res.json())
         .then((data)=>{dispatch({type:"SHOW_SEARCH_RESULT",payload:data});console.log(data.results)})
         
     }
}

export function getContentById(id){
    return function(dispatch){
        fetch(`https://rickandmortyapi.com/api/character/${parseInt(id)}`)
        .then((res)=>res.json())
        .then((data)=>{
            dispatch({type:"SHOW_SEARCH_RESULT",payload:[data]});console.log(data)})
       
    }
}
// 
