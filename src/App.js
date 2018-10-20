import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { BysykkelMap } from './components/BysykkelMap';
import { SelectedStation } from './components/SelectedStation';
import { getStations, showStationDetails } from './actions/stationsActions';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.getStations();
    }

    render() {
        const {
            stations,
            pending,
            error,
            showStationDetails,
            selectedStation
        } = this.props;

        return (
            <div className="App">
                {pending ? (
                    <div>Laster inn stasjoner...</div>
                ) : error ? (
                    <div>En feil oppstod</div>
                ) : (
                    <Fragment>
                        <BysykkelMap
                            stations={stations}
                            onStationClick={showStationDetails}
                        />
                        <SelectedStation station={selectedStation} />
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
        selectedStation: state.stations.selectedStation
    }),
    { getStations, showStationDetails }
)(App);
