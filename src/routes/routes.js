import Main from "../components/main/main";
import Login from "../components/login/login";
import Posts from "../components/posts/posts";
import PostComment from "../components/comment";

export const routes = [
    { path: '/', component: Main, exact: true, auth: true },
    { path: '/posts', component: Posts, auth: true },
    { path: '/comment/:id', component: PostComment, auth: true },
    { path: '/login', component: Login },
]