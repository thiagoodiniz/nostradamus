import { Types } from "../actions/AlertActions";

const INITIAL_STATE = {
    messageText: '',
    messageType: undefined,
 }

 export default function alertReducer(state=INITIAL_STATE, action) {
     switch(action.type){
        case Types.SHOW_MESSAGE: {
            return {
                messageText: action.messageText,
                messageType: action.messageType,
            }
        }

        case Types.REMOVE_MESSAGE: {
            return INITIAL_STATE;
        }

        default:
            return state
     }
 }