/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    ADD_LANE_ITEM,
    MOVE_ITEM,
    SET_LANES,
    ADD_LANE,
    SET_LANE_ITEMS
} from './DispatchTypes';

export default (state: any, action: any) => {
    switch (action.type) {
        case ADD_LANE:
            return {
                ...state,
                lanes: {
                    ...state.lanes,
                    [action.payload._id]: action.payload
                },
            }
        case MOVE_ITEM:
            return {
                ...state,
                laneItems: [...state.laneItems]
            }
        case SET_LANES:
            return {
                ...state,
                lanes: { laneData: action.payload, laneItems: {} },
            }
        case ADD_LANE_ITEM:
            return {
                ...state,
                // laneItems: {
                //     [action.payload._id]: action.payload
                // }
            }
        case SET_LANE_ITEMS:
            return {
                ...state,
                laneItems: action.payload
            }


        default:
            return state;
    }
};