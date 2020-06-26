import { Types } from "../actions/trainingActions";

const INITIAL_STATE = {
    fileName: '',
    columns: [],
    step: 0
 }

 export default function trainingReducer(state=INITIAL_STATE, action) {
     switch(action.type){
        case Types.ON_READ_FILE: {
            return {
                ...state,
                fileName: action.fileName,
                columns: action.columns,
                step: 1,
            }
        }

        default:
            return state
     }
 }