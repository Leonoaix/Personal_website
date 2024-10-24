import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import personImg from '../../assert/signup_person.png';
import './Login.css';

const Login: React.FC = () => {
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
                        Welcome Back!
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{ color: '#a6a6a6', marginBottom: '20px' }}
                    >
                        Sign in to your account
                    </Typography>
                    <TextField
                        label="Email/Account"
                        variant="outlined"
                        fullWidth
                        style={{ marginBottom: '15px' }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        style={{ marginBottom: '15px' }}
                    />
                    <Typography
                        variant="caption"
                        style={{ color: '#a6a6a6', textAlign: 'right', cursor: 'pointer' }}
                        onClick={() => {
                            window.location.href = '/forgot-password';
                        }}
                    >
                        Forgot my password
                    </Typography>
                    <Button fullWidth className="register-button">
                        Sign In
                    </Button>
                </div>

                {/* Right part: Person Image */}
                <img src={personImg} alt="Person Illustration" className="register-person-image" />
            </Paper>
        </div>
    );
};

export default Login;
