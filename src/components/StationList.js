import React from 'react';
import { StationListEntry } from './StationListEntry';

export const StationList = ({ stations }) => {
    if (!stations) {
        return null;
    }

    return (
        <div className='stationList'>
            {
                stations.map(station=>{
                    const { id, title, numberOfLocks } = station;
                    const { latitude, longitude } = station.bounds[0];
                    const anchor = [latitude, longitude];
                    
                    return <StationListEntry key={id} title={title} numberOfLocks={numberOfLocks}/>
                })
            }
        </div>
    );
};
