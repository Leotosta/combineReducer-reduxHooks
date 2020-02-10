

function appReducer(state , action){
    console.log (state,action)
    
    switch(action.type){
      case 'ADD': {
        state.modules = action.data.map(item => {
          return item       
        })
        
        return {
          ...state
        }

      }
      default : {
        return state
      }
      
    }   
  }

 


export default appReducer