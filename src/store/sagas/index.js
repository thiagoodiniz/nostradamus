import {takeLatest, all } from 'redux-saga/effects'
import { Types } from '../actions/trainingActions'
import { uploadFileRequest  } from './training'

export default function* rootSaga() {
    return yield all([
        takeLatest(Types.UPLOAD_FILE, uploadFileRequest),
    ]);
}