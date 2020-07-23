import { call, put } from 'redux-saga/effects'
import { services } from '../../services'
import { Creators as TrainingActions } from '../actions/trainingActions'

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
    }
} 
