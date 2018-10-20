import React, {Component} from 'react'
import PropTypes from 'prop-types'

//import pin from '../img/pin.png'
//import pinRetina from '../img/pin@2x.png'
//import pinHover from '../img/pin-hover.png'
//import pinHoverRetina from '../img/pin-hover@2x.png'

const imageOffset = {
    left: 15,
    top: 31
};

export default class Marker extends Component {
    static propTypes = {
        // input, passed to events
        anchor: PropTypes.array.isRequired,
        payload: PropTypes.any,

        // optional modifiers
        hover: PropTypes.bool,

        // callbacks
        onClick: PropTypes.func,
        onContextMenu: PropTypes.func,
        onMouseOver: PropTypes.func,
        onMouseOut: PropTypes.func,

        // pigeon variables
        left: PropTypes.number,
        top: PropTypes.number,

        // pigeon functions
        latLngToPixel: PropTypes.func,
        pixelToLatLng: PropTypes.func
    };
    // what do you expect to get back with the event
    eventParameters = (event) => ({
        event,
        anchor: this.props.anchor,
        payload: this.props.payload
    });
    handleClick = (event) => {
        this.props.onClick && this.props.onClick(this.eventParameters(event))
    };
    handleContextMenu = (event) => {
        this.props.onContextMenu && this.props.onContextMenu(this.eventParameters(event))
    };
    handleMouseOver = (event) => {
        this.props.onMouseOver && this.props.onMouseOver(this.eventParameters(event))
        this.setState({hover: true})
    };
    handleMouseOut = (event) => {
        this.props.onMouseOut && this.props.onMouseOut(this.eventParameters(event))
        this.setState({hover: false})
    };

    // lifecycle

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    // render

    render() {
        const {left, top, onClick, type} = this.props;

        const style = {
            position: 'absolute',
            transform: `translate(${left - imageOffset.left}px, ${top - imageOffset.top}px)`,
            cursor: onClick ? 'pointer' : 'default'
        };

        return (
            <div style={style}
                 className={type === 'HENT' ? 'map-marker-hent' : 'map-marker-lever'}
                 onClick={this.handleClick}
                 onContextMenu={this.handleContextMenu}
                 onMouseOver={this.handleMouseOver}
                 onMouseOut={this.handleMouseOut}>
                {/*<img src={this.image()} width={29} height={34} alt=''/>*/}
            </div>
        )
    }
}