export const SET_SCORE = 'SET_SCORE';

export const setScore = score => dispatch=> {
    dispatch({
        type: SET_SCORE,
        payload: score
    })
}