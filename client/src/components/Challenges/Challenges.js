import { React } from "react";
import { useSelector } from "react-redux";
import { Container, Grid, CircularProgress, Box } from '@mui/material';
import ChallengeCard from "./ChallengeCard/ChallengeCard"

const Challenges = () => {
    const challenges = useSelector((state) => state.challenges);
    
    return (
        <Container sx={{ pt: 3.5, pb: 6 }}>
            {!challenges.length ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 100, maxHeight: 100 }}>
                <CircularProgress />
            </Box> : (
                <Grid container spacing={3}>
                    {challenges.map((challenge) => (
                        <Grid key={challenge._id} item xs={12} md={4}>
                            <ChallengeCard challenge={challenge} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default Challenges;
