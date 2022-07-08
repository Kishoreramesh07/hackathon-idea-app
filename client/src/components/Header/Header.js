import { React, useState } from 'react'
import { Container, AppBar, Box, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal';

export default function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    return (
        <>
            <AppBar position="static" sx={{ background: '#fff', borderBottom: 'solid 1px #e4e4e4', boxShadow: 'none' }}>
                <Container>
                    <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
                        <Box component="img" alt="Scripbox Logo" src="https://asset11.scripbox.com/assets/logo-51c21f8c74532748f6acbc82e354cbe3feb2bb2f8eee49b4ecde59993b2528ba.svg" className='logo'/>
                        <Box className='headerCTA-wrap'>
                            <Button variant="contained" sx={{
                                backgroundColor: '#10AC84',
                                fontWeight: 600,
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#0E8D6D',
                                    boxShadow: 'none',
                                }
                            }} onClick={handleClickOpen}>Add Challenge</Button>
                            <Button onClick={logout}>Logout</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal open={open} setOpen={setOpen} />
        </>
    )
}


