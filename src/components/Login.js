import {
    Container,
    Grid,
    Avatar,
    Paper,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Typography,
} from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import "./Login.css";
import { useState } from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import {Link, useNavigate} from "react-router-dom";



const Login = () => {
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const gap = { margin: "10px 0" };

    const navigate = useNavigate();

    const [users] = useLocalStorage('users');

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    //from register
    const handleFormSubmit = (e) => {
        e.preventDefault();
        users.forEach(user => {
            if(user.email === values.email && user.password === values.password) {
                navigate('/');
            }
        })
        
    };
    
    //from register
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container className="container" alignItems="center"
        justify="center" style={{ minHeight: '100vh' }}>
            <Grid align="center">
                <Paper className="paper" elevation={10}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <LockOpenOutlinedIcon />
                        </Avatar>
                        <h1 className="h1">Sign In</h1>
                    </Grid>
                    <TextField
                        style={gap}
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        required
                        value={values.email}
                        onChange={handleChange}
                    />
                    <TextField
                        style={gap}
                        id="outlined-basic"
                        label="Password"
                        type="password"
                        name="password"
                        variant="outlined"
                        fullWidth
                        required
                        value={values.password}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox name="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={handleFormSubmit}
                    >
                        Sign In
                    </Button>

                    <Typography style={gap}>
                        <Link to="/forgot">Forgot Password</Link>
                    </Typography>
                    <Typography>
                        Don't have an account?
                        <Link to="/register">Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </Container>
    );
};

export default Login;
