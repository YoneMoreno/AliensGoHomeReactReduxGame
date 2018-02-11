import {MOVE_OBJECTS, moveObjects} from "../actions/index";

const initialState = {
    angle: 45,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        default:
            return state;
    }
}

export default reducer;