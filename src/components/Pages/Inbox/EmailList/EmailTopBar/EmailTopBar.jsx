import React from "react";
import {Stack} from "@mui/material";
import classes from "./EmailTopBar.module.css";
import checkBoxIcon from "../../../../../Images/Bearish/checkbox_unchecked.svg"
import syncIcon from "../../../../../Images/Bearish/sync.svg"
import backIcon from "../../../../../Images/Bearish/chevron_backward.svg"
import nextIcon from "../../../../../Images/Bearish/chevron_forward.svg"

const EmailTopBar = () => {

    return (
        <>
            <Stack>
                <Stack className={classes.emailTopBarMain}>
                    <Stack className={classes.emailTop}>
                        <Stack direction={'row'} gap={'10px'}>
                            <img style={{width: '20px', cursor: 'pointer'}} src={checkBoxIcon} alt={''}/>
                            <img style={{width: '20px', cursor: 'pointer'}} src={syncIcon} alt={''}/>
                        </Stack>
                        <Stack alignItems={'center'} direction={'row'} gap={'10px'}>
                            <Stack>
                                0 of 00000
                            </Stack>
                            <img style={{cursor: 'pointer'}} src={backIcon} alt={''}/>
                            <img style={{marginLeft: '15px', cursor: 'pointer'}} src={nextIcon} alt={''}/>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default EmailTopBar;