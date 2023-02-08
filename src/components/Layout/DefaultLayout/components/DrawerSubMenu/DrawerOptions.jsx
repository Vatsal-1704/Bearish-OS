import { ListItem, ListItemText, Popover, Stack, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import classes from "./DrawerOption.module.css";
import forwerdArrow from "../../../../../Images/Bearish/chevron_forward.svg";
import upArrow from "../../../../../Images/Bearish/chevron_up.svg";


const DrawerOptions = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openAccodian, setOpenAccodian] = useState();

    const handleClick = (event, index) => {
        setOpenAccodian(index);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <Box className={classes.OptionContainer} sx={{ width: "500px" }}>
            {
                props?.options?.map((ele, i) => (
                    <ListItem
                        key={i}
                        className={classes.listItem}
                        onClick={(e) => handleClick(e, i)}
                    >
                        <Stack sx={{
                            px: {
                                xs: 1.15,
                                sm: 1.15
                            },
                            py: {
                                xs: 1.15,
                                sm: 1.15
                            },
                            my: 0.3,
                            boxShadow: 'unset !important',
                        }}  >
                            <Stack direction={'row'} gap={'10px'}>
                                <img style={{ width: '25px', height: '25px' }} src={ele.icon} alt={ele.name} />
                                <Typography className={classes.drawerListText}>{ele.name}</Typography>
                            </Stack>
                        </Stack>
                        <img src={openAccodian === i && open ? forwerdArrow : upArrow} alt="upArrow" />
                    </ListItem>
                ))
            }
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorPosition={{ left: 20 }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                menuStyle={{ boxShadow: 'none' }}
                PaperProps={{
                    style: { width: '300px', marginLeft: '20px', border: "2px solid white" },
                }}
            >
                <Stack sx={{ padding: "21px" }}>
                    <Typography>Create a New Folder</Typography>
                    <Stack sx={{
                        backgroundColor: '#5ee2a042',
                        justifyContent: 'center',
                        height: '30px',
                        width: '85px',
                        alignItems: 'center',
                        borderRadius: '10px',
                        marginLeft: "auto",
                    }}>
                        Create
                    </Stack>
                </Stack>
            </Popover>
        </Box>
    )
};

export default DrawerOptions