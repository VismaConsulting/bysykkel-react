import axios from 'axios';

import {
    GET_STATIONS_REQUEST,
    GET_STATIONS_SUCCESS,
    GET_STATIONS_FAILURE,
    SHOW_STATION_DETAILS
} from './types';

const apiUrl = '/api/stations';

export const getStations = () => dispatch => {
    dispatch(getStationsRequest());
    axios.get(apiUrl)
        .then(response => {
            dispatch(getStationsSuccess(response.data));
        })
        .catch(error => {
            dispatch(getStationsFailure(error));
        });
};

const getStationsRequest = () => ({
    type: GET_STATIONS_REQUEST
});

const getStationsSuccess = stations => ({
    type: GET_STATIONS_SUCCESS,
    stations
});

const getStationsFailure = error => ({
    type: GET_STATIONS_FAILURE,
    error
});

export const showStationDetails = station => ({
    type: SHOW_STATION_DETAILS,
    station
});
