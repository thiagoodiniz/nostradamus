import React, { Component } from 'react';
import { CardContent, Typography, withStyles } from '@material-ui/core';

const useStyles = () => ({
    root: {
        height: '100%',
    },
    parametersContainer: {
        height: '70%',
        // backgroundColor: '#fcfcfc',
        // border: '1px dashed #cdcdcd',
        // borderRadius: '5px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: '2em'
    }

});
class ParametersContent extends Component{

    render(){
        const { parentClasses, classes } = this.props;

        return(
            <CardContent className={ parentClasses.cardRoot }>
                <div className={ parentClasses.cardHeader }>
                    <Typography gutterBottom className={ parentClasses.cardTitle } variant="h5" component="h2">
                        Parameters
                    </Typography>
                    <Typography variant="body2" className={ parentClasses.cardDescription } color="textSecondary" component="p">
                        Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars. In many ways, it is a big step from someone
                    </Typography>
                </div>
    
                <section className={ classes.parametersContainer }>
                    <div>
                        valores
                    </div>
    
                    <div>
                        <div>target</div>
                        <div>feature</div>
                    </div>
                </section>
    
            </CardContent>
        );
    }
}

export default withStyles(useStyles)(ParametersContent);
