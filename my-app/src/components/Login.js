import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  margin: 'auto',
  marginTop: theme.spacing(8),
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your authentication logic here
    console.log(`Login with Email: ${email}, Password: ${password}`);

    // Assume authentication is successful for the sake of this example
    // You should replace this with your actual authentication logic
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Redirect to the home page after successful login
      navigate('/');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <StyledForm onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Login
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </Container>
  );
};

export default LoginPage;
