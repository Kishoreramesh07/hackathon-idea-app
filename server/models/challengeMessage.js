import mongoose from "mongoose";

const challengeSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const ChallengeMessage = mongoose.model('ChallengeMessage', challengeSchema);

export default ChallengeMessage;