import express from 'express';

import { getChallenges, createChallenge, likeChallenge, sortChallenges } from '../controllers/challenges.controller.js';

const router = express.Router();

router.get('/sort', sortChallenges);
router.get('/', getChallenges);
router.post('/', createChallenge);
router.patch('/:id/likeChallenge', likeChallenge);


export default router;