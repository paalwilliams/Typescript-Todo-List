import ToDoItem from "./components/Item/Item";
import Lane from "./components/Lane/Lane";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box, unstable_useId } from "@mui/material";
import TaskState from "./context/TaskState";
import ApplicationWrapper from "./components/ApplicationWrapper/ApplicationWrapper";
import { v4 as uuid } from 'uuid';
import MemoizedApplicationWrapper from "./components/ApplicationWrapper/ApplicationWrapper";

const App = () => {

    return (
        <div className="App">
            <TaskState>
                <DndProvider backend={HTML5Backend}>
                    <MemoizedApplicationWrapper />
                </DndProvider>
            </TaskState>


        </div>
    );
}

export default App;
