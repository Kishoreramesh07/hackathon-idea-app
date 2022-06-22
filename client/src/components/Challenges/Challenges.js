import { React } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, CircularProgress } from '@mui/material';
import ChallengeCard from "./ChallengeCard/ChallengeCard"

const Challenges = () => {
    const challenges = useSelector((state) => state.challenges);

    console.log(challenges);
    return (
        <Container sx={{pt:6}}>
            {!challenges.length ? <CircularProgress /> : (
                <Grid container spacing={3}>
                    {challenges.map((challenge) => (
                        <Grid key={challenge._id}item xs={12} md={4}>
                            <ChallengeCard challenge={challenge} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default Challenges;
