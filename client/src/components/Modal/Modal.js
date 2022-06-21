import { React, useState } from 'react'
import { TextField, Dialog, DialogActions, Button, DialogContent, DialogTitle, OutlinedInput, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createChallenge } from '../../redux/actions/challenges'

const tags = [
    'feature',
    'tech',
    'engineering',
    'data',
];

export default function Modal({ open, handleClose }) {
    
    const [tagsSelected, setTagsSelected] = useState([]);
    const [challengeData, setChallengeData] = useState({ title: '', description: '', tags: '' });
    
    const handleSelectedTags = (event) => {
        const { target: { value } } = event;
        setTagsSelected(typeof value === 'string' ? value.split(',') : value);
        setChallengeData({  ...challengeData, tags: value.join(",") });
    };

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(createChallenge(challengeData));
    }

    return (
        <Dialog open={open} fullWidth maxWidth="xs">
            <DialogTitle>Add Challenge</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    name="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={challengeData.title}
                    onChange={(e) => setChallengeData({ ...challengeData, title: e.target.value })}
                    sx={{ mb: 1 }}
                />
                <TextField
                    margin="dense"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={challengeData.description}
                    onChange={(e) => setChallengeData({ ...challengeData, description: e.target.value })}
                    sx={{ mb: 2 }}
                />
                <FormControl fullWidth>
                    <InputLabel id="tags" >Tags</InputLabel>
                    <Select
                        labelId="tags"
                        id="tags"
                        multiple
                        value={tagsSelected}
                        onChange={handleSelectedTags}
                        input={<OutlinedInput label="Tags" />}>
                        {tags.map((tag) => (
                            <MenuItem key={tag} value={tag}> {tag}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions style={{ display: 'flex', justifyContent: 'flex-start' }} sx={{ p: 3, pt: 1 }} >
                <Button variant="contained" sx={{
                    backgroundColor: '#10AC84',
                    fontWeight: 600,
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: '#0E8D6D',
                        boxShadow: 'none',
                    }
                }} onClick={handleSubmit}>Upload Challenge</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}


