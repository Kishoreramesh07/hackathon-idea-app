import { React, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getChallenges, sortChallenge} from '../../redux/actions/challenges'

export default function SortChallenge() {
    const [sortBy, setSortBy] = useState('None');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const selectedQuery = event.target.value
        setSortBy(selectedQuery);

        if(selectedQuery === "likeCount" || selectedQuery === "createdDate"){
            dispatch(sortChallenge(selectedQuery));
        } else if (selectedQuery === "None") {
            dispatch(getChallenges());
        }

    };

    return (
        <Container sx={{pt: 4.5}}>
            <FormControl size="small" sx={{pt: 3}}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography  variant="subtitle2" sx={{pr: 1}}>Sort By</Typography>
                    <Select
                        id="sort"
                        value={sortBy}
                        sx={{ m: 1, minWidth: 150, maxWidth: 150, borderRadius: '25px', background: '#fff', outline: 'none', maxHeight: '36px' }}
                        onChange={handleChange}>
                        <MenuItem value="None">
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
