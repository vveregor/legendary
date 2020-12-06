import React from 'react';
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from "../../style";
import LoginForm from "./LoginForm";
import {setUser} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {getUserByNameEmail} from "../../requests/userRequests";
import {useSnackbar} from "notistack";

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = async data => {
        const user = await getUserByNameEmail(data)
        if(user){
            dispatch(setUser(user))
            localStorage.userId = user.id
            history.push('/posts');
        } else {
            enqueueSnackbar('Invalid email or username', {variant: "warning"})
        }
    }

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginForm onSubmit={onSubmit}/>
                <div className={classes.helperLink}>
                    <a href="https://jsonplaceholder.typicode.com/users" target='_blank'>Forget email or username?</a>
                </div>
            </div>
        </Container>
    )
}

// export default Login

export default Login