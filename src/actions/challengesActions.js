import axios from 'axios';

import {
    GET_CHALLENGES_REQUEST,
    GET_CHALLENGES_SUCCESS,
    GET_CHALLENGES_FAILURE,
    SHOW_CHALLENGE_DETAILS
} from './types';

const apiUrl = '/api/challenges';

export const getChallenges = () => dispatch => {
    dispatch(getChallengesRequest());
    axios.get(apiUrl)
        .then(response => {
            dispatch(getChallengesSuccess(response.data));
        })
        .catch(error => {
            dispatch(getChallengesFailure(error));
        });
};

const getChallengesRequest = () => ({
    type: GET_CHALLENGES_REQUEST
});

const getChallengesSuccess = challenges => ({
    type: GET_CHALLENGES_SUCCESS,
    challenges
});

const getChallengesFailure = error => ({
    type: GET_CHALLENGES_FAILURE,
    error
});

export const showChallengeDetails = challenge => ({
    type: SHOW_CHALLENGE_DETAILS,
    challenge
});
