import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import ImportDataContent from './Contents/ImportDataContent';
import ParametersContent from './Contents/ParametersContent';
import TrainingContent from './Contents/TrainingContent';

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
        fontSize: '16px',
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: '10px'
    },
    cardRoot: {
        height: '100%'
    },
    cardHeader: {
        height: '17%'
    }
});

export default function Trainings() {

    const classes = useStyles();
    
    return(
        <section className={classes.root}>

            <Card className={classes.uploadCard}>
                <ImportDataContent parentClasses={classes} />
            </Card>

            <Card className={classes.parametersCard}>
                <ParametersContent parentClasses={classes} />
            </Card>

            <Card className={classes.trainingCard}>
                <TrainingContent classes={classes} />
            </Card>
        </section>
    );
}
