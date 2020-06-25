import React from 'react';
import { CardContent, Typography } from '@material-ui/core';

export default function ParametersContent(props) {

    return(
        <CardContent>
            <Typography gutterBottom className={props.classes.cardTitle} variant="h5" component="h2">
                Parameters
            </Typography>
            <Typography variant="body2" className={props.classes.cardDescription} color="textSecondary" component="p">
                Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars. In many ways, it is a big step from someone
            </Typography>
        </CardContent>
    );
}
