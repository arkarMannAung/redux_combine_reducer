import {SET_SCORE} from './scoreActions';

const initialState = {
    score: 5
}

function scoreReducer(state=initialState, action){
    switch (action.type) {
        case SET_SCORE:
            return {...state, score: action.payload};
        default:
            return state;
    }
}

export default scoreReducer;