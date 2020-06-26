import React, { Component } from 'react';
import { CardContent, Typography, withStyles, Button } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = () => ({
    parametersContainer: {
        height: '65%',
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
    },
    columnItemContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '15rem',
        flexWrap: 'wrap',
    },
    columnItem: {
        width: '40%',
        backgroundColor: '#ffffff',
        border: '1px solid #cdcdcd',
        padding: '2px 5px',
        margin: '5px 5px 5px 0',
        borderRadius: '5px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    button: {
        maxHeight: '2.5em',
        textTransform: 'none',
        width: '25%',
        fontSize: '12px', 
        float: 'right',
        marginTop: '10px'
    },
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
                            <div className={ classes.columnItemContainer }>
                                { this.props.columns.map((col, idx) =>
                                    <div className={ classes.columnItem } key={ idx } title={ col }>
                                        <span>
                                            { col }
                                        </span>
                                    </div>
                                )}
                            </div>
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

                    <Button className={ classes.button } variant="contained" color="primary" component="label">
                        Próximo
                    </Button>
    
            </CardContent>
        );
    }
}

const mapStateToProps = (state) => ({
    columns: state.trainingReducer.columns
});

export default connect(mapStateToProps, null)(withStyles(useStyles)(ParametersContent));
