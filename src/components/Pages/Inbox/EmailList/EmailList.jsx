import React, {useState} from "react";
import {Stack} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import classes from "./EmailList.module.css";
import EmailPreview from "../EmailPreview/EmailPreview";
import {showEmail} from "../../../../redux/action/EmailCenter/action";
import checkBoxIcon from "../../../../Images/Bearish/checkbox_unchecked.svg";
import deleteIcon from "../../../../Images/Bearish/trash.svg";
import starIcon from "../../../../Images/Bearish/star.svg";
import hourglassIcon from "../../../../Images/Bearish/hourglass.svg";
import mailIcon from "../../../../Images/Bearish/mail.svg";
import arrow_forwardIcon from "../../../../Images/Bearish/arrow_forward.svg";

const INITIAL_ARRAY = [
    {
        contactName: 'Milan Kodinariya',
        subject: 'Test',
        desc: 'Hello',
        receivedTime: 'Jan, 18 2013',
        hover: false,
        senderName: 'Heavy Driver'
    }, {
        contactName: 'Contact Name',
        subject: 'Subject of Email',
        desc: 'First few words of email.',
        receivedTime: 'Time Received',
        hover: false,
        senderName: 'Heavy Driver'
    }, {
        contactName: 'Contact Name',
        subject: 'Subject of Email',
        desc: 'First few words of email.',
        receivedTime: 'Time Received',
        hover: false,
        senderName: 'Heavy Driver'
    }, {
        contactName: 'Contact Name',
        subject: 'Subject of Email',
        desc: 'First few words of email.',
        receivedTime: 'Time Received',
        hover: false,
        senderName: 'Heavy Driver'
    }, {
        contactName: 'Contact Name',
        subject: 'Subject of Email',
        desc: 'First few words of email.',
        receivedTime: 'Time Received',
        hover: false,
        senderName: 'Heavy Driver'
    },
];

const EmailList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = useState(INITIAL_ARRAY);

    const [hoverData, setHoverData] = useState();

    const handleMouseEnter = async (index) => {
        await setState(email =>
            email.map((eachEmail, eachEmailIndex) => {
                return eachEmailIndex === index ? {
                    ...eachEmail,
                    hover: true
                } : eachEmail
            }));
        setHoverData(() => state[index]);
    };

    const handleMouseLeave = async (index) => {
        await setState(email =>
            email.map((eachEmail, eachEmailIndex) => {
                return eachEmailIndex === index ? {
                    ...eachEmail,
                    hover: false
                } : eachEmail
            }))
        setHoverData();
    };

    const handleClickEmail = () => {
        navigate("/email-center/12");
        dispatch(showEmail({isShow: true}));
    };

    return (
        <>
            <Stack direction={'row'} gap={2}>
                <Stack gap={'5px'}>
                    {(state || []).map((item, index) => (
                        <Stack>
                            <Stack key={index} className={classes.emailItem}
                                   onClick={() => handleClickEmail()}
                                   onMouseEnter={() => handleMouseEnter(index)}
                                   onMouseLeave={() => handleMouseLeave(index)}>
                                <img style={{width: '20px', marginLeft: '8px'}} src={checkBoxIcon} alt={''}/>
                                <img style={{width: '20px', marginLeft: '10px'}} src={starIcon} alt={''}/>
                                <Stack className={classes.contactName}>
                                    {item.contactName}
                                </Stack>
                                <Stack className={classes.subject} marginLeft={'16px'}>
                                    {item.subject}
                                </Stack>
                                <Stack className={classes.emailDescription} marginLeft={'16px'}>
                                    {item.subject}
                                </Stack>
                                {item.hover ? <Stack>
                                        <Stack marginLeft={'200px'} direction={'row'} gap={'20px'}>
                                            <img style={{width: '20px'}} src={mailIcon} alt={''}/>
                                            <img style={{width: '20px'}} src={arrow_forwardIcon} alt={''}/>
                                            <img style={{width: '15px'}} src={hourglassIcon} alt={''}/>
                                            <img style={{width: '20px'}} src={deleteIcon} alt={''}/>
                                        </Stack>

                                    </Stack>
                                    : <Stack>
                                        <Stack className={classes.receivedTime}>
                                            {item.receivedTime}
                                        </Stack>
                                    </Stack>}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
                {hoverData ? <Stack>
                    <EmailPreview emailData={hoverData}/>
                </Stack> : <> </>}
            </Stack>
        </>
    )
};
export default EmailList;