import { FETCH_ALL, CREATE, LIKE, SORT_CHALLENGE } from '../constants/actionTypes'
import * as api from '../../api';

//Action creators
export const getChallenges = () => async(dispatch) => {
    try{
        const {data} = await api.fetchChallenges();

        dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {
        console.log(error.message)
    }

}

export const createChallenge = (challenge) => async (dispatch) => {
    try{
        const { data } = await api.createChallenge(challenge);

        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error.message)
    }
}

export const likeChallenge = (id) => async ( dispatch) => {
    try{
        const { data } = await api.likeChallenge(id);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const sortChallenge = (sortBy) => async ( dispatch) => {
    try{
        const { data } = await api.sortChallenge(sortBy);

        dispatch({ type: SORT_CHALLENGE, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}