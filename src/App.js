import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {BysykkelMap} from './components/BysykkelMap';
import {SelectedStation} from './components/SelectedStation';
import {getStations, showStationDetails} from './actions/stationsActions';
import './App.css';
import './css/sees.css'
import {getChallenges, showChallengeDetails} from "./actions/challengesActions";

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
            selectedStation,
            challenges
        } = this.props;

        return (
            <div className="App">
                {pending ? (
                    <div>Laster inn stasjoner...</div>
                ) : error ? (
                    <div>En feil oppstod</div>
                ) : (
                    <Fragment>
                        <div className="container">
                            <SelectedStation station={selectedStation}/>
                            <BysykkelMap
                                stations={stations}
                                challenges={challenges}
                                onStationClick={showStationDetails}
                                onChallengeClick={showChallengeDetails}
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
    {getStations, showStationDetails, showChallengeDetails, getChallenges}
)(App);
