import { Types } from "../actions/trainingActions";

const INITIAL_STATE = {
    fileName: '',
    columns: [],
 }

 export default function trainingReducer(state=INITIAL_STATE, action) {
     switch(action.type){
        case Types.ON_READ_FILE: {
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