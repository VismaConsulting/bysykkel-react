import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

export class BysykkelMap extends Component {
    static defaultProps = {
        stations: [],
        center: [59.913868, 10.741732],
        zoom: 12,
        width: 100,
        height: 700
    };

    handleClick = ({ payload }) => {
        this.props.onStationClick(payload)
    };

    render() {
        const { stations, center, zoom, width, height } = this.props;

        return (
            <Map center={center} zoom={zoom} width={width} height={height}>
                {stations.map(station => {
                    const { id } = station;
                    const { latitude, longitude } = station.bounds[0];
                    const anchor = [latitude, longitude];
                    return (
                        <Marker
                            key={id}
                            anchor={anchor}
                            payload={station}
                            onClick={this.handleClick}
                        />
                    );
                })}
            </Map>
        );
    }
}
