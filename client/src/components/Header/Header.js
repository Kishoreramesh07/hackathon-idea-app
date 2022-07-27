import { React, useState } from 'react'
import { Container, AppBar, Button, Toolbar, Typography } from '@mui/material';
import Modal from '../Modal/Modal';

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <AppBar position="static" sx={{ background: '#fff', borderBottom: 'solid 1px #e4e4e4', boxShadow: 'none' }}>
                <Container>
                    <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
                        <Typography variant="h5" sx={{color: '#0f0f0f'}}>Hackathon challenges</Typography>
                        <Button variant="contained" sx={{
                            backgroundColor: '#10AC84',
                            fontWeight: 600,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#0E8D6D',
                                boxShadow: 'none',
                            }
                        }} onClick={handleClickOpen}>Add Challenge</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal open={open} setOpen={setOpen} />
        </>
    )
}


