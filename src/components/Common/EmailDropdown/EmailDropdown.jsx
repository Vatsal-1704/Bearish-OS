import React, {useState} from "react";
import {Stack} from "@mui/material";
import classes from "./EmailDropdown.module.css";
import email from "../../../Images/Bearish/mail.svg"
import settingsIcon from "../../../Images/Bearish/settings.svg"
import upIcon from "../../../Images/Bearish/chevron_up.svg"
import downIcon from "../../../Images/Bearish/chevron_down.svg"
import folderIcon from "../../../Images/Bearish/folder.svg"
import deleteIcon from "../../../Images/Bearish/trash.svg"
import starIcon from "../../../Images/Bearish/star.svg"
import sendIcon from "../../../Images/Bearish/send.svg"
import alarmIcon from "../../../Images/Bearish/alarm.svg"
import outboxIcon from "../../../Images/Bearish/inbox.svg"
import draftsIcon from "../../../Images/Bearish/document.svg"
import folder_addIcon from "../../../Images/Bearish/folder_add.svg"
import CreateNewFolder from "../CreateNewFolder/CreateNewFolder";

const INITIAL_ARRAY = [
    {
        name: 'Outbox',
        icon: outboxIcon
    }, {
        name: 'Starred',
        icon: starIcon
    }, {
        name: 'Sent',
        icon: sendIcon
    }, {
        name: 'Drafts',
        icon: draftsIcon
    }, {
        name: 'Scheduled',
        icon: alarmIcon
    }, {
        name: 'Trash',
        icon: deleteIcon
    }
];

const EmailDropdown = () => {

    const [state, setState] = useState({dropdown: false, folderDropdown: false});
    const [mailDropdown, setMailDropdown] = useState(INITIAL_ARRAY);
    const [folderDropdown, setFolderDropdown] = useState(INITIAL_ARRAY);

    const handleCreateFolder = () => {
        setState(pre => ({...pre, createFolder: false}))
    }
    return (
        <>
            <Stack gap={'20px'}>
                <Stack className={classes.dropdownMain}
                       sx={{backgroundColor: state.dropdown ? '#afb4e7' : '#E9EDF2'}}
                       onClick={() => setState(pre => ({...pre, dropdown: !pre.dropdown, folderDropdown: false}))}>
                    <img src={email} alt={''}/>
                    <Stack className={classes.emailName}>
                        Inbox Name
                    </Stack>
                    <img className={classes.settingIcon} src={settingsIcon} alt={''}/>
                    <img className={classes.upIcon} src={state.dropdown ? downIcon : upIcon} alt={''}/>
                </Stack>
                {state.dropdown ? <Stack className={classes.dropdown}>
                    <Stack gap={'20px'}>
                        {(mailDropdown || []).map((item, index) => (
                            <Stack key={index} direction={'row'} className={classes.mailDropdownItem}>
                                <img src={item.icon} alt={''}/>
                                <Stack className={classes.itemName}>
                                    {item.name}
                                </Stack>
                            </Stack>
                        ))}
                        <Stack>
                            <Stack className={classes.folderMain}
                                   sx={{backgroundColor: state.folderDropdown ? '#afb4e7' : '#E9EDF2'}}
                                   onClick={() => setState(pre => ({...pre, folderDropdown: !pre.folderDropdown}))}>
                                <img src={folderIcon} alt={''}/>
                                <Stack className={classes.folderTitle}>
                                    Folders
                                </Stack>
                                <img className={classes.folderDropdownIcon}
                                     src={state.folderDropdown ? downIcon : upIcon}
                                     alt={''}/>
                            </Stack>
                            {state.folderDropdown ? <Stack>
                                <Stack className={classes.folderDropdownMain}>
                                    <Stack gap={'20px'}>
                                        {(folderDropdown || []).map((item, index) => (
                                            <>
                                                <Stack key={index} direction={'row'}>
                                                    <img src={folderIcon} alt={''}/>
                                                    <Stack className={classes.folderItemName}>
                                                        Folder Name
                                                    </Stack>
                                                </Stack>
                                            </>
                                        ))}
                                        <Stack>
                                            <Stack sx={{cursor: 'pointer'}} direction={'row'} onClick={() => setState(pre => ({
                                                ...pre,
                                                createFolder: !pre?.createFolder
                                            }))}>
                                                <img src={folder_addIcon} alt={''}/>
                                                <Stack className={classes.itemName}>
                                                    Create New Folder
                                                </Stack>
                                            </Stack>
                                            {state?.createFolder && <Stack className={classes.createFolderModal}>
                                                <CreateNewFolder handleCreate={handleCreateFolder}/>
                                            </Stack>}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack> : <> </>}
                        </Stack>
                    </Stack>
                </Stack> : <> </>}
            </Stack>
        </>
    )
};
export default EmailDropdown;