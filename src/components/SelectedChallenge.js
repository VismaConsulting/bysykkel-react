import React from 'react';

export const SelectedChallenge = ({ station, challenge }) => {
    if (!challenge || station.id !== challenge.stationId) {
        return null;
    }

    const {type, points} = challenge;

    const description = type === 'HENT' ?
        `Hent en sykkel fra dette stativet for å få ${points} poeng`
        : `Lever en sykkel til dette stativet for å få ${points} poeng` ;

    return (
        <div><span className="bold">Challenge:&nbsp;</span>{description}</div>
    );
};
