import axios from 'axios';

const url = 'http://localhost:8082/challenges';

export const fetchChallenges = ( ) => axios.get(url);
export const createChallenge = (newChallenge) => axios.post(url, newChallenge);
export const likeChallenge = (id) => axios.patch(`${url}/${id}/likeChallenge`);