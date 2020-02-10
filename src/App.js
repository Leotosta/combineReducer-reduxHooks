import React, {useEffect, useReducer} from 'react';
import './store/index'
import { rootReducerCombined, initialStateCombined } from './store/index';

//why axios

function App() {
  
  useEffect(() => {
    async function fetchData (){
      const user = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await user.json()
      
      dispatch({type: 'ADD', data})

    }

    fetchData()
    
  }, [])
  
  // const Context = React.createContext()
      
  // Reducer is not being called

  const [ state, dispatch ] = useReducer(rootReducerCombined, initialStateCombined) 
  //state = { modules: []}
  

  console.log(state)
  return (
   <div>
     {state.reducerOne.map(item => (
       <ul key={item.id}>
          <li>{item.title}</li>
       </ul>
     ))}
   </div>
  );
}

export default App;
