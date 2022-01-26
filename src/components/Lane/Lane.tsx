import { Box, Stack, Typography } from "@mui/material"
import React, { useContext, useEffect } from 'react'
import TaskContext from "../../context/TaskContext";
import { useDrop } from "react-dnd";
import { BoardItem, ILaneProps } from "../../types";
import useDB from "../../utils/hooks/useDB";
import MemoizedItem from "../Item/Item";



const Lane = (props: ILaneProps) => {
    const { moveItem, getLaneItems, laneItems } = useContext(TaskContext);
    const { laneTitle, laneId } = props;

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "todoitem",
        drop: (item: BoardItem) => {
            addItemToBoard(item, laneId)
        }
    }))

    useEffect(() => {
        getLaneItems(laneId)
    }, [])

    const addItemToBoard = (item: BoardItem, newLaneId: string) => {
        moveItem(item, newLaneId);
    }



    return (
        <Box sx={{
            border: "1px solid black",
            width: "250px",
            margin: "20px",
            height: "500px",
            borderRadius: "10px"
        }}
            ref={drop}>
            <Box sx={{
                textAlign: "center"
            }}>
                <Typography>{laneTitle}</Typography>
            </Box>
            <Stack spacing={.5} sx={{
                display: "flex",
                justifyContent: "center"
            }}>
                {/* {laneItems.length ? laneItems.map((entry: any) => {
                    return <MemoizedItem text={entry.text} status={entry.status} laneId={entry.laneId} id={2} type="todoitem" key={entry._id}></MemoizedItem>
                }) : ""} */}
            </Stack>
        </Box >
    )
}

const MemoizedLane = React.memo(Lane)
export default MemoizedLane;
