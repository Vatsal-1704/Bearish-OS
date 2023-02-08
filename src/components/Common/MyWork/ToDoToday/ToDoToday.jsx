import React, {useState} from "react";
import {Stack, Popover} from "@mui/material";
import classes from "../ToDo.module.css";
import nextIcon from "../../../../Images/Bearish/chevron_forward.svg";
import profile_circled from "../../../../Images/Bearish/profile_circled.svg";
import alarmIcon from "../../../../Images/Bearish/alarm.svg";
import multiSelectIcon from "../../../../Images/Bearish/multiselect.svg";
import AssignTo from "../AssignTo/AssignTo";

const ToDoToday = () => {

    const [select, setSelect] = useState({assignTo: false, dueDate: false, addApprovals: false});
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickAssignTo = (e) => {
        setAnchorEl(e.currentTarget);
        setSelect(pre => ({...pre, assignTo: !pre.assignTo}))
    };

    return (
        <>
            <Stack gap={'8px'} fontFamily={'Source Serif Pro'}>
                <Stack className={classes.todayList} gap={'5px'}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Stack fontSize={'15px'}>
                            Name of your Task
                        </Stack>
                        <Stack fontSize={'11px'}>
                            Workspace Name, Board
                        </Stack>
                    </Stack>
                    <Stack fontSize={'11px'}>
                        Due on 00/00/00
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Stack fontSize={'11px'}>
                            Some of the details should appear here and this place
                        </Stack>
                        <Stack justifyContent={'flex-end'}>
                            <img style={{width: '7px', cursor: 'pointer'}} src={nextIcon} alt={''}/>
                        </Stack>
                    </Stack>
                    <Stack marginTop={'10px'}>
                        <Stack direction={'row'} justifyContent={'flex-end'} gap={'20px'}>
                            <Stack className={classes.bottomBtn} onClick={handleClickAssignTo}>
                                <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={profile_circled}/>
                                <Stack fontSize={'11px'}>
                                    Assign to…
                                </Stack>
                                {select.assignTo &&  <AssignTo/>}
                            </Stack>
                            <Stack className={classes.bottomBtn}>
                                <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={alarmIcon}/>
                                <Stack fontSize={'11px'}>
                                    Due Date
                                </Stack>
                            </Stack>
                            <Stack className={classes.bottomBtn}>
                                <img alt={''} style={{width: '11px', cursor: 'pointer'}} src={multiSelectIcon}/>
                                <Stack fontSize={'11px'}>
                                    Add Approvals
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default ToDoToday;
