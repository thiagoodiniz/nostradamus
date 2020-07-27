import { call, put } from 'redux-saga/effects'
import { services } from '../../services'
import { Creators as TrainingActions } from '../actions/trainingActions'
import { Creators as AlertActions } from '../actions/AlertActions'

export function* uploadFileRequest(action){
    try{
        const uploadFileResponse = yield call(services.uploadFile, action.file);

        const processId = uploadFileResponse.process_id;
        if(processId){
            yield put(TrainingActions.uploadFileSuccess(processId, action.file));
        } else {
            yield put(TrainingActions.uploadFileFailure());
        }

    } catch(err){
        console.log(err);
        yield put(TrainingActions.uploadFileFailure());
        yield put(AlertActions.showMessage('Erro no servidor. Tente novamente mais tarde.','error'));
    }
} 
