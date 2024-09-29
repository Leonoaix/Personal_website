import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import personImg from '../../assert/signup_person.png'; // Reusing the person image
import './ForgotPassword.css'; // Import your custom CSS file

const ForgotPassword: React.FC = () => {
    return (
        <div className="register-page">
            <Paper className="register-form-container" elevation={3}>
                {/* Left part: Form */}
                <div className="register-form">
                    <Typography
                        variant="h3"
                        style={{
                            fontFamily: 'Verdana',
                            fontWeight: 'bold',
                            color: '#6C63FF',
                            marginBottom: '10px',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Forgot Password?
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{ color: '#a6a6a6', marginBottom: '20px' }}
                    >
                        Enter your email to reset your password
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        style={{ marginBottom: '15px' }}
                    />
                    <Button fullWidth className="register-button">
                        Send Reset Link
                    </Button>
                    <Typography
                        variant="caption"
                        style={{
                            color: '#a6a6a6',
                            textAlign: 'center',
                            cursor: 'pointer',
                            marginTop: '20px',
                        }}
                        onClick={() => {
                            window.location.href = '/login'; // Redirect to login page
                        }}
                    >
                        Go back to Login
                    </Typography>
                </div>

                {/* Right part: Person Image */}
                <img src={personImg} alt="Person Illustration" className="register-person-image" />
            </Paper>
        </div>
    );
};

export default ForgotPassword;
