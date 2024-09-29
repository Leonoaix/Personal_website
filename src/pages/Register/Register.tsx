import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import personImg from '../../assert/signup_person.png';
import './Register.css';

const Register: React.FC = () => {
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
                        }}
                    >
                        Welcome !
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{ color: '#a6a6a6', marginBottom: '20px' }}
                    >
                        Sign up to your account
                    </Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        style={{ marginBottom: '15px' }}
                    />
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
                    <Button fullWidth className="register-button">
                        Sign Up
                    </Button>
                </div>

                {/* Right part: Person Image */}
                <img src={personImg} alt="Person Illustration" className="register-person-image" />
            </Paper>
        </div>
    );
};

export default Register;
