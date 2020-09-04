import { PROGRESS } from "../constants/action_types";

var initialState = {
    progress: false,
}

export default (state = initialState, action) => {

    switch (action.type) {

        case PROGRESS:
            return {
                ...state,
                progress: action.payload
            }
        default:
            return state;
    }
}
