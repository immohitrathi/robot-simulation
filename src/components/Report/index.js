import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper from './../../components/PlaceRobot/Wrapper';
class Report extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleDirections = this.handleDirections.bind(this);
    }
    handleDirections(){
        const direction = this.props.facePosition % 360;
        
        if (direction === 0 || direction === 1 || direction === -1) {
            return 'South';
        } else if (direction === 90 || direction === -270) {
            return 'West';
        } else if (direction === 180 || direction === -180) {
            return 'North';
        } else if (direction === 270 || direction === -90) {
            return 'East';
        }        
    }
    
    render() {
        return(
            <Wrapper>
                <h5 style={{float:'left', padding:'0px 20px 0px 0px'}}>X: {this.props.xPosition}</h5>
                <h5 style={{float:'left', padding:'0px 20px 0px 0px'}}>Y: {this.props.yPosition}</h5>
                <h5 style={{float:'left'}}>Facing: {this.handleDirections()} </h5>
            </Wrapper>
        );
    }
}

Report.propTypes = {
    xPosition: PropTypes.number,
    yPosition: PropTypes.number,
    facePosition: PropTypes.number
}

export default Report;