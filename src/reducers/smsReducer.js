import {SEND_REQUEST_RESULT } from '../constants/actionTypes';
import initialState from './initialState';

export default function smsReducer(state = initialState.smsSent, action) {
    switch (action.type) {
        case SEND_REQUEST_RESULT:
            return action.smsSent;
        default:
            return state;
    }
}


