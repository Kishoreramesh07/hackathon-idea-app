import { React } from "react";
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ProtectedRoutes from './components/Routes/ProtectedRoutes';
import PublicRoutes from './components/Routes/PublicRoutes';

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
        <BrowserRouter>
          <Routes>
            {/** Protected Routes */}
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<Navigate replace to="challenges" />} />
              <Route path="challenges" element={<Home />} />
            </Route>

            {/** Public Routes */}
            <Route path="login" element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
