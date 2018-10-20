import React from 'react';

export const SelectedStation = ({ station }) => {
    if (!station) {
        return null;
    }

    return (
        <div className="tooltip">
            <div>{station.title} - {station.subtitle}</div>
            <div>Kapasitet: {station.number_of_locks} sykler</div>
        </div>
    );
};
