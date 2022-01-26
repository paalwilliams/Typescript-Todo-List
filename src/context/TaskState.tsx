import { useReducer } from 'react';
import TaskContext from "./TaskContext";
import TaskReducer from './TaskReducer';
import { v4 as uuid } from 'uuid'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    SET_LANE_ITEMS,
    ADD_LANE_ITEM,
    ADD_LANE,
    MOVE_ITEM,
    SET_LANES
} from './DispatchTypes';
import useDB from "../utils/hooks/useDB";

const AuthState = (props: any) => {

    const { getLanesFromDB, createLane, getItemsForLane, createLaneItem } = useDB();

    const initialState = {
        isAuthenticated: false,
        loading: true,
        user: null,
        error: false,
        lanes: {},
        laneItems: {}
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const setLane = (lane: any) => {
        dispatch({
            type: ADD_LANE,
            payload: lane
        })
    }

    const addLaneItem = async (laneItem: any, text: string) => {
        let item = await createLaneItem(laneItem, text);
        dispatch({
            type: ADD_LANE_ITEM,
            payload: item
        })
    }

    const moveItem = (item: any, newLane: any) => {
        dispatch({
            type: MOVE_ITEM,
            payload: { item, newLane }
        })
    }

    const getLanes = async () => {
        try {
            const lanes = await getLanesFromDB();
            dispatch({
                type: SET_LANES,
                payload: lanes
            });
        } catch (e: any) {
            console.log(e)
        }
    }

    const getLaneItems = async (laneID: string) => {
        try {
            let items = await getItemsForLane(laneID)
            dispatch({
                type: SET_LANE_ITEMS,
                payload: items
            })

        } catch (e: any) {
            console.log(e)
        }
    }


    return (
        <TaskContext.Provider
            value={{
                loading: state.loading,
                error: state.error,
                lanes: state.lanes,
                laneItems: state.laneItems,
                setLane,
                moveItem,
                getLanes,
                getLaneItems,
                addLaneItem
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};

export default AuthState;