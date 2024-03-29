import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import Alert from '@mui/material/Alert';
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { resetPassword } from "../../actions/login";
import { RESET_LOGIN_ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../constants/actionTypes";

export default function ResetPassword() {
    const history = useHistory()
  const error = useSelector(state=> state.error)
  const message = useSelector(state=> state.flashMessage)
  const dispatch = useDispatch()
  const token = useParams().token;
  useEffect(() => {
    dispatch({ type: RESET_LOGIN_ERROR_MESSAGE, message:"" })
    dispatch({ type: SUCCESS_MESSAGE, value: "" })
  }, [])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password=data.get('password')
    const confirmPassword=data.get('confirmPassword')
    dispatch(resetPassword(token, password, confirmPassword, history))
  };
    return (
      <Container maxWidth="xs" sx={{ mt: 10 }}>
        <Card sx={{ minWidth: 275, border: "none", boxShadow: "none" }} component="form" onSubmit={handleSubmit} noValidate>
          <CardContent>
            <Typography
              sx={{ fontSize: 25, textAlign: "center" }}
              color="text.primary"
              gutterBottom
            >
              Set New Password
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              type="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              type="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              autoComplete="password"
              autoFocus
            />
            <Button type="submit" variant="contained" sx={{ width: "100%" }}>
              Reset Password
            </Button>
          </CardContent>
          <Typography sx={{ textAlign: "center" }}>
            <Link to="/login">Back to login page</Link>
          </Typography>
        </Card>
      </Container>
    );
}
