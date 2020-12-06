import {useStyles} from "../../style";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "./RenderTextField";
import Button from "@material-ui/core/Button";
import React from "react";

const LoginForm = (props) => {
    const classes = useStyles();

    return(
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field
                component={renderTextField}
                name='email'
                variant="outlined"
                margin="normal"
                fullWidth
                type='text'
                label="Email"
            />
            <Field
                component={renderTextField}
                variant="outlined"
                margin="normal"
                fullWidth
                type='text'
                label="Username"
                name='username'
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
        </form>
    )
}
export default reduxForm({form: 'login'})(LoginForm)