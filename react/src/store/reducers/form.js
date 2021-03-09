//Модальное окно с формой обратного звонка
import { TOGGLE_FORM } from '../actions/formAction';

const initialState = {
	toggle: false,
};

function formReducer(state = initialState, action) {
	switch (action.type) {
	case TOGGLE_FORM:
		return { ...state, toggle: action.payload };
	default:
		return state;
	}
}

export { initialState, formReducer };