import FirstReducer from './reducer1'
import SecondReducer from './reducer2'
import combineReducers from 'react-combine-reducers'

const INITIAL_STATE = {
    modules: [],
    activeLesson: {},
    activeModule: {}  
  }
  

const INITIAL_STATE2 = {
    comments: []
}


export const [ rootReducerCombined, initialStateCombined ] = combineReducers({ reducerOne: [ FirstReducer, INITIAL_STATE ], reducerTwo: [ SecondReducer, INITIAL_STATE2 ] })

/* state, dispatch 

    state = rootReducerCombined = reducerOne: [ FirtReducer ]

*/