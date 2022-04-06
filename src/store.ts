import { combineReducers } from 'redux'
import user from './pages/authenticated/user/User.reducer'

const rootReducer = combineReducers({
	user,
})

export default rootReducer
