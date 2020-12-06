import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {useSnackbar} from "notistack";
import Container from "@material-ui/core/Container";
import Post from "./Post";
import {fetchPosts, setUser} from "../../redux/actions";
import {getUserById} from "../../requests/userRequests";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../style";

const Posts = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory();
    const {redirectFrom} = useLocation();
    const { enqueueSnackbar } = useSnackbar();
    const posts = useSelector(state => state.posts.posts)
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        if(!user.id && !localStorage.userId){
            history.push('/login');
        } else if(!user.id && localStorage.userId){
            const getUser = async () => {
                const user = await getUserById(localStorage.userId)
                dispatch(setUser(user))
                dispatch(fetchPosts())
                enqueueSnackbar(`Hello ${user.username}!`, {variant: "info"})
            }
            getUser()
        } else if(user.id){
            if(redirectFrom !== 'fromComment') {
                dispatch(fetchPosts())
                enqueueSnackbar(`Hello ${user.username}!`, {variant: "info"})
            }
        }
    }, [])

    const logOut = () => {
        delete localStorage.userId;
        dispatch(setUser({}));
        history.push('/login');
    }

    return(
        <Container component="main" maxWidth="md">
            <div className={classes.spaceBetween}>
                <h1>Posts</h1>
                <div>
                    <Button color="secondary" onClick={logOut}>Log out</Button>
                </div>
            </div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </Container>
    )
}

export default Posts