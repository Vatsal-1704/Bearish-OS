import React, {useState} from "react";
import {Stack} from "@mui/material";
import classes from "./ComposeButton.module.css";
import ComposeModal from "./ComposeModal";
import editIcon from "../../../../../../Images/Bearish/edit.svg";

const ComposeButton = () => {
    const [state, setState] = useState({modal: false});
    const handleCloseComposeModal = () => setState(pre => ({...pre, modal: false}));
    return (
        <>
            <Stack>
                {!state.modal ? <Stack className={classes.composeButton}>
                    <img alt={''} style={{width: '25px', cursor: 'pointer'}} src={editIcon}
                         onClick={() => setState(pre => ({...pre, modal: true}))}/>
                </Stack> : <ComposeModal handleClose={handleCloseComposeModal}/>}

            </Stack>
        </>
    )
};
export default ComposeButton;