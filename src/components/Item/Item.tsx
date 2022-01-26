import { Box, Typography } from "@mui/material"
import React from 'react'
import { useDrag } from "react-dnd";
import { isPropertySignature } from "typescript";
import { v4 as uuidv4 } from 'uuid';

interface IItemProps {
    text: string;
    status: string;
    id: number;
    key?: any
    laneId: any;
    type: string
}

const Item = (props: IItemProps) => {
    const { text, status, laneId, id, type } = props;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: type,
        item: {
            id: id,
            type: type,
            text: text,
            laneId: laneId
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))



    return (
        <Box
            ref={drag}
            sx={{
                width: 200,
                height: 50,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
                borderRadius: "5px"
            }}
        >
            <Typography>{text}</Typography>
        </Box>

    )
}
const MemoizedItem = React.memo(Item)
export default MemoizedItem
