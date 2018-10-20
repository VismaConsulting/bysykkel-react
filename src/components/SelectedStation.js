import React from 'react';

import {kapasitet} from "../typescript/variable";

export const SelectedStation = ({ station }) => {
    if (!station) {
        return null;
    }

    return (
        <div className="tooltip">
            <div>{station.title} - {station.subtitle}</div>
            <div>{kapasitet}: {station.number_of_locks} sykler</div>
        </div>
    );
};
