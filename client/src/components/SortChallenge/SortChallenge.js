import { React, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getChallenges, sortChallenge} from '../../redux/actions/challenges'

export default function SortChallenge() {
    const [sortBy, setSortBy] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const selectedQuery = event.target.value
        setSortBy(selectedQuery);

        if(!!selectedQuery){
            dispatch(sortChallenge(selectedQuery));
        } else {
            dispatch(getChallenges());
        }

    };

    return (
        <Container sx={{pt: 3}}>
            <FormControl size="small">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography  variant="subtitle2" sx={{pr: 1.5}}>Sort By</Typography>
                    <Select
                        id="sort"
                        value={sortBy}
                        onChange={handleChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"likeCount"}>Vote Count</MenuItem>
                        <MenuItem value={"createdDate"}>Created Date</MenuItem>
                    </Select>
                </Box>
            </FormControl>
        </Container>
    )
}
