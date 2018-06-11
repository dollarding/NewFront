import {LOAD_BENEFITS_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function benefitsReducer(state = initialState.benefits, action) {
    switch (action.type) {
        case LOAD_BENEFITS_SUCCESS:
            return action.benefits;
        default:
            return state;
    }
}


