import React, { Component } from 'react';
import { CardContent, Typography, Button, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators } from 'redux';
import { Creators } from '../../../store/actions/trainingActions';
import { connect } from 'react-redux';

const useStyles = () => ({
    uploadField: {
        height: '70%',
        backgroundColor: '#fcfcfc',
        border: '1px dashed #cdcdcd',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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

class ImportDataContent extends Component {
        
    acceptedFiles = ['text/csv'];
    
    onFileUploaded = (e) => {
        let file = e.target.files[0];
        if(!file || !this.acceptedFiles.includes(file.type)){
            alert('Só aceita CSV');
            return;
        }
        
        const reader = new FileReader();

        reader.onload = (e, a) => {
            const csv = e.target.result;
            
            const allTextLines = csv.split(/\r\n|\n/);

            console.log(allTextLines);

            const titles = allTextLines[0]
                .replace(/\s+/g, '')
                .split(',');

            this.props.onReadFile(e.target.fileName, titles);
        }
        
        reader.fileName = file.name;
        reader.readAsText(file);

    }

    render(){
        const { parentClasses, classes } = this.props;

        return(
            <CardContent className={ parentClasses.cardRoot }>
                <div className={ parentClasses.cardHeader }>
                    <Typography gutterBottom className={ parentClasses.cardTitle } variant="h5" component="h2">
                        Import Data
                    </Typography>
                    <Typography variant="body2" className={ parentClasses.cardDescription } color="textSecondary" component="p">
                        Import your dataset. Accepted files: .csv
                    </Typography>
                </div>
    
                <div className={ classes.uploadField }>
                    { !this.props.fileName  && 
                            <div className={ classes.buttonContainer}>
                                <Button className={ classes.button } variant="contained" color="primary" component="label">
                                    <FontAwesomeIcon icon={ faUpload } />
                                    <span style={{ marginLeft: '10px' }}>Adicionar arquivos</span>
                                    <input
                                        type="file"
                                        style={{ display: "none" }}
                                        accept=".csv"
                                        multiple={false}
                                        onChange={ (e)=> this.onFileUploaded(e) }
                                    />
                                </Button>
                                <Typography variant="body2" style={{textAlign: 'center', width: '70%' }} className={ parentClasses.cardDescription } color="textSecondary" component="p">
                                    Clique ou arraste o arquivo para esta área para adicionar documentos
                                </Typography>
            
                            </div>
                    }
                    { this.props.fileName && 
                        <div>
                            <Typography variant="body2" style={{textAlign: 'center', width: '70%', fontWeight: 'bold'  }} color="textSecondary" component="p">
                                { this.props.fileName }
                            </Typography>
                        </div>
                    }
                    
                </div>
            </CardContent>
        );

    }
}

const mapStateToProps = (state) => ({
    fileName: state.trainingReducer.fileName, 
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ImportDataContent));
