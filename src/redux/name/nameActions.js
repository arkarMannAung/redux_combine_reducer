export const SET_NAME = 'SET_NAME';
export const SET_SCORE = 'SET_SCORE';

export const setName = name=> dispatch=> {
    dispatch({
        type: SET_NAME,
        payload: name
    })
}

export const setScore = score => dispatch=> {
    dispatch({
        type: SET_SCORE,
        payload: score
    })
}