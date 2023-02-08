import {Dashboard as DashboardIcon} from "@mui/icons-material";
import BearishLogo from "../Images/Bearish/bearish logo.png";
import check_circled from "../Images/Bearish/check_circled.svg";
import home from "../Images/Bearish/home.svg";
import mail from "../Images/Bearish/mail.svg";
import search from "../Images/Bearish/search.svg";
import video_recorder from "../Images/Bearish/video_recorder.svg";
import message from "../Images/Bearish/message.svg";
import add from "../Images/Bearish/add_circled.svg";
import calendar from "../Images/Bearish/calendar.svg";
import group from "../Images/Bearish/group.svg";
import person from "../Images/Bearish/person.svg";
import WorkSpace from "../Images/Bearish/Light WorkSpace.svg"
import folder from "../Images/Bearish/Light folder.svg"
import boards from "../Images/Bearish/Light boards.svg"
import checkList from "../Images/Bearish/Light clipboard.svg"
import whiteBoard from "../Images/Bearish/Light laptop.svg"
import List from "../Images/Bearish/Light list.svg"
import docs_wikis from "../Images/Bearish/Light hybrid_view.svg"
import notes from "../Images/Bearish/Light document.svg"
import folder_add from "../Images/Bearish/Light folder_add.svg"

import {Login, DefaultLayout, Dashboard, SignUp} from "../components";
import {Inbox} from "../components/Pages/Inbox";
import OpenMail from "../components/Pages/Inbox/OpenMail/OpenMail";
import { ContactCenter } from "../components/Pages/ContactCenter";

export const ROUTE_LIST = () => [
    {
        name: 'login',
        element: Login,
        path: '/login',
        authRequired: false
    },
    {
        name: 'signup',
        element: SignUp,
        path: '/signup',
        authRequired: false
    },
    // {
    //     name: 'Contact Center Page',
    //     element: ContactCenter,
    //     path: '/contact-center',
    //     authRequired: false
    // },
    {
        name: 'defaultLayout',
        element: DefaultLayout,
        authRequired: true,
        routeList: [
            {
                name: 'Bearish OS',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                icon: BearishLogo,
                authRequired: true
            },
            {
                name: 'Search Bearish OS',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                authRequired: true
            },
            {
                name: 'Dashboard',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                icon: home,
                authRequired: true,
            },
            {
                name: 'Video Calls',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                icon: video_recorder,
                authRequired: true,
                subRout: [],

            },
            {
                name: 'Inbox',
                element: Inbox,
                path: '/email-center',
                visibleOn: ['drawer'],
                icon: mail,
                authRequired: true,
                subRout: []
            },
            {
                name: 'Inbox',
                element: OpenMail,
                path: '/email-center/:emailId',
                visibleOn: ['drawer'],
                icon: mail,
                authRequired: true,
                subRout: []
            },
            {
                name: 'Workspaces',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                icon: check_circled,
                authRequired: true,
                subRout: [
                    {
                        name: "WorkSpace Name",
                        element: Dashboard,
                        path: '/dashboard',
                        visibleOn: ['drawer'],
                        icon: WorkSpace,
                        authRequired: true,
                        options: [
                            {
                                name: "Boards",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: boards,
                                authRequired: true,
                            },
                            {
                                name: "Checklists",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: checkList,
                                authRequired: true,
                            },
                            {
                                name: "WhiteBoards",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: whiteBoard,
                                authRequired: true,
                            },
                            {
                                name: "List",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: List,
                                authRequired: true,
                            },
                            {
                                name: "Docs and Wikis",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: docs_wikis,
                                authRequired: true,
                            },
                            {
                                name: "Notes",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: notes,
                                authRequired: true,
                            },
                            {
                                name: "Add an Item",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: add,
                                authRequired: true,
                            },
                        ]
                    },
                    {
                        name: "Folders",
                        element: Dashboard,
                        path: '/dashboard',
                        visibleOn: ['drawer'],
                        icon: folder,
                        authRequired: true,
                        options: [
                            {
                                name: "Folder Name",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: folder,
                                authRequired: true,
                            },
                            {
                                name: "Create New Folder",
                                element: Dashboard,
                                path: '/dashboard',
                                visibleOn: ['drawer'],
                                icon: folder_add,
                                authRequired: true,
                            }
                        ]
                    },
                ]
            },
            {
                name: 'Create a Workspace',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                icon: add,
                authRequired: true
            },
            {
                name: 'Calendar',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                icon: calendar,
                authRequired: true,
                subRout: []
            },
            {
                name: 'Messages',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                icon: message,
                authRequired: true,
                subRout: []
            },
            {
                name: 'Contacts',
                element: ContactCenter,
                path: '/contact-center',
                visibleOn: ['drawer'],
                icon: group,
                authRequired: true,
                subRout: []
            },
            {
                name: 'Share with Me',
                element: Dashboard,
                path: '/dashboard',
                visibleOn: ['drawer'],
                icon: person,
                authRequired: true,
                subRout: []
            }
        ]
    }];
// }].filter(({authRequired}) => localStorage.getItem('token') ? authRequired : !authRequired);
