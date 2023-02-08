import {SHOW_EMAIL} from "./actionType";

export const showEmail = ({isShow}) => ({
    type: SHOW_EMAIL,
    payload: {isShow}
});
