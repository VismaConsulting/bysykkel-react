import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {BysykkelMap} from './components/BysykkelMap';
import {SelectedStation} from './components/SelectedStation';
import {getStations, showStationDetails} from './actions/stationsActions';
import './App.css';
import {getChallenges} from "./actions/challengesActions";

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
                                onStationClick={showStationDetails}
                            />
                            {challenges && challenges.map((challenge, idx) =>
                                <div key={idx}>{challenge.type}: {challenge.points}</div>
                            )}
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
        pending: state.stations.pending,
        error: state.stations.error,
        selectedStation: state.stations.selectedStation,
        challenges: state.challenges.challenges
    }),
    {getStations, showStationDetails, getChallenges}
)(App);
