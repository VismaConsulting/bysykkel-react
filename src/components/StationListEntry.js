import React from 'react';

export const StationListEntry = ({ id, title, numberOfLocks }) => {
    return (
        <div onClick={() => {}} id={id} className='stationListEntry'>
            <div>{ title }</div>
            <div>0 / { numberOfLocks } ledige</div>
        </div>
    );
};
