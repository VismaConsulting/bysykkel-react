import {
    GET_STATIONS_REQUEST,
    GET_STATIONS_SUCCESS,
    GET_STATIONS_FAILURE,
    SHOW_STATION_DETAILS
} from '../actions/types';

const initialState = {
    stations: [],
    pending: false,
    error: null,
    selectedStation: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_STATIONS_REQUEST:
            return {
                ...state,
                pending: true,
                selectedStation: null
            };
        case GET_STATIONS_SUCCESS:
            return {
                ...state,
                stations: action.stations,
                pending: false
            };
        case GET_STATIONS_FAILURE:
            return {
                ...state,
                error: action.error,
                pending: false
            };
        case SHOW_STATION_DETAILS:
            return {
                ...state,
                selectedStation: action.station
            };
        default:
            return state;
    }
};
