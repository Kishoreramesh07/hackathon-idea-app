import React from "react";
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, AppBar, Box, Button, Toolbar, Grid } from '@mui/material';
import ChallengeCard from "./components/ChallengeCard/ChallengeCard";

const theme = createTheme({
  typography: {
    color: "#5a5b75",
    fontFamily: [
      'Lato',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
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
              }}>Upload</Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <ChallengeCard />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
