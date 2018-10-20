import { combineReducers } from 'redux';
import stations from './stationsReducer';
import challenges from './challengesReducer'

export default combineReducers({
    stations,
    challenges
});
