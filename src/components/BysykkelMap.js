import React, {Component} from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import _ from 'lodash'
import StarMarker from "./MapMarker";

export class BysykkelMap extends Component {
    static defaultProps = {
        stations: [],
        challenges: [],
        center: [59.913868, 10.741732],
        zoom: 12,
        width: 1000,
        height: 700
    };

    handleStationClick = ({payload}) => {
        this.props.onStationClick(payload)
    };

    handleChallengeClick = ({payload}) => {
        this.props.onChallengeClick(payload)
    };

    render() {
        const {stations, center, zoom, width, height, challenges} = this.props;

        return challenges && stations && (
            <Map center={center} zoom={zoom} width={width} height={height}>
                {stations.map(station => {
                    const {id} = station;
                    const challenge = _.find(challenges, {stationId: id});
                    console.log(challenge);
                    const {latitude, longitude} = station.bounds[0];
                    const anchor = [latitude, longitude];
                    if (challenge) {
                        return (
                            <StarMarker key={id}
                                        type={challenge.type}
                                        anchor={anchor}
                                        payload={challenge}
                                        onClick={this.handleChallengeClick}
                            />
                        )
                    } else {
                        return (
                            <Marker
                                key={id}
                                anchor={anchor}
                                payload={station}
                                onClick={this.handleStationClick}
                            />
                        );
                    }

                })}
            </Map>
        );
    }
}
