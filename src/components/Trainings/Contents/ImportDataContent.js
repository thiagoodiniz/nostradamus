import React from 'react';
import { CardContent, Typography } from '@material-ui/core';

export default function ImportDataContent(props) {
    
    return(
        <CardContent>
            <Typography gutterBottom className={props.classes.cardTitle} variant="h5" component="h2">
                Import Data
            </Typography>
            <Typography variant="body2" className={props.classes.cardDescription} color="textSecondary" component="p">
                Import your dataset. Accepted files: .csv
            </Typography>
        </CardContent>
    );
}
