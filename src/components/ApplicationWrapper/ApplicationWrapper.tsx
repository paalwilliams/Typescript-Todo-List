import { Box, Typography } from "@mui/material"
import React, { useContext, useEffect } from 'react'
import TaskContext from "../../context/TaskContext"
import MemoizedLane from "../Lane/Lane"
import Item from "../Item/Item"
import { v4 as uuid } from 'uuid';
import useDB from "../../utils/hooks/useDB"
import ItemModal from "../Modal/ItemModal"
import AddItemModal from "../AddLaneModal/AddLaneModal"
import Toolbar from "../Toolbar/Toolbar"

const ApplicationWrapper = () => {
    const taskContext = useContext(TaskContext);
    const { lanes, getLanes } = taskContext;

    useEffect(() => {
        getLanes();
    }, [])

    return (
        <>
            <Box sx={{
                display: "flex"
            }}>
                {!Object.entries(lanes).length ? <Typography>No Lanes Found. Please Create a New Lane.</Typography> : ""}
                {lanes.laneData ? Object.entries(lanes.laneData).map((lane: any) => {
                    return (
                        <MemoizedLane laneTitle={lane[1].title} laneId={lane[0]} key={lane[0]} />)
                }) : ""}
            </Box>
            <Toolbar />
        </>
    )
}
const MemoizedApplicationWrapper = React.memo(ApplicationWrapper);
export default MemoizedApplicationWrapper
