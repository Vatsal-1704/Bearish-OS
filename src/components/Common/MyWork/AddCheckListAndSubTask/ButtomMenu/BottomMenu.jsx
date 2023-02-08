import React from "react";
import {Stack} from "@mui/material";
import classes from "../Rows.module.css";
import profile_circled from "../../../../../Images/Bearish/profile_circled.svg";
import alarmIcon from "../../../../../Images/Bearish/alarm.svg";
import multiSelectIcon from "../../../../../Images/Bearish/multiselect.svg";

const BottomMenu = ({handleAddRow}) => {

    return(
        <>
            <Stack marginLeft={'30px'} direction={'row'} gap={'20px'}>
                <Stack className={classes.addBtn} onClick={handleAddRow}>
                    Add
                </Stack>
                <Stack className={classes.bottomOptions}>
                    <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={profile_circled}/>
                    <Stack fontSize={'11px'}>
                        Assign to…
                    </Stack>
                </Stack>
                <Stack className={classes.bottomOptions}>
                    <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={alarmIcon}/>
                    <Stack fontSize={'11px'}>
                        Due Date
                    </Stack>
                </Stack>
                <Stack className={classes.bottomOptions}>
                    <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={multiSelectIcon}/>
                    <Stack fontSize={'11px'}>
                        Add Approvals
                    </Stack>
                </Stack>
            </Stack>
            </>
    )
};
export default BottomMenu;