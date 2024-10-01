import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Link } from '@mui/material';

interface KeycloakLoginProps {
  logoSrc: string;
  backgroundVideoSrc: string;
  onLogin: (email: string, password: string) => void;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
}

export const KeycloakLogin: React.FC<KeycloakLoginProps> = ({
  logoSrc,
  backgroundVideoSrc,
  onLogin,
  onForgotPassword,
  onCreateAccount,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <Box sx={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={backgroundVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '90%',
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '24px',
        }}
      >
        <img src={logoSrc} alt="Guardian One Logo" style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '24px' }} />
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          required
          id="email"
          label="EMAIL OR USER NAME"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 2,
            '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255, 255, 255, 0.42)' },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'rgba(255, 255, 255, 0.87)' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'rgba(255, 255, 255, 0.6)' },
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          variant="standard"
          margin="normal"
          required
          name="password"
          label="PASSWORD"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 2,
            '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255, 255, 255, 0.42)' },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'rgba(255, 255, 255, 0.87)' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'rgba(255, 255, 255, 0.6)' },
            shrink: true,
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: '#D32F2F',
            '&:hover': {
              backgroundColor: '#B71C1C',
            }
          }}
        >
          Sign In
        </Button>
        <Link
          component="button"
          variant="body2"
          onClick={onForgotPassword}
          sx={{ color: '#D32F2F', mb: 2, textDecoration: 'none' }}
        >
          Forgot your password?
        </Link>
        <Button
          fullWidth
          variant="outlined"
          onClick={onCreateAccount}
          sx={{
            color: '#D32F2F',
            borderColor: '#D32F2F',
            '&:hover': {
              borderColor: '#B71C1C',
              backgroundColor: 'transparent',
            }
          }}
        >
          Create Account
        </Button>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Link href="#" color="rgba(255, 255, 255, 0.6)" sx={{ mr: 2, fontSize: '0.75rem' }}>
            Terms and Conditions
          </Link>
          <Link href="#" color="rgba(255, 255, 255, 0.6)" sx={{ fontSize: '0.75rem' }}>
            Privacy Policy
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default KeycloakLogin;
