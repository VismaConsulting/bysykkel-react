import React from 'react';

export const SelectedChallenge = ({ station, challenge }) => {
    if (!challenge) {
        return null;
    }

    const {type, points} = challenge;

    const description = type === 'HENT' ?
        ` Hent en sykkel fra dette stativet for å få ${points} poeng`
        : ` Lever en sykkel til dette stativet for å få ${points} poeng` ;

    return (
        <div><span className="bold">Challenge:</span>{description}</div>
    );
};
