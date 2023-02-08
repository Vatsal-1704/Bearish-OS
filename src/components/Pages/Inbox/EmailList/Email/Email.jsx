import React from "react";
import {Stack} from "@mui/material";
import ComposeButton from "../EmailTopBar/ComposeButton/ComposeButton";
import EmailTopBar from "../EmailTopBar/EmailTopBar";
import EmailList from "../EmailList";

const Email = () => {

    return (
        <>
            <Stack fontFamily={'Source Serif Pro'} direction={'row'} gap={1}>
                <ComposeButton/>
                <Stack gap={'5px'}>
                    <EmailTopBar/>
                    <EmailList/>
                </Stack>
            </Stack>
        </>
    )
};
export default Email;