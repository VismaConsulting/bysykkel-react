import {GET_CHALLENGES_FAILURE, GET_CHALLENGES_REQUEST, GET_CHALLENGES_SUCCESS, SHOW_CHALLENGE_DETAILS} from "../actions/types";

const inititalState = {
    challenges: [],
    pending: false,
    error: null,
    selectedChallenge: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CHALLENGES_REQUEST:
            return {
                ...state,
                pending: true,
                selectedChallenge: null
            };
        case GET_CHALLENGES_SUCCESS:
            return {
                ...state,
                challenges: action.challenges.challenges,
                pending: false
            };
        case GET_CHALLENGES_FAILURE:
            return {
                ...state,
                error: action.error,
                pending: false
            };
        case SHOW_CHALLENGE_DETAILS:
            return {
                ...state,
                selectedChallenge: action.challenge
            };
        default:
            return state;
    }
};
