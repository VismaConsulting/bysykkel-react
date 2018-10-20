import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { BysykkelMap } from './components/BysykkelMap';
import { SelectedStation } from './components/SelectedStation';
import { StationList } from './components/StationList';
import { getStations, showStationDetails } from './actions/stationsActions';
import './App.css';

class App extends Component {
    state = {
        reservationCompleted: false,
        endTimeReservation: null,
        backButton: false
    }

    componentDidMount() {
        this.props.getStations();
    }

    isStationReserved = (reserve,reserveTime) => {
        console.log(reserve, reserveTime)
        let endtime = reserveTime.substring(11, 19)
        
        this.setState({
            reservationCompleted: reserve,
            endTimeReservation: endtime
        })
    }

    backButton = () => {
        this.setState({
            backButton: true
        })
    }

    render() {
        const {
            stations,
            pending,
            error,
            showStationDetails,
            selectedStation
        } = this.props;

        const {
            reservationCompleted,
            endTimeReservation,
            backButton
        } = this.state

        let stationsMock = [
            {
                id: 1,
                title: 'Title1',
                numberOfLocks: 30,
                bounds: [
                    {
                        latitude: 59.90810,
                        longitude: 10.75773
                    }
                ]
            },
            {
                id: 2,
                title: 'Title2',
                numberOfLocks: 10,
                bounds: [
                    {
                        latitude: 59.91954708306714,
                        longitude: 10.75773
                    }
                ]
            },
            {
                id: 3,
                title: 'Title3',
                numberOfLocks: 20,
                bounds: [
                    {
                        latitude: 59.92006331516298,
                        longitude: 10.792715428955063
                    }
                ]
            }
        ]

        return (
            <div className="App">
                {pending ? (
                    <div>Laster inn stasjoner...</div>
                ) : error ? (
                    <div>En feil oppstod</div>
                ) : !selectedStation || backButton ? (
                    <Fragment>
                        <BysykkelMap
                            stations={stations}
                            onStationClick={showStationDetails}
                        />                        
                    </Fragment>
                ) : !reservationCompleted ? (
                    <SelectedStation station={selectedStation} isStationReserved={this.isStationReserved} /> 
                ) : 
                    <div>
                        <div>Reservervasjon fullført.</div> 
                        <div>Hent sykkelen innen: { endTimeReservation}</div>
                        <button className='reserveButton' onClick={this.backButton}>Gå tilbake</button>
                    </div>
                }
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
