import { Box, Button, Modal, Typography } from "@mui/material"
import React, { ReactElement } from 'react'
import { isWhiteSpaceLike } from "typescript";

interface IItemModalProps {
    children: (ReactElement[] | ReactElement),
    label: string;
}
const ItemModal = (props: IItemModalProps) => {
    const { children, label } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        backgroundColor: "white",
        width: "80%",
        maxWidth: "500px",
        borderRadius: "10px",
        padding: "20px",
        margin: "0 auto",
        marginTop: "100px"
    }
    return (
        <>
            <Button onClick={handleOpen}>{label}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </>
    )
}

export default ItemModal
