import { React } from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from '@mui/material';
import ChallengeCard from "./ChallengeCard/ChallengeCard"

const Challenges = () => {
    const challenges = useSelector((state) => state.challenges);

    console.log(challenges);
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <ChallengeCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ChallengeCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ChallengeCard />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Challenges;
