import React, {useState} from "react";
import {Stack} from "@mui/material";
import classes from "./ComposeModal.module.css";
import editIcon from "../../../../../../Images/Bearish/edit.svg"
import ComposeEmail from "../../../ComposeEmail/ComposeEmail";
import EmailDropdown from "../../../../../Common/EmailDropdown/EmailDropdown";
import ConnectAccount from "../../../../../Common/ConnectAccountButton/ConnectAccount";

const ComposeModal = (props) => {
    const {handleClose} = props;
    const [state, setState] = useState();
    const [mailsList, setMailsList] = useState([{}, {}]);
    const handleCloseComposeEmail = () => setState(pre => ({...pre, composeEmail: false}));
    const handleComposeClick = () => {
        // handleClose();
        setState(pre => ({...pre, composeEmail: true}))
    };

    return (
        <>
            <Stack className={classes.composeModalMain}>
                <Stack padding={'20px 5px 20px 10px'}>
                    <Stack className={classes.composeButton}
                           onClick={handleComposeClick}>
                        <Stack padding={'0 10px 0 10px'}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <img src={editIcon} alt={''}/>
                                <Stack fontSize={'18px'}>
                                    Compose
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack className={classes.whiteLine}/>
                    {(mailsList || []).map(() => (
                        <Stack marginTop={'15px'}>
                            <EmailDropdown/>
                        </Stack>
                    ))}
                </Stack>
                <Stack>
                    <ConnectAccount name={'Connect an Account'}/>
                </Stack>
            </Stack>
            {state?.composeEmail ? <Stack className={classes.bottomSubjectEmail}>
                <ComposeEmail handleClose={handleCloseComposeEmail}/>
            </Stack> : <> </>}
        </>
    )
};
export default ComposeModal;