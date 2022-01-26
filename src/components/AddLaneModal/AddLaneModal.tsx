import React from 'react'
import AddItemForm from "./AddLaneForm"
import ItemModal from "../Modal/ItemModal"

const AddLaneModal = () => {
    return (
        <ItemModal label="Add Lane">
            <AddItemForm />
        </ItemModal>
    )
}

export default React.memo(AddLaneModal)
