import { BottomNavigation } from "@mui/material";
import AddItemModal from "../AddLaneModal/AddLaneModal";
import ManageLaneModal from "../ManageLaneModal/ManageLaneModal";

const styles = {
    position: "fixed",
    bottom: 0,
    width: "100%"
}

const Toolbar = () => {
    return (
        <BottomNavigation
            sx={styles}
            showLabels
            // value={value}
            onChange={(event, newValue) => {
                console.log('hello')
            }}
        >
            <AddItemModal />
            <ManageLaneModal />
        </BottomNavigation>
    )
}

export default Toolbar


