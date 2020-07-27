import { Types } from "../actions/trainingActions";

const INITIAL_STATE = {
    fileName: '',
    columns: [],
    step: 0,
    loading: false,
    error: false,
    processId: undefined,
 }

 export default function trainingReducer(state=INITIAL_STATE, action) {
     switch(action.type){
        case Types.UPLOAD_FILE: {
            return {
                ...state,
                loading: true,
                error: false,
                processId: undefined,
                fileName: '',
                columns: [],
            }
        }

        case Types.UPLOAD_FILE_SUCCESS: {
            return {
                ...state,
                loading: false,
                errorMessage: false,
                processId: action.processId,
                step: 1,
            }
        }

        case Types.UPLOAD_FILE_FAILURE: {
            return {
                ...state,
                loading: false,
                errorMessage: true,            
            }
        }

        case Types.ON_UPLOAD_FILE_SUCCESS: {
            return {
                ...state,
                fileName: action.fileName,
                columns: action.columns,
            }
        }

        default:
            return state
     }
 }