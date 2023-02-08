import React, {useState} from "react";
import {Stack} from "@mui/material";
import classes from "./Attachments.module.css";
import downIcon from "../../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../../Images/Bearish/chevron_up.svg";

const INITIAL_ARRAY = [
    {
        name: 'Bearish',
        icon: upIcon
    }, {
        name: 'Google Drive',
        icon: upIcon
    }, {
        name: 'Dropbox',
        icon: upIcon
    }, {
        name: 'Box',
        icon: upIcon
    }, {
        name: 'OneDrive',
        icon: upIcon
    }, {
        name: 'Adobe CC',
        icon: upIcon
    }, {
        name: 'Upload',
        icon: upIcon
    },
];

const Attachments = (props) => {
    const {handleSelect, placeholder} = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Stack alignItems={'center'} direction={'row'} gap={'20px'}>
                <Stack fontSize={'18px'}>
                    Attachments
                </Stack>
                <Stack sx={{position: 'relative'}}>
                    <Stack className={classes.selectView}>
                        <Stack className={classes.selectTab}
                               onClick={(e) => setIsOpen(pre => !isOpen)}>
                            <Stack className={classes.selectName}>
                                {placeholder}
                            </Stack>
                            <img src={isOpen ? downIcon : upIcon} alt={''}/>
                        </Stack>
                    </Stack>
                    {isOpen ?
                        <Stack className={classes.dropdown}>
                            <Stack padding={'10px'} gap={'5px'}>
                                {(INITIAL_ARRAY || []).map((item, index) => (
                                    <Stack key={index}
                                           className={classes.dropdownItem}
                                           onClick={() => {
                                               handleSelect(item);
                                               setIsOpen(() => false)
                                           }}>
                                        <img style={{width: '15px'}} src={item.icon} alt={''}/>
                                        <Stack fontSize={'11px'}>
                                            {item.name}
                                        </Stack>
                                    </Stack>
                                ))}
                            </Stack>
                        </Stack>
                        : <></>}
                </Stack>
            </Stack>
        </>
    )
};
export default Attachments;