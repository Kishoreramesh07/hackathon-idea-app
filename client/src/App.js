import { React, useEffect } from "react";
import './App.css';
import { useDispatch } from 'react-redux';
import { getChallenges } from './redux/actions/challenges'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "./components/Header/Header";
import Challenges from "./components/Challenges/Challenges";

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
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getChallenges());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Challenges />
      </div>
    </ThemeProvider>
  );
}

export default App;
