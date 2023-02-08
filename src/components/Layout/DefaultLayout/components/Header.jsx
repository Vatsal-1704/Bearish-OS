import React, { useEffect, useState } from "react";
import { AppBar, Badge, Box, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";

import { switchDrawerMode } from "../../../../redux/action/Layout/action";
import { MENU_LIST, NAVIGATION_MENU_LIST } from "./utiles";
import NavigationIcons from "./NavigationIcons";
import drawerIcon from "../../../../Images/Bearish/chevron_double_backward.svg";

const INITIAL_STATE = () => ({
    headerNavigationIcons: NAVIGATION_MENU_LIST({}), menu: {
        isOpen: false, data: null, list: []
    }
});

const Header = () => {

    const [state, setState] = useState(INITIAL_STATE());
    const drawer = useSelector(state => state.layout.drawer);
    const dispatch = useDispatch();

    const changeDrawerMode = () => dispatch(switchDrawerMode());

    const onMenuCloseHandler = () => setState(prevState => ({ ...prevState, menu: { ...prevState.menu, isOpen: false } }));

    const onSettingClickHandler = (e) => {
        setState(prevState => ({
            ...prevState, menu: {
                ...prevState.menu, isOpen: true, data: e.currentTarget
            }
        }));
    };

    const onProfileClickHandler = () => {
    };
    // const onLogoutClickHandler = () => dispatch(logout());

    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            headerNavigationIcons: NAVIGATION_MENU_LIST({ onSettingClickHandler }),
            menu: {
                ...prevState.menu, list: MENU_LIST({ onProfileClickHandler, /*onLogoutClickHandler*/ }),
            }
        }));
    }, []);

    return (<>
        <AppBar>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2, color: 'black', display: !drawer.isOpen &&'none' }}
                    onClick={changeDrawerMode}>
                    <img src={drawerIcon} alt={''} />
                </IconButton>
                <Typography sx={{ color: 'black' }} variant="h5" noWrap component="div">
                    Dashboard
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Stack direction={'row'}>
                    <NavigationIcons icons={state.headerNavigationIcons} />
                </Stack>
                <Menu open={state.menu.isOpen}
                    anchorEl={state.menu.data}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose={onMenuCloseHandler}
                >
                    {state.menu.list.map(({ value, icon: Icon, badge, onClickHandler }, i) => <MenuItem
                        onClick={onClickHandler}
                        key={i}>
                        <IconButton disableFocusRipple={true} disableRipple={true} sx={{ color: 'inherit' }}>
                            <Badge badgeContent={badge} color="error">
                                <Icon />
                            </Badge>
                        </IconButton>
                        <Typography sx={{ color: 'inherit' }}>{value}</Typography>
                    </MenuItem>)}
                </Menu>
            </Toolbar>
        </AppBar>
    </>)
}

export default Header;
