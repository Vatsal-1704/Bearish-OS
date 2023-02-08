import React from "react";
import {Stack} from "@mui/material";
import classes from "./EmailPreview.module.css";

const EmailPreview = (props) => {
    const {emailData} = props;
    return (
        <>
            <Stack className={classes.emailPreviewMain}>
                <Stack gap={'10px'} padding={'10px 15px 25px 10px'}>
                    <Stack alignItems={'center'} direction={'row'} gap={'10px'}>
                        <Stack className={classes.userIcon}>

                        </Stack>
                        <Stack className={classes.senderName}>
                            {emailData.senderName}
                        </Stack>
                    </Stack>
                    <Stack className={classes.subjectLine}>
                        {emailData.subject}
                    </Stack>
                    <Stack className={classes.emailDescription}>

                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default EmailPreview;