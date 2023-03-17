import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Alert from '@mui/material/Alert';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { forgetPassword } from "../../actions/login";

export default function ForgetPassword() {
  const history = useHistory()
  const error = useSelector(state=> state.error)
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email=data.get('email')
    dispatch(forgetPassword({email}))
  
  };
  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Card sx={{ minWidth: 275, border: "none", boxShadow: "none" }} >
        <CardContent>
          <Typography
            sx={{ fontSize: 25, textAlign: "center" }}
            color="text.primary"
            gutterBottom
          >
            Forgot Password?
          </Typography>

          <Typography color="text.secondary">
            No worries, we'll send you reset instructions
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button type="submit" variant="contained" sx={{ width: "100%" }}>
            Reset Password
          </Button>
          </Box>
        </CardContent>
        <Typography sx={{ textAlign: "center" }}>
          <Link to="/login">Back to login page</Link>
        </Typography>
      </Card>
    </Container>
  );
}
