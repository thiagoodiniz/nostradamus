import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: '25rem',
        display: 'flex',
        justifyContent: 'space-between'
    },
    uploadCard: {
        width: '25%',
        height: '100%',
    },
    parametersCard: {
        width: '40%',
        height: '100%',
    },
    trainingCard: {
        width: '30%',
        height: '100%',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: '10px'
    }
  });
export default function Trainings() {

    const classes = useStyles();
    
    return(
        <section className={classes.root}>

            <Card className={classes.uploadCard}>
                <CardContent>
                    <Typography gutterBottom className={classes.cardTitle} variant="h5" component="h2">
                        Import Data
                    </Typography>
                    <Typography variant="body2" className={classes.cardDescription} color="textSecondary" component="p">
                        Import your dataset. Accepted files: .csv
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.parametersCard}>
                <CardContent>
                    <Typography gutterBottom className={classes.cardTitle} variant="h5" component="h2">
                        Parameters
                    </Typography>
                    <Typography variant="body2" className={classes.cardDescription} color="textSecondary" component="p">
                        Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars. In many ways, it is a big step from someone
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.trainingCard}>
                <CardContent>
                    <Typography gutterBottom className={classes.cardTitle} variant="h5" component="h2">
                        Training
                    </Typography>
                    <Typography variant="body2" className={classes.cardDescription} color="textSecondary" component="p">
                        Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars. In many ways, it is a big step from someone
                    </Typography>
                </CardContent>
            </Card>
        </section>
    );
}
