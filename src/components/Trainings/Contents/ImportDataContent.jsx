import React, { useState, useEffect } from 'react';
import { CardContent, Typography, Button, withStyles, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Creators } from '../../../store/actions/trainingActions';
import { useSelector, useDispatch } from 'react-redux';

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

function ImportDataContent(props){
    const [file, setFile] = useState(undefined)
    const [separator, setSeparator] = useState(",")
    const processId = useSelector(state => state.trainingReducer.processId)
    const fileName = useSelector(state => state.trainingReducer.fileName)
    const acceptedFiles = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const { parentClasses, classes } = props
    const dispatch = useDispatch()

    
    const onFileUploaded = (e) => {
        let file = e.target.files[0];
        if(!file || !acceptedFiles.includes(file.type)){
            alert('Só aceita CSV');
            return;
        }
        
        dispatch(Creators.uploadFile(file))
        setFile(file);
    }

    const handleChange = (e) => {
        setSeparator(e.target.value)
    }

    useEffect(() => {
        if(processId && !fileName){

            const reader = new FileReader();

            reader.onload = (e) => {
                const csv = e.target.result;
                console.log(csv)
                const allTextLines = csv.replace(/"/g, '').split(/\r\n|\n/);
                // const allTextLines = csv.split("");
                const columnsValue = []

                console.log(allTextLines)

                // const titles = allTextLines[0]
                //     .replace(/\s+/g, '')
                //     .split(',');

                const columns = allTextLines.map((item, idx) => {
                    let col = item
                            //   .replace(/\s+/g, '')
                              .split(separator);
                  
                    return col
                })

                console.log(columns)

                columns.forEach((item, idx)=> {
                    if (idx === 0) {
                      item.forEach((col, key) => {
                        columnsValue.push([item[key]])
                      })
                    }
                    columnsValue.forEach((col, key) => {
                      idx !== 0 && col.push(item[key])
                    })
                })


                // console.log(columnsValue)
    
                const fileName = e.target.fileName;

                dispatch(Creators.onUploadFileSuccess(fileName, columnsValue));
            }

            reader.fileName = file.name;

            reader.readAsText(file);
        }
    }, [processId, fileName, file, dispatch, separator])


    return(
        <CardContent className={ parentClasses.cardRoot }>
            <div className={ parentClasses.cardHeaderModify2 }>
                <Typography gutterBottom className={ parentClasses.cardTitle } variant="h5" component="h2">
                    Import Data
                </Typography>
                <Typography variant="body2" className={ parentClasses.cardDescription } color="textSecondary" component="p">
                    Import your dataset. Accepted files: .csv
                </Typography>
            </div>

            <div className={ parentClasses.cardHeaderModify3 }>
                <FormControl component="fieldset">
                    <Typography gutterBottom className={ parentClasses.cardTitle } variant="h3" component="h3">
                        Separator
                    </Typography>
                    <RadioGroup row aria-label="separator" name="separator1" value={separator} onChange={handleChange}>
                        <FormControlLabel value="," control={<Radio color="primary" />} label="," />
                        <FormControlLabel value=";" control={<Radio color="primary" />} label=";" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className={ classes.uploadField }>
                { !fileName  && 
                        <div className={ classes.buttonContainer}>
                            <Button className={ classes.button } variant="contained" color="primary" component="label">
                                <FontAwesomeIcon icon={ faUpload } />
                                <span style={{ marginLeft: '10px' }}>Adicionar arquivos</span>
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                    accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                    multiple={false}
                                    onChange={ (e)=> onFileUploaded(e) }
                                />
                            </Button>
                            <Typography variant="body2" style={{textAlign: 'center', width: '70%' }} className={ parentClasses.cardDescription } color="textSecondary" component="p">
                                Clique ou arraste o arquivo para esta área para adicionar documentos
                            </Typography>
        
                        </div>
                }
                { fileName && 
                    <div>
                        <Typography variant="body2" style={{textAlign: 'center', width: '70%', fontWeight: 'bold', margin: '0 auto'  }} color="textSecondary" component="p">
                            { fileName }
                        </Typography>
                    </div>
                }
                
            </div>
        </CardContent>
    );

}


export default (withStyles(useStyles)(ImportDataContent));
