import { React, useState } from 'react'
import { Container, AppBar, Box, Button, Toolbar } from '@mui/material';
import Modal from '../Modal/Modal';

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="static" sx={{ background: '#fff', borderBottom: 'solid 1px #e4e4e4', boxShadow: 'none' }}>
                <Container>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Box component="img" alt="Scripbox Logo" src="https://asset11.scripbox.com/assets/logo-51c21f8c74532748f6acbc82e354cbe3feb2bb2f8eee49b4ecde59993b2528ba.svg" />
                        <Button variant="contained" sx={{
                            backgroundColor: '#10AC84',
                            fontWeight: 600,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#0E8D6D',
                                boxShadow: 'none',
                            }
                        }} onClick={handleClickOpen}>Upload</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal open={open} handleClose={handleClose} />
        </>
    )
}


