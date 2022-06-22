import mongoose from "mongoose";
import ChallengeMessage from "../models/challengeMessage.js";

export const getChallenges = async (req, res) => {
    try {
        const challengeMessages = await ChallengeMessage.find();

        res.status(200).json(challengeMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createChallenge = async (req, res) => {
    const challenge = req.body;

    const newChallenge = new ChallengeMessage(challenge);

    try {
        await newChallenge.save();

        res.status(201).json(newChallenge);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

export const likeChallenge = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "No available challenge with that id" });

    const challenge = await ChallengeMessage.findById(id);
    const updatedChallenge = await ChallengeMessage.findByIdAndUpdate(id, { likeCount: challenge.likeCount + 1 }, { new: true });

    res.json(updatedChallenge);

}

export const sortChallenges = async (req, res) => {
    const sortBy = req.query.sortBy;

    try {
        if (sortBy === 'likeCount') {
            const sortedChallenge = await ChallengeMessage.find({}).sort({ likeCount: -1 }).exec();
            return res.json(sortedChallenge);
        } else if (sortBy === 'createdDate') {
            const sortedChallenge = await ChallengeMessage.find({}).sort({ createdAt: 'desc' }).exec();
            return res.json(sortedChallenge);
        } else {
            return res.status(422).json({ message: 'Please enter either likeCount or createdDate' })
        }
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

    if (!sortBy) {
        return res.status(422).json({ message: "Please enter only sortBy" })
    }
}

