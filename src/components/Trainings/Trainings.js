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
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    defaultCard: {
        width: '100%',
        height: '100%',
        marginBottom: '5%'
    },
    uploadCard: {
        "@media (min-width: 1280px)": {
            width: '25%',
        },
    },
    parametersCard: {
        "@media (min-width: 1280px)": {
            width: '40%',
        },
    },
    trainingCard: {
        "@media (min-width: 1280px)": {
            width: '30%',
        },
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

            <Card className={`${classes.defaultCard} ${classes.uploadCard} `}>
                <ImportDataContent parentClasses={classes} />
            </Card>

            <Card className={`${classes.defaultCard} ${classes.parametersCard} `}>
                <ParametersContent parentClasses={classes} />
            </Card>

            <Card className={`${classes.defaultCard} ${classes.trainingCard} `}>
                <TrainingContent classes={classes} />
            </Card>
        </section>
    );
}
