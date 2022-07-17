import {SET_NAME} from './nameActions';

const initialState = {
    name: 'Arkar',
}

function nameReducer(state=initialState, action){
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.payload};
        default:
            return state;
    }
}

export default nameReducer;