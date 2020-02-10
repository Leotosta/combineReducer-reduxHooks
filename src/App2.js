import React, {useEffect, useReducer} from 'react'
import { rootReducerCombined, initialStateCombined } from './store/index';
import './store/index'



function App2 (){

    useEffect(() => {
       async function fetchData2(){
            const data = await fetch('https://jsonplaceholder.typicode.com/comments')
            const comments = await data.json()
    
            dispatch({type: 'ADD', comments})    
       }
       fetchData2()

    }, [])

    // Reducer is not being called

    
    const [ state, dispatch ] = useReducer(rootReducerCombined, initialStateCombined) 

    return (
        <div>
            {state.map(comment => (
                <ul key={comment.id}>
                    <li> {comment.body} </li>
                </ul>
            ))}
        </div>
    )
}


export default App2