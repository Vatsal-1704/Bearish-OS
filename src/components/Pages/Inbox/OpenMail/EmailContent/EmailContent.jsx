import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "./EmailContent.module.css";
import userIcon from "../../../../../Images/Bearish/dd.jpg";
import undoIcon from "../../../../../Images/Bearish/undo.svg";
import ComposeEmail from "../../ComposeEmail/ComposeEmail";

const EmailContent = () => {
    const [state, setState] = useState();
    const handleCloseComposeEmail = () => setState(pre => ({...pre, composeEmail: false}));
    return (
        <>
            <Stack className={classes.mailContentMain}>
                <Stack fontFamily={'Source Serif Pro'} padding={'10px 10px 10px 23px'}>
                    <Stack fontSize={'15px'} fontWeight={600}>
                        Subject Line
                    </Stack>
                    <Stack className={classes.mailDetail}>
                        <Stack direction={'row'} gap={'10px'}>
                            <Stack className={classes.userImage}>
                                <img className={classes.image} src={userIcon} alt={''}/>
                            </Stack>
                            <Stack gap={'10px'}>
                                <Stack alignItems={'center'} direction={'row'} gap={'20px'}>
                                    <Stack fontSize={'15px'}>
                                        Sender Name
                                    </Stack>
                                    <Stack fontSize={'11px'} sx={{opacity: 0.6}}>
                                        Sender Email Address
                                    </Stack>
                                </Stack>
                                <Stack fontSize={'11px'} sx={{opacity: 0.6}}>
                                    to Recipient Email Address
                                </Stack>

                            </Stack>
                        </Stack>
                        <Stack direction={'row'} gap={'12px'}>
                            <Stack fontSize={'11px'} sx={{opacity: 0.6}}>
                                Wednesday, January 12th, 2023 00:00 AM
                            </Stack>
                            <Stack>
                                <img
                                    onClick={() => setState(pre => ({...pre, composeEmail: true}))}
                                    src={undoIcon}
                                    style={{cursor: 'pointer'}}
                                    alt={''}/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                {state?.composeEmail ? <Stack className={classes.bottomSubjectEmail}>
                    <ComposeEmail handleClose={handleCloseComposeEmail}/>
                </Stack> : <> </>}
            </Stack>
        </>
    )
};
export default EmailContent;