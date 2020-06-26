import { Types } from "../actions/trainingActions";

const INITIAL_STATE = {
    file: undefined,
    columns: [],
 }

 export default function trainingReducer(state=INITIAL_STATE, action) {
     switch(action.type){
        case Types.ON_READ_FILE: {
            return {
                ...state,
                files: action.file,
                columns: action.columns,
            }
        }

        default:
            return state
     }
 }