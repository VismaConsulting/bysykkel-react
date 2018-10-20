import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {BysykkelMap} from './components/BysykkelMap';
import {SelectedStation} from './components/SelectedStation';
import {getStations, showStationDetails} from './actions/stationsActions';
import './App.css';
import './css/sees.css'
import ReactLoading from 'react-loading';

import {getChallenges, showChallengeDetails} from "./actions/challengesActions";
import {SelectedChallenge} from "./components/SelectedChallenge";

class App extends Component {
    componentDidMount() {
        this.props.getStations();
        this.props.getChallenges();
    }

    render() {
        const {
            stations,
            pending,
            error,
            showStationDetails,
            visChallenge,
            selectedStation,
            selectedChallenge,
            challenges
        } = this.props;

        return (
            <div className="App">
                {pending ? (
                    <div className='spinning'>
                        <ReactLoading type='spinningBubbles'/>
                    </div>
                ) : error ? (
                    <div className='spinning'>En feil oppstod</div>
                ) : (
                    <Fragment>
                        <div className="container fadeIn">
                            <SelectedStation station={selectedStation}>
                                <SelectedChallenge station={selectedStation}
                                                   challenge={selectedChallenge}/>
                            </SelectedStation>

                            <BysykkelMap
                                stations={stations}
                                challenges={challenges}
                                onStationClick={showStationDetails}
                                onChallengeClick={visChallenge}
                            />
                        </div>
                    </Fragment>
                )}
            </div>
        );
    }
}

export default connect(
    state => ({
        stations: state.stations.stations,
        challenges: state.challenges.challenges,
        pending: state.stations.pending || state.challenges.pending,
        error: state.stations.error || state.challenges.error,
        selectedStation: state.stations.selectedStation,
        selectedChallenge: state.challenges.selectedChallenge
    }),
    dispatch => ({
        getStations: () => dispatch(getStations()),
        getChallenges: () => dispatch(getChallenges()),
        showStationDetails: station => dispatch(showStationDetails(station)),
        visChallenge: (station, challenge) => {
            dispatch(showStationDetails(station));
            dispatch(showChallengeDetails(challenge))
        }
    })
)(App);
