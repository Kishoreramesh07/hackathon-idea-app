import axios from 'axios';

const url = 'https://scripbox-interview-task.herokuapp.com/challenges';

export const fetchChallenges = ( ) => axios.get(url);
export const createChallenge = (newChallenge) => axios.post(url, newChallenge);
export const likeChallenge = (id) => axios.patch(`${url}/${id}/likeChallenge`);
export const sortChallenge = (sortBy) => axios.get(`${url}/sort?sortBy=${sortBy}`)