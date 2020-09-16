import React from 'react';
import { CardContent, Typography, withStyles, Button, Select, FormControl } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Columns from './ColumnsContent'
import { Creators } from '../../../store/actions/trainingActions'
import Parameter from './Parameters/Parameter'

const useStyles = () => ({
    parametersContainer: {
        height: '70%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridGap: '10px'
    },
    borderDashed: {
        backgroundColor: '#fcfcfc',
        border: '1px dashed #cdcdcd',
        borderRadius: '5px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        padding: '10px',
        boxSizing: 'border-box',
        '& > div':{
            fontSize: '12px',
            '&.dropField':{
                overflowY: 'auto',
                maxHeight: '68px',
                '&::-webkit-scrollbar-track':{
                    borderRadius: '6px',
                    backgroundColor: '#afafaf4f'
                },
                '&::-webkit-scrollbar':{
                    width: '6px',
                    height: '6px'
                },
                '&::-webkit-scrollbar-thumb':{
                    borderRadius: '6px',
                    backgroundColor: '#AFAFAF'
                }
            },
            '& > .title': {
                fontWeight: 'bold'
            }
        }
    },
    values: {       
        // width: '30%',
        border: '1px solid #cdcdcd',
        width: "100%"
    },

    nestedContainer: {
        display: 'grid',
        width: "100%",
        gridTemplateRows: "25% 25% 25% 15%",
        gridGap: '13px'
    },
    target: {
        // height: '15%',
    },
    feature: {
        // height: '40%',
    },
    resample: {
        border: '1px solid #cdcdcd',
        // height: '10%'
    },
    columnItemContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '15.5rem',
        flexWrap: 'wrap',
    },
    columnItem: {
        width: '66px',
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
    formControl: {
        minWidth: 120,
    },
    dropTitle: {
        // padding: '12px 12px 0 12px'
    }
});
function ParametersContent(props){

    const { parentClasses, classes  } = props
    const columns = useSelector(state => state.trainingReducer.columns)
    const resample = useSelector(state => state.trainingReducer.resample)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(Creators.modifyResambleParameter(e.target.value))
    }

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
                            { columns.map((col, idx) =>
                                <Columns key={idx} idx={ idx } col={col} />
                            )}
                        </div>
                    </div>
                </div>

                <div className={ classes.nestedContainer }>
                    <div className={`${classes.borderDashed} ${classes.target}`}>
                        <div className={classes.dropTitle}>
                            <span className="title">Target</span>
                        </div>
                        <Parameter classes={classes} nameParameter="target" />
                    </div>
                    
                    <div className={`${classes.borderDashed} ${classes.feature}`}>
                        <div>
                            <span className="title">Feature</span>
                        </div>

                        <Parameter classes={classes} nameParameter="feature" />
                    </div>

                    <div className={`${classes.borderDashed} ${classes.date}`}>
                        <div className="dropTitle">
                            <span className="title">Date</span>
                        </div>
                        <Parameter classes={classes} nameParameter="date" />
                    </div>

                    <div className={`${classes.borderDashed} ${classes.resample}`}>
                        <div className="dropTitle">
                            <span className="title">Resample</span>
                        </div>
                        <div>
                        <FormControl className={classes.formControl}>
                            <Select
                                native
                                value={resample}
                                onChange={handleChange}
                                >
                                <option aria-label="None" value="" />
                                <option value={'M'}>M</option>
                                <option value={'D'}>D</option>
                                <option value={'W'}>W</option>
                            </Select>
                        </FormControl>
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


export default (withStyles(useStyles)(ParametersContent));
