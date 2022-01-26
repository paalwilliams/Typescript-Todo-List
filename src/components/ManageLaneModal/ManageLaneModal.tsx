import TaskContext from "../../context/TaskContext"
import ItemModal from "../Modal/ItemModal"
import { useContext } from "react"
import { Button, Grid, Icon, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const ManageLaneModal = (props: any) => {
    const { lanes } = useContext(TaskContext);
    return (
        <ItemModal label="Manage Lanes">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography sx={{ mt: 2, mb: 2 }} variant="h6" component="div">
                        Manage Lanes
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
            <List dense={true}>
                {Object.entries(lanes.laneData).map((lane: any) => {
                    return (<ListItem key={lane[0]} secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>}>
                        <ListItemText
                            primary={lane[1].title}
                        />
                    </ListItem>)
                })}

            </List>
        </ItemModal>
    )
}

export default ManageLaneModal
