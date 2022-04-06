import { ActionType } from './User.models'
import userState from './User.state'
import { SET_EMAIL } from './User.types'

const reducer = (state = userState, action: ActionType) => {
	switch (action.type) {
		case SET_EMAIL:
			return {
				...state,
				email: action.payload,
			}
		default:
			break
	}

	return state
}

export default reducer
