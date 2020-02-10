function appReducer2(state , action){
    console.log(state,action)
    switch(action.type){
        case 'ADD': {
             state.comments = action.comments.map(comment => {
                return comment
            })

            return {
                ...state
            }
        }

        default: { 
            return state
        }

    }
}


export default appReducer2