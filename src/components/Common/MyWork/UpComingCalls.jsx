import React, {useState} from "react";
import classes from "./UpComingCalls.module.css";
import Stack from "@mui/material/Stack";
import moment from "moment";
import leftIcon from "../../../Images/Bearish/chevron_backward.svg";
import rightIcon from "../../../Images/Bearish/chevron_forward.svg";
import userIcon from "../../../Images/Bearish/profile_circled.svg";
import playIcon from "../../../Images/Bearish/play.svg";
import bagIcon from "../../../Images/Bearish/briefcase.svg";

const INITIAL_ARRAY = [{
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}, {
    eventName: 'Name of Event',
    dateTime: 'January 10th, 2023 00:00:00 AM',
    invitees: 'Invitees'
}];

const UpComingCalls = () => {
    const [state, setState] = useState(INITIAL_ARRAY);
    const [selectDate, setSelectDate] = useState(new Date());

    const handleNextDate = async (date) => {
        const day = new Date(date);
        const nextDay = new Date(day);
        const nextDayGMTFormat = new Date(nextDay.setDate(day.getDate() + 1));
        setSelectDate(pre => moment(nextDayGMTFormat).format('YYYY-MM-DD'));
    };

    const handlePreviousDate = async (date) => {
        const day = new Date(date);
        const nextDay = new Date(day);
        const nextDayGMTFormat = new Date(nextDay.setDate(day.getDate() - 1));
        setSelectDate(pre => moment(nextDayGMTFormat).format('YYYY-MM-DD'));
    };

    const handleDateChange = async (date) => setSelectDate(date);

    return (
        <>
            <Stack className={classes.unComingCallsMain}>
                <Stack direction={'row'} justifyContent={'space-between'} paddingRight={'10px'}>
                    <Stack className={classes.eventName}>
                        {moment(selectDate).format('LL')}
                    </Stack>
                    <input
                        id={'datepicker'}
                        type="date"
                        value={selectDate}
                        className={classes.datePicker}
                        onChange={(e) => handleDateChange(e.currentTarget.value)}
                    />
                    <Stack direction={'row'} gap={'30px'}>
                        <img alt={''} style={{cursor: 'pointer'}} src={leftIcon}
                             onClick={() => handlePreviousDate(selectDate)}/>
                        <img alt={''} src={rightIcon} style={{cursor: 'pointer'}}
                             onClick={() => handleNextDate(selectDate)}/>
                    </Stack>
                </Stack>
                <Stack sx={{overflowY: 'auto'}}>
                    <Stack width={'316px'}>
                        {(state || []).map((item, i) => (
                            <>
                                <Stack key={i} className={classes.eventContent}>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Stack className={classes.nameOfEvent}>
                                            {item.eventName}
                                        </Stack>
                                        <Stack className={classes.editEvent}>
                                            Edit
                                        </Stack>
                                    </Stack>
                                    <Stack className={classes.dateTime}>
                                        {item.dateTime}
                                    </Stack>
                                    <Stack className={classes.invitees}>
                                        {item.invitees}
                                    </Stack>
                                    <Stack direction={'row'} gap={'20px'} justifyContent={'flex-end'}>
                                        <img alt={''} style={{width: '18px', cursor: 'pointer'}} src={bagIcon}/>
                                        <img alt={''} style={{width: '18px', cursor: 'pointer'}} src={userIcon}/>
                                        <img alt={''} style={{width: '15px', cursor: 'pointer'}} src={playIcon}/>
                                    </Stack>
                                    <Stack className={classes.darkLine}/>
                                </Stack>
                            </>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default UpComingCalls;
