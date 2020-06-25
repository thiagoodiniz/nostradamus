import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 7px)',
    right: 'calc(50% + 7px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 2,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(activeStep, props) {
  const classes = useQontoStepIconStyles();
  const { active, icon } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active || icon <= activeStep,
      })}
    >
      <div className={classes.circle} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
    '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel':{
        marginTop: 'unset',
    }
  }
}));

export default function ProgressLine() {
  const classes = useStyles();
  const [activeStep] = React.useState(1);
  const steps = ['Import', 'Define Parameter', 'Training', 'Forecast'];

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

  return (
    <div className={classes.root}>

      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon.bind(this, activeStep)}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* <button onClick={handleBack}>PREV</button>
      <button onClick={handleNext}>NEXT</button> */}

    </div>
  );
}