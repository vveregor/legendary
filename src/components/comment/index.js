import React from "react";
import {Link, useLocation} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {useStyles} from "../../style";

export default function PostComment(){
    const classes = useStyles();
    const {state: { text = '' }} = useLocation();

    return(
        <Container component="main" maxWidth="md">
            <div>
                <Link
                    to={{
                    pathname: `/posts`,
                    redirectFrom: 'fromComment',
                }}>
                    <ArrowBackIcon />
                </Link>
            </div>
            <h1>Comment</h1>
            <Card className={classes.root}>
                <CardContent>
                    {text}
                </CardContent>
            </Card>
        </Container>
    )
}