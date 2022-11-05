import React from 'react';
import { useFormik} from 'formik';
import {LoginRequest} from '../../../models/auth';
import {setCredentials} from '../../../redux/slice/authSlice';
import {authApiQuery} from '../../../redux/api/authApi';
import {useDispatch} from 'react-redux';
import Box from '@mui/material/Box/Box';
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate} from 'react-router';

const Loginn = () => {
    const [login] = authApiQuery.useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogin(loginRequest: LoginRequest) {
        const reosponse = await login(loginRequest).unwrap();
        dispatch(setCredentials({
            token: reosponse.token,
            user: reosponse.user,
            refreshToken: reosponse.refreshToken
        }));
        if (reosponse.token) {
            navigate('/dashboard');
        }
    }

    const formik = useFormik<LoginRequest>({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit(values: LoginRequest): void | Promise<any> {
            return handleLogin(values);
        },

    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <Box sx={{mt: 1}}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='User name'
                        name='username'
                        autoComplete='username'
                        autoFocus
                        onChange={formik.handleChange}
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={formik.handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary'/>}
                        label='Remember me'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='#' variant='body2'>
                                {'Don\'t have an account? Sign Up'}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </form>
    );
};

export default Loginn;
