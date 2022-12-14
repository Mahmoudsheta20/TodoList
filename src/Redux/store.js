import { createStore } from 'redux'
import counterReducer from './reducer/counterRedducer'

const store = createStore(counterReducer)

export default store