import express from 'express';

import { getChallenges, createChallenge } from '../controllers/challenges.controller.js';

const router = express.Router();

router.get('/', getChallenges);
router.post('/', createChallenge);


export default router;