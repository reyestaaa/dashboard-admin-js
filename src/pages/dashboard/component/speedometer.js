import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import "./speedometerStyle.css"

function Spedometer(props) {
    return (
      <div className="spedometer-item">
        <div>
            <span className="text-title">{props.title}</span>
        </div>
        <ReactSpeedometer
        width={290}
        needleHeightRatio={0.8}
        value={50}
        maxValue={100}
        customSegmentStops={ [0 , 25, 75, 100]}
        segmentColors={['#dc3545', '#ffc107', '#198754']}
        // customSegmentLabels={[
        //   {
        //     text: '00%',
        //     position: 'INSIDE',
        //     color: '#000000',
        //   },
        //   {
        //     text: '50%',
        //     position: 'INSIDE',
        //     color: '#000000',
        //   },
        //   {
        //     text: '100%',
        //     position: 'INSIDE',
        //     color: '#000000',
        //   },
        // ]}
        // ringWidth={60}
        // needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'#0071FF'}
        textColor={'#000000'}
        />
      </div>
    )
  }

export default Spedometer;