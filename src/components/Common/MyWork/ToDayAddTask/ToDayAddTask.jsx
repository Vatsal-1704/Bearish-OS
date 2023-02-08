import React, {useState} from "react";
import {Stack} from "@mui/material";
import moment from "moment";
import classes from "./ToDayAddTask.module.css";
import PriorityDropdown from "../../Prioritydropdown/PriorityDropdown";
import HierarchyDropdown from "../../HierarchyDropdown/HierarchyDropdown";
import SearchDropdown from "../../SearchDropdown/SearchDropdown";
import AddCheckLis from "../AddCheckListAndSubTask/AddCheckLis";
import AddSubTask from "../AddCheckListAndSubTask/AddSubTask";
import Attachments from "../Attachments/Attachments";
import AttachmentsUser from "../AttachmentsUser/AttachmentsUser";
import upperDoubleArrowIcon from "../../../../Images/Bearish/upperDoubleArrow.svg";
import downIcon from "../../../../Images/Bearish/chevron_down.svg";
import upIcon from "../../../../Images/Bearish/chevron_up.svg";
import greenRightIcon from "../../../../Images/Bearish/greenRightIcon.svg";
import add_circledIcon from "../../../../Images/Bearish/add_circled.svg";
import pickerIcon from "../../../../Images/Bearish/eye_dropper.svg";
import flagIcon from "../../../../Images/Bearish/flag.svg";
import check_allIcon from "../../../../Images/Bearish/check_all.svg";

const INITIAL_PRIORITY_ARRAY = [{
    priorityIcon: upperDoubleArrowIcon,
    priority: 'High',
    pickerIcon: pickerIcon,
    colorCode: '#ff2121',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Medium',
    pickerIcon: pickerIcon,
    colorCode: '#ffa906',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Low',
    pickerIcon: pickerIcon,
    colorCode: '#040eff',
    isOpen: false
}, {
    priorityIcon: upperDoubleArrowIcon,
    priority: 'Custom',
    pickerIcon: pickerIcon,
    colorCode: '#62e3a2',
    isOpen: false
}];

const ToDayAddTask = (props) => {
    const {handleCloseAddTaskModal} = props;
    const [state, setState] = useState({
        datePicker: false,
        assignedDatePicker: false,
        selectDate: new Date(),
        assignedDate: new Date(),
        checkList: false,
        subTask: false
    });

    const [task, setTask] = useState();
    const [search, setSearch] = useState();

    const [selections, setSelections] = useState();
    const [priorityArray, setPriorityArray] = useState(INITIAL_PRIORITY_ARRAY);

    const handleDateChange = async (date) => {
        setState(pre => ({...pre, selectDate: date, datePicker: false}))
    };
    const handleAssignedDateChange = async (date) => {
        setState(pre => ({...pre, assignedDate: date, assignedDatePicker: false}));
    };

    const handleSelectPriority = (priority) => {
        setSelections(pre => ({...pre, priority}))
    };

    const handleSelectWorkspace = (workspace) => {
        setSelections(pre => ({...pre, workspace}))
    };

    const handleSelectAssignedTo = (assignedTo) => {
        setSelections(pre => ({...pre, assignedTo}))
    };

    const handleSelectReportTo = (reportTo) => {
        setSelections(pre => ({...pre, reportTo}))
    };

    const handleSelectAttachment = (attachment) => {
        setSelections(pre => ({...pre, attachment}))
    };

    const handleAssignedSearch = (assigned) => setSearch(pre => ({...pre, assigned}));

    const handleReportSearch = (report) => setSearch(pre => ({...pre, report}));

    const handleSelectPicker = (index) => {
        setPriorityArray(priority =>
            priority.map((eachPriority, eachPriorityIndex) => {
                return eachPriorityIndex === index ?
                    {
                        ...eachPriority,
                        isOpen: !eachPriority.isOpen
                    } :
                    {
                        ...eachPriority,
                        isOpen: false
                    }
            }))
    };

    const handleSelectColor = async (colorCode, index) => {
        await setPriorityArray(priority =>
            priority.map((eachPriority, eachPriorityIndex) => {
                return eachPriorityIndex === index ?
                    {
                        ...eachPriority,
                        colorCode
                    } : eachPriority
            }));
        setSelections(pre => ({...pre, priority: priorityArray[index]}))
    };

    return (
        <>
            <Stack className={classes.toDayAddTask}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack direction={'row'} gap={'5px'}>
                        <Stack className={classes.squareBox}
                               sx={{background: (selections?.priority?.colorCode || '#fff')}}/>
                        <input
                            placeholder={'Name your Task'}
                            className={classes.nameYourTask}
                            type={'text'}
                            onChange={({target}) => setTask(pre => ({...pre, taskName: target.value}))}
                        />
                        <Stack>

                        </Stack>
                    </Stack>
                    <Stack direction={'row'} gap={'10px'}>
                        <img style={{opacity: 0.5}} src={flagIcon} alt={''}/>
                        <Stack width={'133px'} fontFamily={'Source Serif Pro'}>
                            <PriorityDropdown
                                handleSelect={handleSelectPriority}
                                placeholder={(selections?.priority?.priority || 'Priority')}
                                handleSelectPicker={handleSelectPicker}
                                handleSelectColor={handleSelectColor}
                                priorityArray={priorityArray}/>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={classes.dueMain}>
                    <Stack fontSize={'18px'}>
                        In
                    </Stack>
                    <Stack width={'225px'}>
                        <HierarchyDropdown placeholder={selections?.workspace?.name || ''}
                                           handleSelect={handleSelectWorkspace}/>
                    </Stack>
                    <Stack justifyContent={'center'} fontSize={'18px'}>
                        Due on
                    </Stack>
                    <Stack marginLeft={'55px'}>
                        <Stack fontFamily={'Source Serif Pro'}>
                            <Stack className={classes.selectTab}
                                   onClick={(e) => setState(pre => ({...pre, datePicker: true}))}>
                                <Stack marginLeft={'5px'} fontSize={'18px'}>
                                    {moment(state.selectDate).format('DD/MM/YYYY')}
                                </Stack>
                                <img src={state.datePicker ? downIcon : upIcon} alt={''}/>
                                <input
                                    id={'datepicker'}
                                    type="date"
                                    value={state.selectDate}
                                    className={classes.datePicker}
                                    onChange={(e) => handleDateChange(e.currentTarget.value)}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={classes.assignedMain}>
                    <Stack fontSize={'18px'}>
                        Assigned To
                    </Stack>
                    <Stack width={'225px'}>
                        <SearchDropdown
                            placeholder={selections?.assignedTo?.email || ''}
                            handleSearch={handleAssignedSearch}
                            searchValue={search?.assigned || ''}
                            handleSelect={handleSelectAssignedTo}/>
                    </Stack>
                    <Stack justifyContent={'center'} fontSize={'18px'}>
                        On
                    </Stack>
                    <Stack marginLeft={'11px'}>
                        <Stack fontFamily={'Source Serif Pro'}>
                            <Stack className={classes.selectTab}
                                   onClick={(e) => setState(pre => ({
                                       ...pre,
                                       assignedDatePicker: true
                                   }))}>
                                <Stack marginLeft={'5px'} fontSize={'18px'}>
                                    {moment(state.assignedDate).format('DD/MM/YYYY')}
                                </Stack>
                                <img src={state.assignedDatePicker ? downIcon : upIcon} alt={''}/>
                                <input
                                    id={'datepicker'}
                                    type="date"
                                    value={state.assignedDate}
                                    className={classes.datePicker}
                                    onChange={(e) => handleAssignedDateChange(e.currentTarget.value)}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack className={classes.reportMain}>
                    <Stack fontSize={'18px'}>
                        Report To
                    </Stack>
                    <Stack width={'225px'}>
                        <SearchDropdown
                            placeholder={selections?.reportTo?.email}
                            handleSearch={handleReportSearch}
                            searchValue={search?.report || ''}
                            handleSelect={handleSelectReportTo}/>
                    </Stack>
                    <img style={{opacity: 0.3}} src={check_allIcon} alt={''}/>
                    <Stack className={classes.selectView}>
                        <Stack className={classes.selectTab}>
                            <Stack className={classes.selectName}>
                                Status
                            </Stack>
                            <img src={upIcon} alt={''}/>
                        </Stack>
                    </Stack>
                    {/*<Stack className={classes.squareBox}*/}
                    {/*       sx={{background: (selections?.priority?.colorCode || '#fff')}}/>*/}
                    {/*<Stack fontSize={'18px'} justifyContent={'center'}>*/}
                    {/*    Label*/}
                    {/*</Stack>*/}
                </Stack>
                <Stack>
                    <textarea
                        className={classes.detailsOfTheTask}
                        placeholder={'Details of the task'}
                        onChange={({target}) => setTask(pre => ({...pre, taskDetails: target.value}))}/>
                </Stack>
                <Stack className={classes.addOptions}>
                    <Stack
                        className={classes.checkListLabel}
                        onClick={() => setState(pre => ({...pre, subTask: false, checkList: true}))}>
                        <img width={'15px'} src={greenRightIcon} alt={''}/>
                        <Stack fontSize={'11px'}>
                            Add a Checklist
                        </Stack>
                    </Stack>
                    <Stack
                        className={classes.checkListLabel}
                        onClick={() => setState(pre => ({...pre, checkList: false, subTask: true}))}>
                        <img width={'15px'} src={add_circledIcon} alt={''}/>
                        <Stack fontSize={'11px'}>
                            Add a Subtask
                        </Stack>
                    </Stack>
                </Stack>
                {(state.subTask || state.checkList) && <Stack marginTop={'20px'}>
                    {state.checkList && <AddCheckLis/>}
                    {state.subTask && <AddSubTask/>}
                </Stack>}
                <Stack marginTop={(state.subTask || state.checkList) ? '54px' : '20px'}>
                    <Attachments
                        placeholder={selections?.attachment?.name || 'Add Now'}
                        handleSelect={handleSelectAttachment}/>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}
                       marginTop={(state.subTask || state.checkList) ? '20px' : '94px'}>
                    <AttachmentsUser/>
                    <Stack justifyContent={'flex-end'}>
                        <Stack className={classes.createBtn} onClick={handleCloseAddTaskModal}>
                            Create
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default ToDayAddTask;