import { FETCH_ALL, CREATE, LIKE, SORT_CHALLENGE } from '../constants/actionTypes';

const challenges = (challenges = [], action ) => {
    switch (action.type) {
        case LIKE: 
            return challenges.map((challenge) => challenge._id === action.payload._id ? action.payload: challenge);
        case SORT_CHALLENGE:
        case FETCH_ALL: 
            return action.payload;
        case CREATE: 
            return [...challenges, action.payload];
        default: 
            return challenges;
    }
}

export default challenges;