import React, {useState} from "react";
import {Stack} from "@mui/material";
import {HexColorPicker} from "react-colorful";
import classes from "./Dropdown.module.css";
import upIcon from "../../../Images/Bearish/chevron_up.svg";
import downIcon from "../../../Images/Bearish/chevron_down.svg";
import {PriorityIcon} from "./PriorityIcon";

const PriorityDropdown = (props) => {

    const {placeholder = '', handleSelect, priorityArray, handleSelectPicker, handleSelectColor} = props;
    const [isOpen, setIsOpen] = useState({dropdown: false});
    return (
        <>
            <Stack>
                <Stack className={classes.selectView}>
                    <Stack className={classes.selectTab}
                           onClick={(e) => setIsOpen(pre => ({...pre, dropdown: !pre.dropdown}))}>
                        <Stack className={classes.selectName}>
                            {placeholder}
                        </Stack>
                        <img src={isOpen.dropdown ? downIcon : upIcon} alt={''}/>
                    </Stack>
                </Stack>

                {isOpen.dropdown ?
                    <Stack className={classes.dropdown}>
                        <Stack width={'100%'}>
                            <Stack padding={'10px'} gap={'3px'}>
                                {(priorityArray || []).map((item, index) => (
                                    <>
                                        <Stack
                                            key={index}
                                            className={classes.priorityItem}

                                        >
                                            <Stack onClick={() => {
                                                handleSelect(item);
                                                setIsOpen(pre => ({...pre, dropdown: false}))
                                            }}>
                                                <Stack direction={'row'} gap={'10px'}>
                                                    <PriorityIcon color={item.colorCode}/>
                                                    <Stack>
                                                        {item.priority}
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                            <img
                                                style={{width: '13px'}}
                                                src={item.pickerIcon}
                                                alt={''}
                                                onClick={() => handleSelectPicker(index)}/>
                                        </Stack>
                                        {item.isOpen ? <Stack position={`relative`} flex={1}>
                                            <Stack className={classes.colorCodePicker}>
                                                <HexColorPicker
                                                    color={item.colorCode || `#000`}
                                                    onChange={(colorCode) => handleSelectColor(colorCode, index)}/>
                                                <Stack padding={1} className={classes.colorCodeBox}>
                                                    <Stack align={`center`} fontSize={`11px`}>
                                                        {`HEX : ${item.colorCode || `#000`}`}
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Stack> : <> </>}
                                    </>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                    : <></>}

            </Stack>
        </>
    )
};
export default PriorityDropdown;