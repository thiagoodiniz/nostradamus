import { Types } from "../actions/trainingActions";

const INITIAL_STATE = {
    fileName: '',
    columns: [],
    step: 0,
    loading: false,
    error: false,
    processId: undefined,
    target: [],
    feature: [],
    date: [],
    resample: ''
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
                target: [],
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
                target: []
            }
        }

        case Types.DROP_COLUMN_ON_PARAMETER: {
            return {
                ...state,
                [action.parameter]: [ ...state[action.parameter], action.column ],
                columns: state.columns.filter((item) => item[0] !== action.column[0])
            }
        }

        case Types.MODIFY_RESAMPLE_PARAMETER: {
            return {
                ...state,
                resample: action.value
            }
        }

        default:
            return state
     }
 }