import React from 'react';
import axios from 'axios';

export const SelectedStation = ({ station, isStationReserved }) => {
    if (!station) {
        return null;
    }

    const reserveBike = () => {
        let bysykkelApiUrl = 'api/reservation';
        axios.post(bysykkelApiUrl, {
            user: 'user',
            stationId: station.id
        })
            .then(response => {
                console.log(response)
                isStationReserved(true, response.expiration)
            })
            .catch(error => {
                isStationReserved(true)
                console.log(error)
            });
    }

    const bookABike = () => {
        let bysykkelApiUrl = 'api/booking';
        axios.post(bysykkelApiUrl, {
            user: 'user',
            stationId: station.id
        })
            .then(response => {
                console.log(response)
                isStationReserved(true)
            })
            .catch(error => {
                isStationReserved(true)
                console.log(error)
            });
    }
    
    return (
        <div>
            <div>Valgt stasjon: {station.title}</div>
            <div>Kapasitet: {station.number_of_locks}</div>

            <div></div>

            <button className='reserveButton' onClick={reserveBike}>Resever sykkel</button>
            <button className='reserveButton' onClick={bookABike}>Book en sykkel</button>
        </div>
    );
};
