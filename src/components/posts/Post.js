import React from "react";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../style";

export default ({post}) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography>
                    {post.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    to={{
                        pathname: `/comment/${post.id}`,
                        state: { text: post.body },
                    }}
                >
                    <Button size="small">Show comment</Button>
                </Link>
            </CardActions>
        </Card>
    )
}
