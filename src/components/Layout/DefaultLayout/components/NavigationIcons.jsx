import {Badge, IconButton} from "@mui/material";
import React from "react";

const NavigationIcons = ({icons}) => {
    return (
        <>
            {
                icons.map(({onClickHandler, color, icon: Icon,visibleOnMobile}, i) => <IconButton
                        key={i}
                        sx={{display: {xs: visibleOnMobile ? 'flex' : 'none', sm: 'block'}}}
                        onClick={onClickHandler}
                        color={color}>
                        <Badge badgeContent={0} color="error">
                            <Icon/>
                        </Badge>
                    </IconButton>
                )
            }
        </>
    );
};

export default NavigationIcons;
