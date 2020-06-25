import React from 'react';
import { CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    root: {
        height: '100%',
    },
    uploadField: {
        height: '70%',
        backgroundColor: '#fcfcfc',
        border: '1px dashed #cdcdcd',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2em'
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        maxHeight: '2.5em',
        textTransform: 'none',
        width: '70%',
        fontSize: '12px', 
        marginBottom: '5px'

    },

});

export default function ImportDataContent(props) {
    const classes = useStyles();

    return(
        <CardContent className={ classes.root }>
            <Typography gutterBottom className={props.classes.cardTitle} variant="h5" component="h2">
                Import Data
            </Typography>
            <Typography variant="body2" className={props.classes.cardDescription} color="textSecondary" component="p">
                Import your dataset. Accepted files: .csv
            </Typography>

            <div className={ classes.uploadField }>
                <div className={classes.buttonContainer}>
                    <Button className={ classes.button } variant="contained" color="primary">
                        <FontAwesomeIcon icon={ faUpload } />
                        <span style={{ marginLeft: '10px' }}>Adicionar arquivos</span>
                    </Button>
                    <Typography variant="body2" style={{textAlign: 'center', width: '70%' }} className={props.classes.cardDescription} color="textSecondary" component="p">
                        Clique ou arraste o arquivo para esta área para adicionar documentos
                    </Typography>
                </div>
            </div>
        </CardContent>
    );
}
