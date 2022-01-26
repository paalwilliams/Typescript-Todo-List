import { createContext } from 'react';
import { BoardItem } from "../types";


interface ITaskContext {
    loading: boolean,
    error: boolean,
    lanes: any,
    setLane: Function,
    moveItem: (item: BoardItem, newLaneId: string) => void;
    getLanes: Function,
    getLaneItems: Function,
    addLaneItem: Function,
    laneItems: any
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export default TaskContext;