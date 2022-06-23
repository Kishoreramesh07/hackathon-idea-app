import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';

export default function Login() {
    const [employeeId, setEmployeeId] = useState();
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [validationError, setValidationError] = useState(null);

    const navigate = useNavigate();

    const updateEmployeeId = () => {
        if (!employeeId) {
            setOpenSnackBar(true);
            setValidationError('EmployeeId is a required field');
        } else if (isNaN(employeeId)) {
            setOpenSnackBar(true);
            setValidationError('Please enter only numeric value');
        } else if (employeeId <= 100 || employeeId >= 300) {
            setOpenSnackBar(true);
            setValidationError('Please enter employeeid only between 100 - 300');
        } else {
            setOpenSnackBar(false);
            sessionStorage.setItem("employeeId", employeeId);
            navigate('/challenges');
        }
    };

    return (
        <Box>
            <Dialog open={true} fullWidth maxWidth="xs">
                <DialogTitle>Enter Employee ID</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" id="name" label="Employee ID" type="text" fullWidth variant="outlined" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} sx={{ background: '#f7f7fa', color: '#495057' }} inputProps={{ maxLength: 3 }}/>
                </DialogContent>
                <>{console.log(isNaN(employeeId))}</>
                <DialogActions sx={{ justifyContent: 'center', pb: '24px' }}>
                    <Button onClick={updateEmployeeId} variant="contained" sx={{
                        backgroundColor: '#10AC84',
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#0E8D6D',
                        }
                    }}>Login</Button>
                </DialogActions>
            </Dialog>
            {validationError && <Snackbar autoHideDuration={3000} open={openSnackBar} message={validationError} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={() => setOpenSnackBar(false)} />}
        </Box>
    );
}
