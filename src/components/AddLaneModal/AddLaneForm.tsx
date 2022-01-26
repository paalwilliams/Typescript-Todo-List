import { Box, Button, TextField } from "@mui/material"
import React, { useState, useContext } from "react";
import useDB from "../../utils/hooks/useDB";
import TaskContext from '../../context/TaskContext';

interface IAddLaneState {
    title: string,
}

const AddLaneForm = () => {
    let { setLane } = useContext(TaskContext);
    const { createLane } = useDB();
    const [addLaneState, setAddLaneState] = useState<IAddLaneState>({
        title: ""
    });

    const style = {
        display: "flex",
        flexDirection: "column"
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddLaneState({
            ...addLaneState,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const lane = await createLane(addLaneState.title);
        setLane(lane);
        setAddLaneState({
            title: ""
        })

    }
    return (
        <Box sx={style}>
            <TextField id="standard-basic" label="Title" variant="standard" name="title" value={addLaneState.title} onChange={handleChange} sx={{ marginBottom: "10px" }} />
            <Button variant="contained" onClick={handleSubmit}>submit</Button>
        </Box >
    )
}

export default AddLaneForm
