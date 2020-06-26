import React, { Component } from 'react';
import { CardContent, Typography, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = () => ({
    parametersContainer: {
        height: '70%',
        display: 'flex',    
        justifyContent: 'space-between',
    },
    borderDashed: {
        backgroundColor: '#fcfcfc',
        border: '1px dashed #cdcdcd',
        borderRadius: '5px',
        '& > div':{
            padding: '12px',
            fontSize: '12px',
            '& > .title': {
                fontWeight: 'bold'
            }
        }
    },
    values: {       
        width: '30%',
        border: '1px solid #cdcdcd',
    },

    nestedContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '65%',
    },
    target: {
        height: '35%',
    },
    feature: {
        height: '60%',
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
                    <div className={`${classes.borderDashed} ${classes.values}`}>
                        <div>
                            <span className="title">Valores</span>
                            { this.props.columns }
                        </div>
                    </div>
    
                    <div className={ classes.nestedContainer }>
                        <div className={`${classes.borderDashed} ${classes.target}`}>
                            <div>
                                <span className="title">Target</span>
                            </div>
                        </div>
                        
                        <div className={`${classes.borderDashed} ${classes.feature}`}>
                            <div>
                                <span className="title">Feature</span>
                            </div>
                        </div>
                    </div>

                </section>
    
            </CardContent>
        );
    }
}

const mapStateToProps = (state) => ({
    columns: state.trainingReducer.columns
});

export default connect(mapStateToProps, null)(withStyles(useStyles)(ParametersContent));
