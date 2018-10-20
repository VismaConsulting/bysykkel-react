import React from 'react';

import {kapasitet} from "../typescript/typescript";

export const SelectedStation = ({station, children}) => {
    if (!station) {
        return null;
    }

    return (
        <div className="tooltip">
            <div>
                <div>{station.title} - {station.subtitle}</div>
                <div>{kapasitet}: {station.number_of_locks} sykler</div>
            </div>
            {children}
        </div>
    );
};
