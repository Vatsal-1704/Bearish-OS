import {email} from "../utiles/initialStore";
import {SHOW_EMAIL} from "../action/EmailCenter/actionType";

const EmailCenterReducer = (state = email, {type, payload}) => {
    switch (type) {
        case SHOW_EMAIL: {
            return {
                ...state, isShow: payload.isShow
            };
        }
        default:
            return state;
    }
};

export default EmailCenterReducer;
