import React, {useState} from "react";
import classes from "./Dropdown.module.css";
import {Stack} from "@mui/material";
import downIcon from "../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../Images/Bearish/chevron_up.svg";

const INITIAL_ARRAY = [
    {name: 'Name - Lists'},
    {name: 'Name - Boards'},
    {name: 'Name - Checklist'},
    {name: 'Name - Whiteboard'},
    {name: 'Name - Note'},
    {name: 'Name - Docs and Wikis'}

]

const HierarchyDropdown = (props) => {
    const {placeholder, handleSelect} = props;
    const [isOpen, setIsOpen] = useState({drop1: false, drop2: false});

    return (
        <>
            <Stack className={classes.selectView}>
                <Stack className={classes.selectTab} onClick={(e) => setIsOpen(pre => ({...pre, drop1: !pre.drop1}))}>
                    <Stack className={classes.selectName}>
                        {placeholder}
                    </Stack>
                    <img src={isOpen.drop1 ? downIcon : upIcon} alt={''}/>
                </Stack>
                {isOpen.drop1 ? <Stack className={classes.dropdown}>
                    <Stack gap={'5px'} padding={'10px'}>
                        <Stack className={classes.selectTabDrop2}
                               onClick={(e) => setIsOpen(pre => ({...pre, drop2: !pre.drop2}))}>
                            <img src={isOpen.drop2 ? downIcon : upIcon} alt={''}/>
                            <Stack fontSize={'12px'} justifyContent={'center'}>
                                Workspace Name
                            </Stack>
                        </Stack>
                        {isOpen.drop2 ? <Stack padding={'5px 10px 10px 15px'} gap={'13px'}>
                            {(INITIAL_ARRAY || []).map((item, index) => (
                                <Stack
                                    key={index}
                                    className={classes.workspaceListItem}
                                    onClick={() => {
                                        handleSelect(item);
                                        setIsOpen(() => ({drop1: false, drop2: false}))
                                    }}>
                                    {item.name}
                                </Stack>
                            ))}
                        </Stack> : <> </>}
                    </Stack>
                </Stack> : <> </>}
            </Stack>
        </>
    )
};
export default HierarchyDropdown;