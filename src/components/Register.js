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
import "./Register.css";
import { useState, useEffect } from "react";
import FormValidation from "./FormValidation";
import useLocalStorage from "../hooks/useLocalStorage";
import {Link, useNavigate} from 'react-router-dom';


const Register = () => {
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const gap = { margin: "10px 0" };

    const [values, setValues] = useState({
        first: "",
        last: "",
        email: "",
        password: "",
    });

    const [users, setUsers] = useLocalStorage("users", []);

    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const _errors = FormValidation(values);
        if (Object.keys(_errors).length > 0) {
            setErrors(_errors);
        } else {
            setDataIsCorrect(true);
            setUsers([...users, values]);
            navigate('/login');
        }
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && dataIsCorrect) {
    //         submitForm(true);
    //     }
    // }, [errors]);

    return (
        <Container>
            {/* {Object.keys(errors).length === 0 && dataIsCorrect ? (
                <div>Registered</div>
            ) : (
                <div>{JSON.stringify(values.email, undefined, 2)}</div>
            )} */}

            <Grid align="center">
                <Paper className="paper" elevation={10}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <LockOpenOutlinedIcon />
                        </Avatar>
                        <h1 className="h1">Register</h1>
                    </Grid>
                    <TextField
                        style={gap}
                        id="outlined-basic"
                        label="First Name"
                        name="first"
                        variant="outlined"
                        fullWidth
                        required
                        value={values.first}
                        onChange={handleChange}
                    />
                    {errors.first && <p className="error">{errors.first}</p>}
                    <TextField
                        style={gap}
                        id="outlined-basic"
                        label="Last Name"
                        name="last"
                        variant="outlined"
                        fullWidth
                        required
                        value={values.last}
                        onChange={handleChange}
                    />
                    {errors.last && <p className="error">{errors.last}</p>}
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
                    {errors.email && <p className="error">{errors.email}</p>}
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
                    {errors.password && (
                        <p className="error">{errors.password}</p>
                    )}
                    {/* <TextField
                        style={gap}
                        id="outlined-basic"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                    /> */}

                    <Button
                        style={gap}
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={handleFormSubmit}
                    >
                        Register
                    </Button>

                    <Typography>
                        Already have an account?
                        <Link to="/login">Sign In</Link>
                    </Typography>
                </Paper>
            </Grid>
        </Container>
    );
};

export default Register;
