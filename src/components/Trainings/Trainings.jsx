import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import ImportDataContent from './Contents/ImportDataContent';
import ParametersContent from './Contents/ParametersContent';
import TrainingContent from './Contents/TrainingContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        height: '27rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    defaultCard: {
        width: '100%',
        height: '100%',
        position: 'relative'
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
    },

    checkIcon: {
        color: '#3f51b5',
        position: 'absolute',
        right: '5px',
        top: '5px'
    }
});

export default function Trainings() {
    const activeStep = useSelector(state => state.trainingReducer.step);
    
    const classes = useStyles();
    
    return(
        <section className={classes.root}>

            <Card className={`${classes.defaultCard} ${classes.uploadCard} `}>
                <ImportDataContent parentClasses={classes} />

                { activeStep > 0 && 
                    <FontAwesomeIcon className={ classes.checkIcon } size='lg' icon={ faCheckCircle } />
                }

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
