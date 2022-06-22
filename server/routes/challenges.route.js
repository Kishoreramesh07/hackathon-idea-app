import express from 'express';

import { getChallenges, createChallenge, likeChallenge } from '../controllers/challenges.controller.js';

const router = express.Router();

router.get('/', getChallenges);
router.post('/', createChallenge);
router.patch('/:id/likeChallenge', likeChallenge);


export default router;